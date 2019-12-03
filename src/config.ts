import { VideosConfig } from "./types";

const envConfig: VideosConfig = process.env.REACT_APP_VIDEO_CONFIG
  ? JSON.parse(process.env.REACT_APP_VIDEO_CONFIG)
  : {};

const config: VideosConfig = {
  autoplay: false,
  languageEasterEggs: {
    node: false,
    ruby: false,
    java: false,
    php: false,
    python: false,
    go: false
  },
  sections: [
    {
      name: "Deploy",
      videos: [
        {
          name: "Deploy with the CLI",
          videos: [
            {
              language: "node",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/node-1-deploy-with-cli-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/node/node-1-deploy-with-cli.png"
            },
            {
              language: "ruby",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/ruby-1-deploy-with-cli-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/ruby/ruby-1-deploy-with-cli.png"
            },
            {
              language: "java",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/java-1-deploy-with-cli-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/java/java-1-deploy-with-cli.png"
            },
            {
              language: "php",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/php-1-deploy-with-cli-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/php/php-1-deploy-with-cli.png"
            },
            {
              language: "python",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/python-1-deploy-with-cli-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/python/python-1-deploy-with-cli.png"
            },
            {
              language: "go",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/go-1-deploy-with-cli-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/go/go-1-deploy-with-cli.png"
            }
          ]
        },
        {
          name: "Continuous Deployment with GitHub",
          videos: [
            {
              language: "node",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/node-2-cd-with-github-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/node/node-2-cd-with-github.png"
            },
            {
              language: "ruby",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/ruby-2-cd-with-github-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/ruby/ruby-2-cd-with-github.png"
            },
            {
              language: "java",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/java-2-cd-with-github-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/java/java-2-cd-with-github.png"
            },
            {
              language: "php",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/php-2-cd-with-github-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/php/php-2-cd-with-github.png"
            },
            {
              language: "python",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/python-2-cd-with-github-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/python/python-2-cd-with-github.png"
            },
            {
              language: "go",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/go-2-cd-with-github-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/go/go-2-cd-with-github.png"
            }
          ]
        }
      ]
    },
    {
      name: "Manage",
      videos: [
        {
          name: "Application Metrics",
          videos: [
            {
              language: "node",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/node-3-app-metrics-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/node/node-3-app-metrics.png"
            },
            {
              language: "ruby",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/ruby-3-app-metrics-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/ruby/ruby-3-app-metrics.png"
            },
            {
              language: "java",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/java-3-app-metrics-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/java/java-3-app-metrics.png"
            },
            {
              language: "php",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/php-3-app-metrics-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/php/php-3-app-metrics.png"
            },
            {
              language: "python",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/python-3-app-metrics-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/python/python-3-app-metrics.png"
            },
            {
              language: "go",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/go-3-app-metrics-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/go/go-3-app-metrics.png"
            }
          ]
        },
        {
          name: "Adding Add-ons",
          videos: [
            {
              language: "node",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/node-4-addons-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/node/node-4-addons.png"
            },
            {
              language: "ruby",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/ruby-4-addons-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/ruby/ruby-4-addons.png"
            },
            {
              language: "java",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/java-4-addons-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/java/java-4-addons.png"
            },
            {
              language: "php",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/php-4-addons-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/php/php-4-addons.png"
            },
            {
              language: "python",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/python-4-addons-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/python/python-4-addons.png"
            },
            {
              language: "go",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/go-4-addons-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/go/go-4-addons.png"
            }
          ]
        }
      ]
    },
    {
      name: "Scale",
      videos: [
        {
          name: "Slide to scale",
          videos: [
            {
              language: "node",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/node-5-scale-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/node/node-5-scale.png"
            },
            {
              language: "ruby",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/ruby-5-scale-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/ruby/ruby-5-scale.png"
            },
            {
              language: "java",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/java-5-scale-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/java/java-5-scale.png"
            },
            {
              language: "php",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/php-5-scale-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/php/php-5-scale.png"
            },
            {
              language: "python",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/python-5-scale-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/python/python-5-scale.png"
            },
            {
              language: "go",
              url:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/go-5-scale-16-9.mp4",
              posterUrl:
                "https://heroku-booth-videos-test.s3.amazonaws.com/events/title-cards/go/go-5-scale.png"
            }
          ]
        }
      ]
    }
  ]
};

export default Object.assign({}, config, envConfig);
