---
path: "/squadlytics-cli"
title: "Sending data with the Squadlytics CLI"
baseline: "You can send deployments data from any script with the Squadlytics CLI"
---
With Squadlytics you can track deployment events to understand how often you release code to your customers and keep track of environments that have not been updated in a while.

The Squadlytics CLI is a tool that can help you send deployment events from your continuous delivery tools, or your deployment scripts.

Please note that if you are using Heroku you can use our [Heroku integration](/heroku-integration) to send deployment events to your projects.

## Requirements

You will need **Node v4+** to be able to use the CLI.

## Installation

To install the Squadlytics CLI simply run the command below.

```bash
npm install -g squadlytics-cli
```

## Sending deployment events to projects

The following information is required to be able to send a deployment event:

  * **Notification URL:** You can find this URL in your project settings.
  * **Application name:** Name of the application you are deploying.
  * **Deployment ID:** A unique ID for your deployment. If you are using this ID
again for another deployment then Squadlytics will simply update the existing
information.

With that information you can send a deployment event from your script with the
following:

```bash
squadlytics rec-deployment -a <application_name> -i <deployment_ID> <notification_URL>
```

## Recording failed deployments

If you want to send a deployment failure just use the _-f_ flag.

```bash
squadlytics rec-deployment -f -a <application_name> -i <deployment_ID> <notification_URL>
```

## Bitbucket Pipelines configuration example

The bitbucket-pipelines.yml configuration below uses the Squadlytics CLI to send
deployment events whenever code is deployed to the staging and prod environments
of the **acme-ui** app.

In this scenario we're using **-staging** and **-prod** suffixes to indicate which
environment has been deployed and we have configured the following environment
variable in Bitbucket Pipelines:


  * **$NOTIFICATION_URL:** Notification URL of the Squadlytics project

The other environment variable $BITBUCKET\_BUILD\_NUMBER is a [default variable](https://confluence.atlassian.com/bitbucket/environment-variables-794502608.html)
available for all pipelines.

```yaml
image: node:4

pipelines:
  branches:
    master:
      - step:
          name: Build and test
          script:
            - npm install
            - npm run build
          artifacts:
            - build/**
      - step:
          name: Deploy to staging
          script:
            - ./deploy-staging.sh
            - npm install -g squadlytics-cli
            - squadlytics rec-deployment -a acme-ui-staging -i $BITBUCKET_BUILD_NUMBER $NOTIFICATION_URL
      - step:
          name: Deploy to production
          script:
            - ./deploy-prod.sh
            - npm install -g squadlytics-cli
            - squadlytics rec-deployment -a acme-ui-prod -i $BITBUCKET_BUILD_NUMBER $NOTIFICATION_URL
  default:
    - step:
        script: # Modify the commands below to build your repository.
          - npm install
          - npm test
```