---
description: Send Ink Player email-capture leads to a MailerLite group — create an API token, connect it, and point a player's email gate at MailerLite.
---

# MailerLite

MailerLite is an email marketing platform. Connecting it makes MailerLite a destination for the leads Ink Player captures through the **email gate**. When a viewer submits their email to keep watching, that [Lead](/leads) is added to a MailerLite group of your choice.

## What this enables

- Adds captured leads as subscribers in a MailerLite group.
- Lets you pick the target group per player, in the email-gate overlay.
- Verifies your connection before you rely on it, using **Send test**.

## Prerequisites

- An active MailerLite account.
- At least one group created in MailerLite to receive leads.

## Get a MailerLite API token

<div class="ink-timeline">

## Step 1 — Open Integrations

In your MailerLite dashboard, click **Integrations** in the left sidebar.

<figure>
  <img src="/screenshots/settings/integrations/mailerlite/integration.png" alt="The Integrations link in the MailerLite dashboard">
  <figcaption>Open Integrations in MailerLite</figcaption>
</figure>

## Step 2 — Open the API integration

On the **MailerLite API** page, click **Use** next to **API**.

<figure>
  <img src="/screenshots/settings/integrations/mailerlite/create-api.png" alt="The API integration on the MailerLite API page">
  <figcaption>Click Use on the API integration</figcaption>
</figure>

## Step 3 — Generate a new token

On the **Developer API** page, click **Generate new token**.

<figure>
  <img src="/screenshots/settings/integrations/mailerlite/generate-new-token.png" alt="The Generate new token button on the Developer API page">
  <figcaption>Click Generate new token</figcaption>
</figure>

## Step 4 — Name and create the token

Give the token a name (e.g. `Ink Player`), leave **All IPs allowed**, accept the terms, and click **Create token**.

<figure>
  <img src="/screenshots/settings/integrations/mailerlite/create-token.png" alt="The Create new API token dialog">
  <figcaption>Name the token and click Create token</figcaption>
</figure>

## Step 5 — Copy the token

Copy the token with **Copy** — MailerLite shows it only once, so save it now.

<figure>
  <img src="/screenshots/settings/integrations/mailerlite/api-token.png" alt="The generated MailerLite API token with a Copy button">
  <figcaption>Copy your API token — it's shown only once</figcaption>
</figure>

</div>

::: warning
Keep your API token private — anyone with it can access your MailerLite account through the API.
:::

## Connect and capture leads

<div class="ink-timeline">

## Step 1 — Connect MailerLite in Ink Player

1. Go to **Settings → [Integrations](/settings/integrations)** and enable **MailerLite** (under the **Email** category).
2. Click **Manage**.
3. Paste your **API key** (the token you copied).
4. Click **Send test** to confirm it works, then **Save**.

<figure>
  <img src="/screenshots/settings/integrations/mailerlite/connect.png" alt="The MailerLite integration settings with the API key field and Send test button">
  <figcaption>Paste your API token, click Send test, and save</figcaption>
</figure>

## Step 2 — Point a player's email gate at MailerLite

The group is chosen per player, not on the Manage screen. Add an **email-gate overlay** to a player, set **Integrate** to **MailerLite**, then **Choose a group** to send captured emails to. When a viewer submits their email, the [Lead](/leads) is added to that group.

<figure>
  <img src="/screenshots/settings/integrations/mailerlite/add-email-capture.png" alt="An email-gate overlay set to MailerLite with a group selected">
  <figcaption>In the email-gate overlay, set Integrate to MailerLite and choose a group</figcaption>
</figure>

</div>

## Settings reference

| Field | Required | Notes |
| --- | --- | --- |
| API key | Yes | Create a token in MailerLite under **Integrations → API**. |

## Troubleshooting

- If **Send test** fails, re-check the API token and try again.
- No groups in the overlay dropdown? Confirm the token is saved and that your account has at least one group.

## Related links

- Prefer to send leads elsewhere, or to more than one destination? [Webhooks](/settings/webhooks) are an alternative lead destination.
- See the [Leads](/leads) page to review everything captured by your players.
