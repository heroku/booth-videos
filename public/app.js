// Video URLs to be cached, they need to allow CORS requests from our app
const videoUrls = [
  'https://booth-videos.s3.us-east-2.amazonaws.com/go-deploy.mp4',
  'https://booth-videos.s3.us-east-2.amazonaws.com/go-addons.mp4',
  'https://booth-videos.s3.us-east-2.amazonaws.com/go-scale.mp4',
  'https://booth-videos.s3.us-east-2.amazonaws.com/cd-github.mp4'
]


// -- UI elements -----------------------------------------------------------

// Log in the DOM for better visibility in iOS
let logUi = null;
const logUiSelector = '.log-ui';
window.logUi = document.querySelector(logUiSelector);
const log = function(string) {
  if (window.logUi) {
    window.logUi.innerText = string + "\n" + window.logUi.innerText;
  } else {
    console.log(string);
  }
}


// UI for jumping to different videos
const player = document.querySelector('video');
const jumps = document.querySelectorAll('.jump-video');
for (let i = 0; i < jumps.length; i++) {
  jumps[i].addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    const videoUrl = e.target.getAttribute('data-video-url');
    sendToServiceWorker({ type: 'read-cached-video', url: videoUrl });
  });
}


// Click to cache all videos
document.querySelector('.cache-all-videos').addEventListener('click', function(e) {
  e.preventDefault();
  e.stopPropagation();
  sendToServiceWorker({ type: 'cache-all-videos', urls: videoUrls });
});


// -- Setup/communicate with the Service Worker

if ('serviceWorker' in navigator) {
  // Register Service Worker
  navigator.serviceWorker.register('/sw.js')
    .then(function() {
      log('Service Worker registered');
    })
    .catch(function() {
      log('Service Worker registration failed');
    });

  // Receives message objects from Service Workers in the event's data field.
  // Message objects must include a type attribute to process them appropriately.
  //
  // These are the supported message types and their structure:
  // - { type: 'log', data: String }
  navigator.serviceWorker.addEventListener('message', function (e) {
    const msg = e.data;
    switch(msg.type) {
      case 'log':
        log(msg.data);
        break;
      case 'cached-video':
        console.log('Trying to play cached video');
        const blob = new Blob([msg.arrayBuffer], { type: 'video/mp4'})
        console.log(blob);
        player.src = URL.createObjectURL(blob);
        player.play();
        log('Playing cached version of ' + msg.url);
        break;
      default: log('Unknown message type (' + msg.type + ') received from the Service Worker');
    }
  });

} else {
  log('This browser does not support Service Workers');
}


// Sends message to Service Worker
function sendToServiceWorker(message) {
  if (navigator.serviceWorker && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage(message);
  } else {
    console.log('Can not send ', message, ' yet, service worker not ready yet');
    console.log(navigator.serviceWorker);
  }
}
