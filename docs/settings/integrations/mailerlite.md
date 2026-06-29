---
description: Send Ink Player email capture leads to a MailerLite group and verify your API connection.
---

# MailerLite

MailerLite is an email marketing platform. Connecting it makes MailerLite a destination for the leads Ink Player captures through the email gate. When a viewer submits their email to unlock your media, that [Lead](/leads) is added to a MailerLite group of your choice.

## What this integration does

- Adds captured leads as subscribers in a MailerLite group.
- Lets you pick which group new leads are sent to.
- Verifies your connection before you rely on it, using **Test connection**.

## How to connect

1. Go to **Settings → [Integrations](/settings/integrations)**.
2. Find the **MailerLite** card under the **Email** category.
3. Click **Enable**, then **Manage**.
4. Enter your MailerLite **API key**.
5. Click **Test connection** to confirm the key works.
6. Select the target **group** that leads should be added to.
7. Click **Save**.

::: tip
Once connected, every [Lead](/leads) captured by the email gate flows automatically into the selected group.
:::

## Requirements

- An active MailerLite account with a valid API key.
- At least one group created in MailerLite to receive leads.

## Notes

- If **Test connection** fails, re-check the API key and try again.
- Prefer to send leads somewhere else, or to more than one destination? [Webhooks](/settings/webhooks) are an alternative lead destination you can use alongside or instead of MailerLite.
- See the [Leads](/leads) page to review everything captured by your players.
