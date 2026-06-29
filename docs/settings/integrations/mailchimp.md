---
description: Send Ink Player email capture leads to a Mailchimp audience and verify your API connection.
---

# Mailchimp

Mailchimp is an email marketing platform. Connecting it makes Mailchimp a destination for the leads Ink Player captures through the email gate. When a viewer submits their email to unlock your media, that [Lead](/leads) is added to a Mailchimp audience (list) of your choice.

## What this integration does

- Adds captured leads as subscribers in a Mailchimp audience.
- Lets you pick which audience new leads are sent to.
- Verifies your connection before you rely on it, using **Test connection**.

## How to connect

1. Go to **Settings → [Integrations](/settings/integrations)**.
2. Find the **Mailchimp** card under the **Email** category.
3. Click **Enable**, then **Manage**.
4. Enter your Mailchimp **API key**.
5. Click **Test connection** to confirm the key works.
6. Select the target **audience (list)** that leads should be added to.
7. Click **Save**.

::: tip
Once connected, every [Lead](/leads) captured by the email gate flows automatically into the selected audience.
:::

## Requirements

- An active Mailchimp account with a valid API key.
- At least one audience (list) created in Mailchimp to receive leads.

## Notes

- If **Test connection** fails, re-check the API key and try again.
- Prefer to send leads somewhere else, or to more than one destination? [Webhooks](/settings/webhooks) are an alternative lead destination you can use alongside or instead of Mailchimp.
- See the [Leads](/leads) page to review everything captured by your players.
