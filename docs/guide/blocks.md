---
description: Use Ink Player Gutenberg blocks for video players, audio players, video playlists, and audio playlists in the WordPress block editor.
---

# Blocks

Ink Player ships four native Gutenberg blocks so you can place a player or a playlist directly in the WordPress editor — no shortcode required.

## The four blocks

| Block | What it places |
| --- | --- |
| **Ink Player** | A single video |
| **Ink Audio Player** | A single audio track |
| **Ink Playlist** | A video playlist |
| **Ink Audio Playlist** | An audio playlist |

## Adding a block

1. In the WordPress editor, click the **+** (Add block) button.
2. Search for **Ink Player** (or one of the other three block names) and insert it.
3. The block shows a **placeholder** where you pick an existing media item or paste a source URL.
4. Once a source is chosen, the player renders in the editor.

::: tip
You can paste a source directly into the placeholder — a YouTube link, a Vimeo link, a direct MP4, an HLS `.m3u8`, or a DASH `.mpd`. See [Providers](/guide/providers) for everything that is supported.
:::

## Configuring a block

Select the block and open the **inspector** (the settings sidebar on the right). The inspector groups its options into config panels so you can adjust playback and appearance for that placement.

For a full panel-by-panel explanation of the video inspector, see [Video inspector panels](/media/video-inspector). It covers Basic Settings, Appearance, Overlays, Ads, Presets, Chapters, Captions, Multi-Language, Global Branding, Timestamp, and Who can watch.

### Switching block type

Each block shows **cross-promo chips** that let you switch to a related block type — for example, swap an **Ink Player** for an **Ink Playlist** — without removing and re-adding a block.

## Blocks stay in sync

Blocks render from the saved media record by its uid. That means any edit you make to the media item in the dashboard editor — a new title, a different source, updated branding, or a change to [who can watch](/guide/access-control) — propagates automatically to every block where that media is placed.

::: info
Because every placement points back to the same [media record](/media), you never have to update blocks one by one. Edit once in the dashboard and you are done.
:::

## Blocks vs. shortcodes

Blocks are the visual way to place media in the block editor. If you are working in a classic editor, a widget, or a template, use a [shortcode](/guide/shortcodes) instead — both render from the same media record.
