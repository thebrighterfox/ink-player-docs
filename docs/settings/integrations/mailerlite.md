---
description: Send Ink Player email capture leads to a MailerLite group and verify your API connection.
---

# MailerLite

MailerLite is an email marketing platform. Connecting it makes MailerLite a destination for the leads Ink Player captures through the email gate. When a viewer submits their email to unlock your media, that [Lead](/leads) is added to a MailerLite group of your choice.

## What this enables

- Adds captured leads as subscribers in a MailerLite group.
- Lets you pick the target group per player, in the email-gate overlay.
- Verifies your connection before you rely on it, using **Test connection**.

## Prerequisites

- An active MailerLite account with a valid API key.
- At least one group created in MailerLite to receive leads.

## Connect

<figure>
  <img src="/screenshots/settings/integrations/mailerlite-connect.png" alt="MailerLite API key on the Manage screen">
  <figcaption>MailerLite API key on the Manage screen</figcaption>
</figure>

1. Go to **Settings → [Integrations](/settings/integrations)**.
2. Find the **MailerLite** card under the **Email** category.
3. Click **Enable**, then **Manage**.
4. Enter your MailerLite **API key**.
5. Click **Test connection** to confirm the key works.
6. Click **Save**.

::: info
The Manage screen holds only the API key. You choose **which group** a player sends leads to in that player's email-gate overlay, not here.
:::

## Settings reference

| Field | Required | Notes |
| --- | --- | --- |
| API key | Yes | Create a key in MailerLite under Integrations → API. |

## Using it

The group is chosen per player, in the email-gate overlay:

1. Add an **email-gate overlay** to a player and set its provider to **MailerLite**.
2. **Choose a group** from the list the overlay loads from your account.
3. Save the player. When a viewer submits their email, the [Lead](/leads) is added to that group.

## Troubleshooting

- If **Test connection** fails, re-check the API key and try again.
- No groups in the overlay dropdown? Confirm the key is saved and that your account has at least one group.

## Related links

- Prefer to send leads elsewhere, or to more than one destination? [Webhooks](/settings/webhooks) are an alternative lead destination.
- See the [Leads](/leads) page to review everything captured by your players.
