---
description: Send Ink Player email-capture leads to a Mailchimp audience — create an API key, connect it, and point a player's email gate at Mailchimp.
---

# Mailchimp

Mailchimp is an email marketing platform. Connecting it makes Mailchimp a destination for the leads Ink Player captures through the **email gate**. When a viewer submits their email to keep watching, that [Lead](/leads) is added to a Mailchimp audience (list) of your choice.

## What this enables

- Adds captured leads as subscribers in a Mailchimp audience.
- Lets you pick the target audience — and optional tags — per player, in the email-gate overlay.
- Verifies your connection before you rely on it, using **Send test**.

## Prerequisites

- An active Mailchimp account.
- At least one audience (list) created in Mailchimp to receive leads.

## Get a Mailchimp API key

<div class="ink-timeline">

## Step 1 — Open your Mailchimp profile

In your Mailchimp dashboard, click your **profile icon** (top right) and choose **Profile**.

<figure>
  <img src="/screenshots/settings/integrations/mailchimp/dashboard-profile.png" alt="The Mailchimp profile menu">
  <figcaption>Open your Mailchimp profile</figcaption>
</figure>

## Step 2 — Go to Extras → API keys

On the profile page, open the **Extras** menu and click **API keys**.

<figure>
  <img src="/screenshots/settings/integrations/mailchimp/click-to-api-key-menu.png" alt="The Extras → API keys menu in Mailchimp">
  <figcaption>Extras → API keys</figcaption>
</figure>

## Step 3 — Create a key

On the **Your API keys** page, click **Create A Key**.

<figure>
  <img src="/screenshots/settings/integrations/mailchimp/create-a-key.png" alt="The Create A Key button on the Your API keys page">
  <figcaption>Click Create A Key</figcaption>
</figure>

## Step 4 — Name and generate the key

Give the key a descriptive name (e.g. `Ink Player Key`) and click **Generate Key**.

<figure>
  <img src="/screenshots/settings/integrations/mailchimp/generate-key.png" alt="Naming a new Mailchimp API key">
  <figcaption>Name the key and click Generate Key</figcaption>
</figure>

## Step 5 — Copy the key

Copy the key with **Copy To Clipboard** — Mailchimp shows it only once, so save it now.

<figure>
  <img src="/screenshots/settings/integrations/mailchimp/copy-api-key.png" alt="Copying the newly generated Mailchimp API key">
  <figcaption>Copy your new API key — it's shown only once</figcaption>
</figure>

</div>

::: warning
Keep your API key private, and note that Mailchimp keys **expire one year** after creation — generate a new one before then to keep the connection working.
:::

## Connect and capture leads

<div class="ink-timeline">

## Step 1 — Connect Mailchimp in Ink Player

1. Go to **Settings → [Integrations](/settings/integrations)** and enable **Mailchimp** (under the **Email** category).
2. Click **Manage**.
3. Paste your **API key**.
4. Click **Send test** to confirm the key works, then **Save**.

<figure>
  <img src="/screenshots/settings/integrations/mailchimp/connect.png" alt="The Mailchimp integration settings with the API key field and Send test button">
  <figcaption>Paste your API key, click Send test, and save</figcaption>
</figure>

## Step 2 — Point a player's email gate at Mailchimp

The audience is chosen per player, not on the Manage screen. Add an **email-gate overlay** to a player, and under **Integrate**, choose **MailChimp** — then pick the **audience** (and optional **tags**) to send captured emails to.

<figure>
  <img src="/screenshots/settings/integrations/mailchimp/email-capture-integration.png" alt="Setting an email-gate overlay's Integrate option to MailChimp">
  <figcaption>In the email-gate overlay, set Integrate to MailChimp</figcaption>
</figure>

## Step 3 — Viewers submit their email

When a viewer reaches the gate, they enter their email to keep watching.

<figure>
  <img src="/screenshots/settings/integrations/mailchimp/player-preview.png" alt="The email-gate overlay on the player">
  <figcaption>The email gate as viewers see it</figcaption>
</figure>

## Step 4 — Leads arrive, tagged Mailchimp

Each captured email appears on your [Leads](/leads) page with **Mailchimp** as its provider, and is added to the audience you chose.

<figure>
  <img src="/screenshots/settings/integrations/mailchimp/dashboard-leads.png" alt="The Ink Player Leads page showing a lead with the Mailchimp provider">
  <figcaption>Captured leads, tagged with the Mailchimp provider</figcaption>
</figure>

</div>

## Settings reference

| Field | Required | Notes |
| --- | --- | --- |
| API key | Yes | Find or create this in Mailchimp under **Account → Extras → API keys**. |

## Troubleshooting

- If **Send test** fails, re-check the API key and try again.
- No audiences in the overlay dropdown? Confirm the key is saved and that your account has at least one audience.

## Related links

- Prefer to send leads elsewhere, or to more than one destination? [Webhooks](/settings/webhooks) are an alternative lead destination.
- See the [Leads](/leads) page to review everything captured by your players.
