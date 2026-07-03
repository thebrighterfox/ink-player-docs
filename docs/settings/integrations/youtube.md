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

- **None** for playlists of 100 videos or fewer — skip straight to [Connect and import](#connect-and-import).
- For larger playlists, a **YouTube Data API v3** key — create one in the [Google Cloud Console](https://console.cloud.google.com/) as shown below.

## Get a YouTube Data API key (optional)

Only needed to import playlists with **more than 100 videos**. If yours are smaller, skip this section.

<div class="ink-timeline">

## Step 1 — Open the Google Cloud Console

Sign in at **[console.cloud.google.com](https://console.cloud.google.com/)**. On the welcome screen, click **Select a project** (or **Create or select a project**).

<figure>
  <img src="/screenshots/settings/integrations/youtube/google-cloud-console.png" alt="The Google Cloud Console welcome screen">
  <figcaption>Open the Google Cloud Console and click Select a project</figcaption>
</figure>

## Step 2 — Create a project

In the project picker, click **New project**, give it a name, and click **Create**.

<figure>
  <img src="/screenshots/settings/integrations/youtube/select-project-dialog.png" alt="The Google Cloud project picker dialog">
  <figcaption>The project picker opens</figcaption>
</figure>

<figure>
  <img src="/screenshots/settings/integrations/youtube/create-new-project.png" alt="The New project button in the project picker">
  <figcaption>Click New project</figcaption>
</figure>

<figure>
  <img src="/screenshots/settings/integrations/youtube/project-page.png" alt="The New Project form with a name field">
  <figcaption>Name the project and click Create</figcaption>
</figure>

## Step 3 — Select your project

Once it's created, open the notification (or the **Select a project** menu) and switch to your new project.

<figure>
  <img src="/screenshots/settings/integrations/youtube/select-project.png" alt="Selecting the newly created project">
  <figcaption>Select your new project</figcaption>
</figure>

## Step 4 — Open APIs & Services

From the project dashboard, open **APIs & Services**, then click **Enable APIs and services**.

<figure>
  <img src="/screenshots/settings/integrations/youtube/api-services.png" alt="The APIs & Services quick-access card">
  <figcaption>Open APIs & Services</figcaption>
</figure>

<figure>
  <img src="/screenshots/settings/integrations/youtube/enable-api-services.png" alt="The Enable APIs and services button">
  <figcaption>Click Enable APIs and services</figcaption>
</figure>

## Step 5 — Enable the YouTube Data API v3

In the API Library, search for **YouTube Data API v3**, open it, and click **Enable**.

<figure>
  <img src="/screenshots/settings/integrations/youtube/search-data-api.png" alt="Searching the API Library for the YouTube Data API">
  <figcaption>Search for “youtube data api v3”</figcaption>
</figure>

<figure>
  <img src="/screenshots/settings/integrations/youtube/select-youtube-data-api-v3.png" alt="The YouTube Data API v3 result">
  <figcaption>Open the YouTube Data API v3</figcaption>
</figure>

<figure>
  <img src="/screenshots/settings/integrations/youtube/enable-api.png" alt="The Enable button on the YouTube Data API v3 page">
  <figcaption>Click Enable</figcaption>
</figure>

## Step 6 — Create an API key

Go to **Credentials → Create credentials → API key**. Name the key and, under **API restrictions**, restrict it to **YouTube Data API v3**, then click **Create**.

<figure>
  <img src="/screenshots/settings/integrations/youtube/create-api-key.png" alt="Create credentials → API key menu">
  <figcaption>Create credentials → API key</figcaption>
</figure>

<figure>
  <img src="/screenshots/settings/integrations/youtube/create-api-key-drawer.png" alt="The Create API key drawer with API restrictions">
  <figcaption>Restrict the key to the YouTube Data API v3</figcaption>
</figure>

<figure>
  <img src="/screenshots/settings/integrations/youtube/create-btn.png" alt="The Create button in the API key form">
  <figcaption>Click Create</figcaption>
</figure>

## Step 7 — Copy your API key

Copy the generated key — you'll paste it into Ink Player next.

<figure>
  <img src="/screenshots/settings/integrations/youtube/api-key-created.png" alt="The API key created dialog">
  <figcaption>Copy your new API key</figcaption>
</figure>

</div>

::: warning
Keep your API key private, and restrict it to the **YouTube Data API v3** (as above) to limit its use.
:::

## Connect and import

<div class="ink-timeline">

## Step 1 — Enable and connect

1. Go to **Settings → [Integrations](/settings/integrations)** and enable **YouTube** (under the **Playlist** category).
2. Click **Manage**.
3. (Optional) Paste your **API Key** — only needed for playlists over 100 videos.
4. Click **Send test** to confirm the key reaches the YouTube Data API, then **Save**.

<figure>
  <img src="/screenshots/settings/integrations/youtube/connect.png" alt="The YouTube integration settings with the API Key field">
  <figcaption>Optionally add your API key, test, and save</figcaption>
</figure>

## Step 2 — Import a playlist

1. Go to **[Playlists](/playlists)**, click **Add playlist**, and choose **Ink Playlist**.
2. Paste your **YouTube playlist URL** and submit with the **→** arrow — or click **YouTube Playlist** under **Import from**.

<figure>
  <img src="/screenshots/settings/integrations/youtube/playlist-block.png" alt="The new-playlist dialog with a YouTube playlist URL and the Import from options">
  <figcaption>Paste the YouTube playlist URL, or pick YouTube Playlist under Import from</figcaption>
</figure>

3. Ink Player enumerates the playlist. Tick the videos you want (or **Select All**), then click **Add to Playlist**.

<figure>
  <img src="/screenshots/settings/integrations/youtube/playlist-import-dialog.png" alt="The Import from YouTube dialog listing the playlist's videos with checkboxes">
  <figcaption>Select the videos to import, then Add to Playlist</figcaption>
</figure>

4. The videos open in the **playlist editor**, where you can reorder, set auto-play, and **Save**.

</div>

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
