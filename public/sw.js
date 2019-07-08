// -- Service Worker lifecycle ----------------------------------------------------------------

self.addEventListener('install', function(e) {
  // Activate worker immediately, regardless of any running worker
  e.waitUntil(self.skipWaiting())
});


self.addEventListener('activate', function(e) {
  // Become available to all pages without waiting for a reload
  e.waitUntil(self.clients.claim());
})


// -- Communicate with the page (client) ---------------------------------------

// Sends generic messages to browser clients
function sendToClients(data) {
  self.clients.matchAll({ includeUncontrolled: true })
    .then(function(clients) {
      clients.map(function(client) {
        client.postMessage(data);
      });
    })
    .catch(function(e) {
      console.log('Problem sending to clients');
      console.log(e);
    });
}


function logToClients(string) {
  sendToClients({type: 'log', data: '[SW] ' + string});
}


// Receives message objects from clients in the event's data field.
// Message objects must include a type attribute to process them appropriately.
//
// These are the supported message types and their structure:
// - { type: 'log', data: String }
self.addEventListener('message', function(e) {
  const msg = e.data;
  switch(msg.type) {
    case 'log':
      logToClients(msg.data);
      break;
    case 'cache-all-videos':
      logToClients('Caching all videos');
      for (let i = 0; i < msg.urls.length; i++) {
        cacheVideo(msg.urls[i]);
      }
      break;
    case 'read-cached-video':
      readCachedVideo(msg.url);
      break;
    default: logToClients('Unknown message type (' + msg.type + ') received from the client');
  }
});


// -- Cache/read videos -----------------------------------------------------------------

self.importScripts('/idb-keyval-iife.js');

// Fetches video and persists it as an arrayBuffer in indexedDB, using the URL as the key
function cacheVideo(url) {
  fetch(url, { mode: 'cors' })
    .then(function(response) {
      logToClients('Fetching ' + url);
      return response.arrayBuffer()
    })
    .then(function(buffer) {
      logToClients('Storing ' + url);
      idbKeyval.set(url, buffer);
    });
}

// Reads video from cache so we can send it back to the client
function readCachedVideo(url) {
  logToClients('Looking for ' + url + ' in the cache');
  idbKeyval.get(url)
    .then(function(cachedArrayBuffer) {
      sendToClients({
        type: 'cached-video',
        url: url,
        arrayBuffer: cachedArrayBuffer
      });
    })
    .catch(function() {
      logToClients('Could not find ' + url + ' in the cache');
    });
}
