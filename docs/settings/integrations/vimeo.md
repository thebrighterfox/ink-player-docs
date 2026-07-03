---
description: Import a Vimeo channel, group, or showcase into Ink Player as a playlist using a Vimeo access token.
---

# Vimeo

Vimeo is a **Playlist** integration. Enable it to import a Vimeo **channel, group, or showcase** into Ink Player: paste the collection URL, pick which videos to include, and Ink Player builds a playlist from them — each video played through Vimeo's embed. A Vimeo access token is required so Ink Player can enumerate the collection.

## What this enables

- Import every video from a Vimeo **channel**, **group**, or **showcase** URL into an Ink Player playlist.
- Pages through large collections using the Vimeo API.

## Prerequisites

- A **Vimeo access token** with the **Public** and **Private** scopes (see Step 1). Without it, the import can't enumerate a collection and will fail.

<div class="ink-timeline">

## Step 1 — Create a Vimeo access token

1. Go to **[developer.vimeo.com](https://developer.vimeo.com/)** and click **Create an app** (top right).

<figure>
  <img src="/screenshots/settings/integrations/vimeo/create-an-app-btn.png" alt="The Create an app button on the Vimeo developer site">
  <figcaption>On developer.vimeo.com, click Create an app</figcaption>
</figure>

2. Fill in an **App name** and **description**, choose who can access the app, agree to the terms, and click **Create App**.

<figure>
  <img src="/screenshots/settings/integrations/vimeo/create-an-app.png" alt="The Create a new app form on Vimeo">
  <figcaption>Name the app and create it</figcaption>
</figure>

3. Open the app's **Authentication** tab. Under **Generate an access token**, select **Authenticated (you)**, tick the **Public (required)** and **Private** scopes, then click **Generate**.

<figure>
  <img src="/screenshots/settings/integrations/vimeo/generate-access-token.png" alt="Generating a Vimeo access token with the Public and Private scopes">
  <figcaption>Choose Authenticated (you), check Public and Private, then Generate</figcaption>
</figure>

4. Copy the new token from the **Personal Access Tokens** list — you'll paste it into Ink Player next.

<figure>
  <img src="/screenshots/settings/integrations/vimeo/token.png" alt="The generated personal access token with public and private scopes">
  <figcaption>Copy the generated access token</figcaption>
</figure>

::: warning
Keep your access token private — anyone with it can act on your Vimeo account within its scopes.
:::

## Step 2 — Enable and connect

1. Go to **Settings → [Integrations](/settings/integrations)** and enable **Vimeo** (under the **Playlist** category).
2. Click **Manage**.
3. Paste your **Access Token**.
4. Click **Send test** to confirm the token works — a success message shows the connected account name — then **Save**.

<figure>
  <img src="/screenshots/settings/integrations/vimeo/connect.png" alt="The Vimeo integration settings with the Access Token field and Send test button">
  <figcaption>Paste your access token, click Send test, and save</figcaption>
</figure>

## Step 3 — Import a collection

1. Go to **[Playlists](/playlists)**, click **Add playlist**, and choose **Ink Playlist**.
2. Paste your Vimeo **channel, group, or showcase URL** and submit with the **→** arrow — or click **Vimeo Channel/Group** under **Import from**.

<figure>
  <img src="/screenshots/settings/integrations/vimeo/playlist-import-dialog.png" alt="The new-playlist dialog with a Vimeo collection URL and the Import from options">
  <figcaption>Paste the Vimeo URL, or pick Vimeo Channel/Group under Import from</figcaption>
</figure>

3. Ink Player enumerates the collection. In **Import from Vimeo**, tick the videos you want (or **Select All**), then click **Add to Playlist**.

<figure>
  <img src="/screenshots/settings/integrations/vimeo/playlist-items.png" alt="The Import from Vimeo dialog listing the collection's videos with checkboxes">
  <figcaption>Select the videos to import, then Add to Playlist</figcaption>
</figure>

## Step 4 — Edit and save the playlist

The imported videos open in the **playlist editor**, where you can name the playlist, reorder items, set auto-play, shuffle, repeat, and layout, then **Save**. It's now a regular Ink Player [playlist](/playlists), ready to embed — each video plays through Vimeo's embed.

<figure>
  <img src="/screenshots/settings/integrations/vimeo/playlist-editor.png" alt="The Ink Player playlist editor with the imported Vimeo videos">
  <figcaption>The imported Vimeo videos in the playlist editor</figcaption>
</figure>

</div>

## Settings reference

| Field | Required | Notes |
| --- | --- | --- |
| Access Token | Yes | Created at developer.vimeo.com with the Public and Private scopes. Imports fail without it. |

## Troubleshooting

- **Import fails or returns nothing** — confirm the token has both the **Public** and **Private** scopes, and that Vimeo is enabled on the Integrations screen.
- Use **Send test** to verify the token before importing.

::: warning
Platform embeds **can't be truly access-protected**. You can place a Vimeo video on a gated page, but the underlying video remains reachable on Vimeo itself. See [Access control](/guide/access-control) for what protection is and isn't possible with embedded platforms.
:::

## Next steps

- Imported playlists live alongside your other [playlists](/playlists).
- See [YouTube](/settings/integrations/youtube) for the equivalent playlist importer.
