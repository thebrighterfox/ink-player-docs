---
description: Send Ink Player email capture leads to ActiveCampaign contacts and choose the target list.
---

# ActiveCampaign

ActiveCampaign is a marketing and CRM platform. Connecting it makes ActiveCampaign a destination for the leads Ink Player captures through the email gate. When a viewer submits their email to unlock your media, that [Lead](/leads) is added to ActiveCampaign as a contact on the list you choose.

## What this integration does

- Adds captured leads as contacts in ActiveCampaign.
- Lets you pick which list new contacts are added to.
- Verifies your connection before you rely on it, using **Test connection**.

## How to connect

1. Go to **Settings → [Integrations](/settings/integrations)**.
2. Find the **ActiveCampaign** card under the **CRM** category.
3. Click **Enable**, then **Manage**.
4. Enter your ActiveCampaign **API URL** and **API key**.
5. Click **Test connection** to confirm the credentials work.
6. Select the target **list** that leads should be added to.
7. Click **Save**.

::: tip
Both the API URL and the API key are found in your ActiveCampaign account settings, under the developer/API section.
:::

## Requirements

- An active ActiveCampaign account with a valid API URL and API key.
- At least one list created in ActiveCampaign to receive contacts.

## Notes

- If **Test connection** fails, re-check the API URL and key, then try again.
- Prefer to send leads somewhere else, or to more than one destination? [Webhooks](/settings/webhooks) are an alternative lead destination.
- See the [Leads](/leads) page to review everything captured by your players.
