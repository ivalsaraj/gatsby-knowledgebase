---
path: "/heroku-integration"
title: "Connect Heroku to Squadlytics"
baseline: "Start tracking your app deployments with Squadlytics"
---
## 1. Connect your Heroku account to Squadlytics

Go to your account settings by clicking on your avatar in the left sidebar and then settings.

![](./images/account-popup.png)

Go to ***Integrations > Connected services*** and click on the `Add new` button.

Click on the Heroku icon to connect your account to Squadlytics. Once authorized you should see a new service connection in the list of your connected services in your workspace settings.

## 2. Add Heroku applications to a project

You can create one or more deployment integrations by adding Heroku applications to a project. Once added Squadlytics will automatically monitor release events in those applications.

In your project settings go to ***Integrations > Deployment integrations***.

Click on the `Add new` button to connect a new repository to your project.

In the integration form select ***Heroku*** for the deployment service and add your application name.

After hitting save you should see a new deployment integration for your project.

## 3. Wait for data

You can now go back to the home page of your project. It will be updated with data from Heroku as soon as your team starts deploying to your application.