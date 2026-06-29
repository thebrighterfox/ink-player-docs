---
description: Complete user guide for the Ink Player playlist editor, including creating video and audio playlists, adding media, ordering items, importing sources, saving, and publishing.
---

# Playlist editor

The **Playlist Editor** is where you build an ordered video or audio collection and configure how that playlist behaves when published. A playlist uses existing [Media](/media) records, so updates to a media item automatically appear anywhere that playlist is embedded.

## Create a playlist

1. Go to **Ink Player -> Playlists**.
2. Click **Add playlist**.
3. Choose **Video playlist** or **Audio playlist**.
4. Add media from the library or import a supported external playlist.
5. Review the order, configure the layout, then save.

Use separate playlists for video and audio. A playlist should contain one media type so the correct player and layout controls are available.

## Playlist identity

Use the top editor area to manage the playlist record.

| Option | What it does |
| --- | --- |
| **Title** | Sets the playlist name shown in the admin and used to identify the playlist later. |
| **Type** | Shows whether the playlist is a video playlist or audio playlist. |
| **Items** | Shows the media records included in the playlist. |
| **Save** | Stores the playlist content and configuration. |

Rename playlists clearly when you have many collections, such as course modules, episode seasons, product demos, sermons, lessons, or music albums.

## Add items from the media library

Use the media picker when the items already exist in **Ink Player -> Media**.

1. Click the add/select media control in the playlist editor.
2. Search or scroll through the media library.
3. Select the items you want in the playlist.
4. Confirm the selection.
5. Save the playlist.

The picker is designed for large libraries and supports loading more records as you browse.

## Import external playlists

For supported providers, paste a playlist or channel URL to create playlist items faster.

Supported import sources include:

- **YouTube playlists**
- **YouTube channels**, where supported by the configured integration
- **Vimeo playlists / showcases**, where supported by the configured integration

After import, review the created items before publishing. Imported items still behave like Ink Player media records, so you can edit titles, posters, privacy, captions, overlays, and other player settings from the media editor.

## Reorder items

The item order in the editor is the playback order viewers see on the site.

Use the playlist item controls to:

- Move an item earlier or later.
- Remove an item from the playlist.
- Open the media record for deeper editing.

Removing an item from a playlist does not delete the underlying media record from the Media library.

## Configure the player

Video playlists and audio playlists expose the relevant player settings for that playlist type. The exact options depend on the selected media type and layout, but common controls include:

| Area | What it controls |
| --- | --- |
| **Playback behavior** | Autoplay, loop, muted playback, inline playback, and related player behavior. |
| **Appearance** | Player shape, list placement, spacing, and visual fit. |
| **Layout** | How the playlist list appears around the player. See [Playlist layouts](/playlists/layouts). |
| **Access control** | Who can watch or listen. See [Access control](/guide/access-control). |

For detailed per-video controls such as captions, chapters, overlays, ads, presets, branding, timestamps, and multi-language versions, edit the individual item in [Media](/media).

## Publish a playlist

Copy the shortcode from the Playlists table:

```text
[ink_playlist id="N"]
```

Replace `N` with the playlist ID.

You can also publish playlists with:

- **Ink Playlist** block for video playlists.
- **Ink Audio Playlist** block for audio playlists.
- **Elementor** widgets, where enabled.
- **Beaver Builder** modules, where enabled.

## What updates after publishing

Published playlists stay connected to their playlist record.

| Change | Result |
| --- | --- |
| Reorder playlist items | The embedded playlist uses the new order. |
| Add or remove playlist items | The embedded playlist updates after save. |
| Edit a media item title, poster, source, captions, or overlays | The playlist reflects that media update. |
| Delete a media item used by a playlist | Review the playlist and remove or replace the missing item. |

## Related

- [Playlist layouts](/playlists/layouts) — choose the visual layout for video and audio playlists
- [Media](/media) — edit the individual media records used by playlists
- [Blocks](/guide/blocks) — publish playlists in the block editor
- [Shortcodes](/guide/shortcodes) — publish playlists in classic editors and templates
