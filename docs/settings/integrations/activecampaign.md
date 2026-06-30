---
description: Send Ink Player email capture leads to ActiveCampaign contacts and choose the target list.
---

# ActiveCampaign

ActiveCampaign is a marketing and CRM platform. Connecting it makes ActiveCampaign a destination for the leads Ink Player captures through the email gate. When a viewer submits their email to unlock your media, that [Lead](/leads) is added to ActiveCampaign as a contact on the list you choose.

## What this enables

- Syncs captured leads as contacts in ActiveCampaign.
- Lets you pick the target list per player, in the email-gate overlay.
- Verifies your connection before you rely on it, using **Test connection**.

## Prerequisites

- An active ActiveCampaign account with a valid account URL and API key.
- At least one list created in ActiveCampaign to receive contacts.

## Connect

<figure>
  <img src="/screenshots/settings/integrations/activecampaign-connect.png" alt="ActiveCampaign account URL and API key">
  <figcaption>ActiveCampaign account URL and API key</figcaption>
</figure>

1. Go to **Settings → [Integrations](/settings/integrations)**.
2. Find the **ActiveCampaign** card under the **CRM** category.
3. Click **Enable**, then **Manage**.
4. Enter your **Account URL** and **API key** — both are under Settings → Developer → API Access in ActiveCampaign.
5. Click **Test connection** to confirm the credentials work.
6. Click **Save**.

::: info
The Manage screen holds only the account URL and API key. You choose **which list** a player adds contacts to in that player's email-gate overlay, not here.
:::

## Settings reference

| Field | Required | Notes |
| --- | --- | --- |
| Account URL | Yes | e.g. `https://your-account.api-us1.com`. Settings → Developer → API Access (the URL field). |
| API key | Yes | Settings → Developer → API Access (the Key field). |

## Using it

The list is chosen per player, in the email-gate overlay:

1. Add an **email-gate overlay** to a player and set its provider to **ActiveCampaign**.
2. **Choose a list** from the options the overlay loads from your account.
3. Save the player. When a viewer submits their email, the contact is synced and added to that list.

## Troubleshooting

- If **Test connection** fails, re-check the account URL and key, then try again.
- No lists in the overlay dropdown? Confirm the credentials are saved and that your account has at least one list.

## Related links

- Prefer to send leads elsewhere, or to more than one destination? [Webhooks](/settings/webhooks) are an alternative lead destination.
- See the [Leads](/leads) page to review everything captured by your players.
