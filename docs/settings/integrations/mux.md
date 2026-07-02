---
description: Connect Mux to Ink Player for uploads, URL imports, public or signed playback, quality settings, and generated captions.
---

# Mux

Mux is a **Storage** integration for hosting and streaming your videos. Connect your Mux account to upload, import, and play assets directly through Ink Player — with public or signed (private) playback. Setup takes a few minutes in the Mux dashboard to create an access token, then a single paste into Ink Player.

## What this enables

- Play Mux assets in your players with **public** or **signed** playback.
- **Upload** videos directly to Mux from the media picker.
- **Import by URL** — hand Mux a public video link and it ingests the asset for you.
- Choose default **video quality**, **playback policy**, and **caption** options.

## Prerequisites

- A [Mux](https://mux.com/) account (you must be signed in for the steps below).

## Step 1 — Create an organization and environment

1. Sign in to Mux, then open **[https://dashboard.mux.com/organizations/](https://dashboard.mux.com/organizations/)**.
2. Click **Create organization**.

<figure>
  <img src="/screenshots/settings/integrations/mux/create-organization.png" alt="The Mux Organizations page with the Create organization button">
  <figcaption>On the Organizations page, click Create organization</figcaption>
</figure>

3. Give the organization a **Name** and click **Create**.

<figure>
  <img src="/screenshots/settings/integrations/mux/create.png" alt="The Create organization form with a name field">
  <figcaption>Name the organization and click Create</figcaption>
</figure>

4. Create an **environment** — set a **Name**, pick a **Type**, choose **Member Access**, and click **Create**. Access tokens and assets belong to an environment.

<figure>
  <img src="/screenshots/settings/integrations/mux/create-environment.png" alt="The Create environment form">
  <figcaption>Create an environment for your access token and assets</figcaption>
</figure>

## Step 2 — Create an access token

1. In the environment, open the **Settings** (gear) menu.

<figure>
  <img src="/screenshots/settings/integrations/mux/setting-menu.png" alt="The environment view with the Settings gear highlighted">
  <figcaption>Open the environment's Settings menu</figcaption>
</figure>

2. Go to **Access Tokens** and click **Create token**.

<figure>
  <img src="/screenshots/settings/integrations/mux/create-access-token.png" alt="The Access Tokens settings page with the Create token button">
  <figcaption>Under Settings → Access Tokens, click Create token</figcaption>
</figure>

3. Name the token and make sure it has **Mux Video** permission with **Read** and **Write**, then click **Save**.

<figure>
  <img src="/screenshots/settings/integrations/mux/access-token-dialog.png" alt="The Create access token dialog with Mux Video read and write permissions">
  <figcaption>Grant Mux Video (Read + Write) and save</figcaption>
</figure>

4. Copy the **Token ID** and **Secret Key** now and keep them safe — Mux shows the secret **only once**.

<figure>
  <img src="/screenshots/settings/integrations/mux/access-token.png" alt="The Save token dialog showing the Token ID and Secret Key">
  <figcaption>Copy the Token ID and Secret Key — the secret is shown only once</figcaption>
</figure>

## Step 3 — Create a signing key (optional)

Only needed if you want **signed (private)** playback. Skip this for public-only playback.

1. In **Settings → Signing Keys**, click **Generate key**.

<figure>
  <img src="/screenshots/settings/integrations/mux/generate-signing-key.png" alt="The Signing Keys settings page with the Generate key button">
  <figcaption>Under Settings → Signing Keys, click Generate key</figcaption>
</figure>

2. Copy the **Key ID** and the **Secret Key (Base64)** — again, shown only once.

<figure>
  <img src="/screenshots/settings/integrations/mux/signing-key-dialog.png" alt="The Save signing key dialog with the Key ID and Base64 secret key">
  <figcaption>Copy the Signing Key ID and its Base64 secret key</figcaption>
</figure>

## Step 4 — Connect Mux in Ink Player

1. Go to **Settings → [Integrations](/settings/integrations)** and enable **Mux** (under the **Storage** category).
2. Click **Manage** to open its settings.
3. On the **API Access** tab, paste your **Access Token ID** and **Access Token Secret**. Add the **Signing Key ID** and **Signing Private Key (Base64)** only if you created a signing key for signed playback.
4. On the **Advanced** tab, set your default video quality, playback policy, and caption options.
5. Click **Send test** to verify the credentials, then **Save changes**.

<figure>
  <img src="/screenshots/settings/integrations/mux/connect.png" alt="The Mux settings in Ink Player with the API Access fields">
  <figcaption>Paste your token (and optional signing key) on the API Access tab, then save</figcaption>
</figure>

### Settings reference

| Field | Tab | Required | Notes |
| --- | --- | --- | --- |
| Access Token ID | API Access | Yes | From Mux → Settings → Access Tokens. |
| Access Token Secret | API Access | Yes | Paired with the Access Token ID; shown only once in Mux. |
| Signing Key ID | API Access | Signed playback only | From Mux → Settings → Signing Keys. |
| Signing Private Key (Base64) | API Access | Signed playback only | The Base64 secret key from the same signing key. |
| Video quality | Advanced | No | Encoding tier for new uploads and URL imports: `basic`, `plus`, or `premium`. |
| Playback policy | Advanced | No | Default for new assets: `public` or `signed`. |
| Normalize audio | Advanced | No | Even out loudness across your videos. |
| Auto-generate captions | Advanced | No | Automatically create captions. |
| Caption language | Advanced | No | Shown when auto-captions are on; defaults to auto-detect. |

## Playback policies

Every Mux asset is played under one of two policies:

- **Public** — anyone with the URL can play the video.
- **Signed** — Ink Player generates an expiring, unforgeable **RS256 JWT-signed** URL.

::: warning
**Signed playback protects the stream URL** — the link is unforgeable and expires — but it does **not by itself** stop a logged-in viewer from sharing a link while it is still valid.

A **public** Mux video placed on a gated page is gated **at the page**, but its URL remains reachable to anyone who has it. Choose **signed** when you need the stream URL itself to be protected.
:::

## Step 5 — Add Mux media

1. Add an **Ink Player** block (or open **Add video** in your [Media](/media) library).
2. Under **Choose a source**, click **Mux**.

<figure>
  <img src="/screenshots/settings/integrations/mux/add-media-block.png" alt="The Ink Player block with Mux as a source option">
  <figcaption>Choose Mux as the source</figcaption>
</figure>

3. In the **Mux media picker**, filter by **Public** or **Signed**, search or browse your assets, **Upload** a new file, then select a video and click **Select video**.

<figure>
  <img src="/screenshots/settings/integrations/mux/media-picker-dialog.png" alt="The Mux media picker with public/signed filter and asset grid">
  <figcaption>The Mux media picker: filter, browse, upload, and select</figcaption>
</figure>

### Import from a URL

Mux can ingest a video straight from a public link. In the picker, click the **link** icon to reveal the import bar, paste a **public, direct video URL**, and click **Import**. Mux processes the asset and it appears in your library once it's ready.

<figure>
  <img src="/screenshots/settings/integrations/mux/import-from-url.png" alt="The Mux picker with the import-from-URL bar open">
  <figcaption>Paste a public video URL and Mux imports it for you</figcaption>
</figure>

## Step 6 — The player renders

The selected asset is added to your [Media](/media) library and renders as an Ink Player — ready to place in a post, page, or builder, with all the usual player settings, presets, and overlays.

<figure>
  <img src="/screenshots/settings/integrations/mux/mux-player.png" alt="A Mux video rendered in the Ink Player block">
  <figcaption>The Mux video playing in the Ink Player</figcaption>
</figure>

::: info
For how playback policies fit into protecting your content, see [Access control](/guide/access-control).
:::
