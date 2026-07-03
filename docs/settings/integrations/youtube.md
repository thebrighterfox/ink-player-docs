---
description: Import a YouTube playlist into Ink Player as a playlist, with an optional API key for playlists over 100 videos.
---

# YouTube

YouTube is a **Playlist** integration. Enable it to import a YouTube **playlist** into Ink Player: paste the playlist URL, pick which videos to include, and Ink Player builds a playlist from them — each video played through YouTube's embed. No credentials are needed for playlists up to 100 videos; an optional API key handles larger ones.

## What this enables

- Import every video from a YouTube **playlist** URL into an Ink Player playlist.
- Works without credentials for playlists up to **100 videos** (Ink Player reads the public playlist).
- With an optional **API key**, imports larger playlists and pages through them reliably.

## Prerequisites

- **None** for playlists of 100 videos or fewer.
- For larger playlists, a **YouTube Data API v3** key (see Step 1).

## Step 1 — Get an API key (optional)

Only needed to import playlists with **more than 100 videos**. Skip this for smaller playlists.

1. Open the **[Google Cloud Console](https://console.cloud.google.com/)** and select or create a project.
2. Enable the **YouTube Data API v3** for that project.
3. Under **APIs & Services → Credentials**, create an **API key** and copy it.

<!-- SCREENSHOT: The Google Cloud Console Credentials page showing the created YouTube Data API v3 API key. -->
<figure>
  <img src="/screenshots/settings/integrations/youtube/api-key-google.png" alt="A YouTube Data API v3 key in the Google Cloud Console">
  <figcaption>Create a YouTube Data API v3 key in the Google Cloud Console</figcaption>
</figure>

## Step 2 — Enable and connect

1. Go to **Settings → [Integrations](/settings/integrations)** and enable **YouTube** (under the **Playlist** category).
2. Click **Manage**.
3. (Optional) Paste your **API Key** — only needed for playlists over 100 videos.
4. Click **Send test** to confirm the key reaches the YouTube Data API, then **Save**.

<!-- SCREENSHOT: The YouTube settings panel in Ink Player — the API Key field, with the Send test and Save buttons. -->
<figure>
  <img src="/screenshots/settings/integrations/youtube/connect.png" alt="The YouTube integration settings with the API Key field">
  <figcaption>Optionally add your API key, then save</figcaption>
</figure>

::: tip
You can skip the key entirely for playlists of 100 videos or fewer — the import still works.
:::

## Step 3 — Import a playlist

1. Go to **[Playlists](/playlists)** and start a **new playlist**.
2. In the dialog, under **Import from**, paste your **YouTube playlist URL** and submit.

<!-- SCREENSHOT: The Add Playlist dialog with the "Paste YouTube or Vimeo playlist URL" field and the "Import from → YouTube Playlist" option. -->
<figure>
  <img src="/screenshots/settings/integrations/youtube/import-url.png" alt="The Add Playlist dialog with a YouTube playlist URL pasted">
  <figcaption>Paste the YouTube playlist URL in the new-playlist dialog</figcaption>
</figure>

3. Ink Player enumerates the playlist. **Choose which videos to add**, then confirm.

<!-- SCREENSHOT: The item picker listing the enumerated YouTube playlist videos with selectable checkboxes. -->
<figure>
  <img src="/screenshots/settings/integrations/youtube/select-videos.png" alt="Selecting videos from the enumerated YouTube playlist">
  <figcaption>Pick which videos from the playlist to import</figcaption>
</figure>

## Step 4 — The playlist is created

The selected videos become an Ink Player [playlist](/playlists), ready to edit or embed — each video playing through YouTube's embed.

<!-- SCREENSHOT: The resulting Ink Player playlist (playlist editor or a rendered playlist player) built from the imported YouTube videos. -->
<figure>
  <img src="/screenshots/settings/integrations/youtube/playlist.png" alt="An Ink Player playlist built from an imported YouTube playlist">
  <figcaption>The imported videos as an Ink Player playlist</figcaption>
</figure>

## Settings reference

| Field | Required | Notes |
| --- | --- | --- |
| API Key | No | YouTube Data API v3 key. Only needed for playlists over 100 videos. Create it in the Google Cloud Console. |

::: warning
Platform embeds **can't be truly access-protected**. You can place a YouTube video on a gated page, but the underlying video remains reachable on YouTube itself. See [Access control](/guide/access-control) for what protection is and isn't possible with embedded platforms.
:::

## Next steps

- Imported playlists live alongside your other [playlists](/playlists).
- See [Vimeo](/settings/integrations/vimeo) for the equivalent channel/group/showcase importer.
