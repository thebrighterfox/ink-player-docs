---
description: Import videos from a YouTube playlist into your Ink Player library, with an optional API key for large playlists.
---

# YouTube

YouTube is a **Video** integration. Enabling it lets you import the videos behind a YouTube playlist URL into your library in one step — Ink Player enumerates the playlist and adds each video, played through YouTube's embed.

## What this enables

- Import every video from a YouTube **playlist** URL.
- Works without credentials for playlists up to 100 videos (Ink Player reads the public playlist page).
- With an optional **API key**, imports larger playlists and pages through them reliably.

## Prerequisites

- **None** for playlists of 100 videos or fewer.
- For larger playlists: a **YouTube Data API v3** key, created in the [Google Cloud Console](https://console.cloud.google.com/) by enabling "YouTube Data API v3" and generating an API key.

## Connect

1. Go to **Settings → Integrations** and enable **YouTube** (Video category).
2. Click **Manage**.
3. (Optional) Paste your **API Key** — only needed to import playlists with more than 100 videos.
4. Click **Test connection** to confirm the key reaches the YouTube Data API. (This requires a key; without one, imports still work for smaller playlists.)
5. Click **Save**.

## Settings reference

| Field | Tab | Required | Notes |
| --- | --- | --- | --- |
| API Key | — | No | YouTube Data API v3 key. Only needed for playlists over 100 videos. Create it in Google Cloud Console. |

## Using it

1. Start importing media from a playlist source.
2. Paste a YouTube **playlist URL**.
3. Ink Player enumerates the playlist; choose which videos to add.
4. Save — the videos appear in your [Media](/media) library, each playing through YouTube's embed.

<figure>
  <img src="/screenshots/settings/integrations/youtube-import.png" alt="YouTube playlist import">
  <figcaption>YouTube playlist import</figcaption>
</figure>

::: warning
Platform embeds **can't be truly access-protected**. You can place a YouTube video on a gated page, but the underlying video remains reachable on YouTube itself. See [Access control](/guide/access-control) for what protection is and isn't possible with embedded platforms.
:::

## Next steps

- Imported videos live in your [Media](/media) library alongside your other content.
- See [Vimeo](/settings/integrations/vimeo) for the equivalent channel/group/showcase importer.
