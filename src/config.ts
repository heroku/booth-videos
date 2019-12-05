import { VideosConfig } from "./types";

const envConfig: VideosConfig = process.env.REACT_APP_VIDEO_CONFIG
  ? JSON.parse(process.env.REACT_APP_VIDEO_CONFIG)
  : {};

const config: VideosConfig = {
  autoplay: false,
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
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/node-deploy-with-cli.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/node/node-1-deploy-with-cli.png"
            },
            {
              language: "ruby",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/ruby-deploy-with-cli.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/ruby/ruby-1-deploy-with-cli.png"
            },
            {
              language: "java",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/java-deploy-with-cli.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/java/java-1-deploy-with-cli.png"
            },
            {
              language: "php",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/php-deploy-with-cli.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/php/php-1-deploy-with-cli.png"
            },
            {
              language: "python",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/python-deploy-with-cli.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/python/python-1-deploy-with-cli.png"
            },
            {
              language: "go",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/go-deploy-with-cli.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/go/go-1-deploy-with-cli.png"
            }
          ]
        },
        {
          name: "Continuous Deployment with GitHub",
          videos: [
            {
              language: "node",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/github-continuous-deployment.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/node/node-2-cd-with-github.png"
            },
            {
              language: "ruby",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/github-continuous-deployment.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/ruby/ruby-2-cd-with-github.png"
            },
            {
              language: "java",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/github-continuous-deployment.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/java/java-2-cd-with-github.png"
            },
            {
              language: "php",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/github-continuous-deployment.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/php/php-2-cd-with-github.png"
            },
            {
              language: "python",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/github-continuous-deployment.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/python/python-2-cd-with-github.png"
            },
            {
              language: "go",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/github-continuous-deployment.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/go/go-2-cd-with-github.png"
            }
          ]
        },
        {
          name: "CI/CD: Pipeline & Review Apps",
          videos: [
            {
              language: "node",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-ci-cd-pipelines.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/node/ci-cd-node.png"
            },
            {
              language: "ruby",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-ci-cd-pipelines.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/ruby/ci-cd-ruby.png"
            },
            {
              language: "java",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-ci-cd-pipelines.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/java/ci-cd-java.png"
            },
            {
              language: "php",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-ci-cd-pipelines.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/php/ci-cd-php.png"
            },
            {
              language: "python",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-ci-cd-pipelines.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/python/ci-cd-python.png"
            },
            {
              language: "go",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-ci-cd-pipelines.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/go/ci-cd-go.png"
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
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/node-addons.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/node/node-4-addons.png"
            },
            {
              language: "ruby",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/ruby-addons.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/ruby/ruby-4-addons.png"
            },
            {
              language: "java",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/java-addons.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/java/java-4-addons.png"
            },
            {
              language: "php",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/php-addons.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/php/php-4-addons.png"
            },
            {
              language: "python",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/python-addons.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/python/python-4-addons.png"
            },
            {
              language: "go",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/go-addons.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/go/go-4-addons.png"
            }
          ]
        },
        {
          name: "Application Metrics",
          videos: [
            {
              language: "node",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/app-metrics.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/node/node-3-app-metrics.png"
            },
            {
              language: "ruby",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/app-metrics.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/ruby/ruby-3-app-metrics.png"
            },
            {
              language: "java",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/app-metrics.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/java/java-3-app-metrics.png"
            },
            {
              language: "php",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/app-metrics.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/php/php-3-app-metrics.png"
            },
            {
              language: "python",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/app-metrics.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/python/python-3-app-metrics.png"
            },
            {
              language: "go",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/app-metrics.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/go/go-3-app-metrics.png"
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
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/node-scale.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/node/node-5-scale.png"
            },
            {
              language: "ruby",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/ruby-scale.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/ruby/ruby-5-scale.png"
            },
            {
              language: "java",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/java-scale.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/java/java-5-scale.png"
            },
            {
              language: "php",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/php-scale.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/php/php-5-scale.png"
            },
            {
              language: "python",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/python-scale.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/python/python-5-scale.png"
            },
            {
              language: "go",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/go-scale.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/go/go-5-scale.png"
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
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-enterprise-private-spaces.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/node/private-spaces-node.png"
            },
            {
              language: "ruby",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-enterprise-private-spaces.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/ruby/private-spaces-ruby.png"
            },
            {
              language: "java",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-enterprise-private-spaces.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/java/private-spaces-java.png"
            },
            {
              language: "php",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-enterprise-private-spaces.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/php/private-spaces-php.png"
            },
            {
              language: "python",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-enterprise-private-spaces.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/python/private-spaces-python.png"
            },
            {
              language: "go",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-enterprise-private-spaces.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/go/private-spaces-go.png"
            }
          ]
        },
        {
          name: "Shield Private Spaces",
          videos: [
            {
              language: "node",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-shield-private-spaces.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/node/shield-node.png"
            },
            {
              language: "ruby",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-shield-private-spaces.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/ruby/shield-ruby.png"
            },
            {
              language: "java",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-shield-private-spaces.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/java/shield-java.png"
            },
            {
              language: "php",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-shield-private-spaces.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/php/shield-php.png"
            },
            {
              language: "python",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-shield-private-spaces.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/python/shield-python.png"
            },
            {
              language: "go",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-shield-private-spaces.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/go/shield-go.png"
            }
          ]
        },
        {
          name: "Enterprise Accounts",
          videos: [
            {
              language: "node",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-enterprise-accounts-teams.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/node/enterprise-node.png"
            },
            {
              language: "ruby",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-enterprise-accounts-teams.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/ruby/enterprise-ruby.png"
            },
            {
              language: "java",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-enterprise-accounts-teams.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/java/enterprise-java.png"
            },
            {
              language: "php",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-enterprise-accounts-teams.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/php/enterprise-php.png"
            },
            {
              language: "python",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-enterprise-accounts-teams.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/python/enterprise-python.png"
            },
            {
              language: "go",
              url:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/heroku-enterprise-accounts-teams.mp4",
              posterUrl:
                "https://heroku-dev-rel-booth-videos.s3.amazonaws.com/2019-12-02/title-cards/go/enterprise-go.png"
            }
          ]
        }
      ]
    }
  ]
};

export default Object.assign({}, config, envConfig);
