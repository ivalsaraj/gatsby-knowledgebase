---
path: "/jira-integration"
title: "Connect Jira to Squadlytics"
baseline: "Start tracking your issues with Squadlytics"
---
You can monitor Jira activity in Squadlytics by connecting your issue events via webhooks.

##1. Copy your project notification URL

Projects in Squadlytics have their own notification URL that allow them to receive data from your tools.

Go to your project settings to copy its notification URL.

![](./images/project-notification-url.png)

##2. Create a webhook in Jira

In your Jira instance go to *Settings*  > *System* > *Webhooks* to create a new webhook.

![](https://s3.amazonaws.com/groovehq/uploaded/vfkbgrqqoz8qetnkb7ji4xaqgik6uucd2e8ei0g6pktvqg9u6a?1512040068)

Make sure that the following fields are properly configured:

  * **Status**: Enabled
  * **URL**: Paste your notification URL in there
  * **Issue related events**:
    * Use JQL to only send events for issues that are relevant for the project
    * Select the following events: ***Issue created***, ***issue updated***, ***issue deleted***

Your form should look like the picture below.

![](https://s3.amazonaws.com/groovehq/uploaded/79o071vq5ajuqr49lmeceetjflbnnb6bft762u2u9e1ozgk512?1512040109)

Just save your webhook to start receiving issue data in your Squadlytics project. Data will appear as soon as there's some activity in issues that are matching the JQL query.