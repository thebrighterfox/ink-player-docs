---
description: Send Ink Player email capture leads to a Mailchimp audience and verify your API connection.
---

# Mailchimp

Mailchimp is an email marketing platform. Connecting it makes Mailchimp a destination for the leads Ink Player captures through the email gate. When a viewer submits their email to unlock your media, that [Lead](/leads) is added to a Mailchimp audience (list) of your choice.

## What this enables

- Adds captured leads as subscribers in a Mailchimp audience.
- Lets you pick the target audience — and optional tags — per player, in the email-gate overlay.
- Verifies your connection before you rely on it, using **Test connection**.

## Prerequisites

- An active Mailchimp account with a valid API key.
- At least one audience (list) created in Mailchimp to receive leads.

## Connect

<figure>
  <img src="/screenshots/settings/integrations/mailchimp-connect.png" alt="Mailchimp API key on the Manage screen">
  <figcaption>Mailchimp API key on the Manage screen</figcaption>
</figure>

1. Go to **Settings → [Integrations](/settings/integrations)**.
2. Find the **Mailchimp** card under the **Email** category.
3. Click **Enable**, then **Manage**.
4. Enter your Mailchimp **API key**.
5. Click **Test connection** to confirm the key works.
6. Click **Save**.

::: info
The Manage screen holds only the API key. You choose **which audience** a player sends leads to in that player's email-gate overlay, not here.
:::

## Settings reference

| Field | Required | Notes |
| --- | --- | --- |
| API key | Yes | Find this in Mailchimp under Account → Extras → API keys. |

## Using it

The audience is chosen per player, in the email-gate overlay:

1. Add an **email-gate overlay** to a player and set its provider to **Mailchimp**.
2. **Choose an audience** from the list the overlay loads from your account.
3. Optionally add **tags** to apply to contacts captured by that player.
4. Save the player. When a viewer submits their email, the [Lead](/leads) is added to that audience.

## Troubleshooting

- If **Test connection** fails, re-check the API key and try again.
- No audiences in the overlay dropdown? Confirm the key is saved and that your account has at least one audience.

## Related links

- Prefer to send leads elsewhere, or to more than one destination? [Webhooks](/settings/webhooks) are an alternative lead destination.
- See the [Leads](/leads) page to review everything captured by your players.
