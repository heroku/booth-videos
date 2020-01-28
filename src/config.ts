import { VideosConfig } from "./types";

const envConfig: VideosConfig = process.env.REACT_APP_VIDEO_CONFIG
  ? JSON.parse(process.env.REACT_APP_VIDEO_CONFIG)
  : {};

const config: VideosConfig = {
  autoplay: false,
  languageEasterEggs: {
    node: false,
    ruby: false,
    java: true,
    php: false,
    python: true,
    go: false
  },
  deafultPosterUrl: window.location.origin + "/default-poster.png",
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
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/node-deploy-with-cli.mp4"
            },
            {
              language: "ruby",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/ruby-deploy-with-cli.mp4"
            },
            {
              language: "java",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/java-deploy-with-cli.mp4"
            },
            {
              language: "php",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/php-deploy-with-cli.mp4"
            },
            {
              language: "python",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/python-deploy-with-cli.mp4"
            },
            {
              language: "go",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/go-deploy-with-cli.mp4"
            }
          ]
        },
        {
          name: "Continuous Deployment with GitHub",
          videos: [
            {
              language: "node",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/github-continuous-deployment.mp4"
            },
            {
              language: "ruby",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/github-continuous-deployment.mp4"
            },
            {
              language: "java",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/github-continuous-deployment.mp4"
            },
            {
              language: "php",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/github-continuous-deployment.mp4"
            },
            {
              language: "python",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/github-continuous-deployment.mp4"
            },
            {
              language: "go",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/github-continuous-deployment.mp4"
            }
          ]
        },
        {
          name: "CI/CD: Pipeline & Review Apps",
          videos: [
            {
              language: "node",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-ci-cd-pipelines.mp4"
            },
            {
              language: "ruby",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-ci-cd-pipelines.mp4"
            },
            {
              language: "java",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-ci-cd-pipelines.mp4"
            },
            {
              language: "php",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-ci-cd-pipelines.mp4"
            },
            {
              language: "python",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-ci-cd-pipelines.mp4"
            },
            {
              language: "go",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-ci-cd-pipelines.mp4"
            }
          ]
        }
      ]
    },
    {
      name: "Manage",
      videos: [
        {
          name: "Adding Add-ons",
          videos: [
            {
              language: "node",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/node-addons.mp4"
            },
            {
              language: "ruby",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/ruby-addons.mp4"
            },
            {
              language: "java",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/java-addons.mp4"
            },
            {
              language: "php",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/php-addons.mp4"
            },
            {
              language: "python",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/python-addons.mp4"
            },
            {
              language: "go",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/go-addons.mp4"
            }
          ]
        },
        {
          name: "Application Metrics",
          videos: [
            {
              language: "node",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/app-metrics.mp4"
            },
            {
              language: "ruby",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/app-metrics.mp4"
            },
            {
              language: "java",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/app-metrics.mp4"
            },
            {
              language: "php",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/app-metrics.mp4"
            },
            {
              language: "python",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/app-metrics.mp4"
            },
            {
              language: "go",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/app-metrics.mp4"
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
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/node-scale.mp4"
            },
            {
              language: "ruby",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/ruby-scale.mp4"
            },
            {
              language: "java",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/java-scale.mp4"
            },
            {
              language: "php",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/php-scale.mp4"
            },
            {
              language: "python",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/python-scale.mp4"
            },
            {
              language: "go",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/go-scale.mp4"
            }
          ]
        }
      ]
    },
    {
      name: "Enterprise",
      videos: [
        {
          name: "Private Spaces",
          videos: [
            {
              language: "node",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-enterprise-private-spaces.mp4"
            },
            {
              language: "ruby",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-enterprise-private-spaces.mp4"
            },
            {
              language: "java",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-enterprise-private-spaces.mp4"
            },
            {
              language: "php",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-enterprise-private-spaces.mp4"
            },
            {
              language: "python",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-enterprise-private-spaces.mp4"
            },
            {
              language: "go",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-enterprise-private-spaces.mp4"
            }
          ]
        },
        {
          name: "Shield Private Spaces",
          videos: [
            {
              language: "node",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-shield-private-spaces.mp4"
            },
            {
              language: "ruby",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-shield-private-spaces.mp4"
            },
            {
              language: "java",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-shield-private-spaces.mp4"
            },
            {
              language: "php",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-shield-private-spaces.mp4"
            },
            {
              language: "python",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-shield-private-spaces.mp4"
            },
            {
              language: "go",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-shield-private-spaces.mp4"
            }
          ]
        },
        {
          name: "Enterprise Accounts",
          videos: [
            {
              language: "node",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-enterprise-accounts-teams.mp4"
            },
            {
              language: "ruby",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-enterprise-accounts-teams.mp4"
            },
            {
              language: "java",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-enterprise-accounts-teams.mp4"
            },
            {
              language: "php",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-enterprise-accounts-teams.mp4"
            },
            {
              language: "python",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-enterprise-accounts-teams.mp4"
            },
            {
              language: "go",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-enterprise-accounts-teams.mp4"
            }
          ]
        }
      ]
    }
  ]
};

export default Object.assign({}, config, envConfig);
