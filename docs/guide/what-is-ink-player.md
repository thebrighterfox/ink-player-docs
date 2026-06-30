---
description: Learn what Ink Player does for WordPress video and audio, including media libraries, providers, blocks, shortcodes, overlays, ads, analytics, and integrations.
---

# What is Ink Player?

Ink Player is a WordPress plugin that adds a branded video and audio player plus a media library to your site, all managed from a modern Vue admin dashboard. It gives you one consistent, customizable player for every source — whether your media lives on your own server, on YouTube, or on a streaming platform like Bunny.net or Mux.

<figure>
  <img src="/screenshots/guide/admin-overview.png" alt="Ink Player admin menu and Dashboard">
  <figcaption>Ink Player admin menu and Dashboard</figcaption>
</figure>

## One player, every source

Ink Player plays from many [providers](/guide/providers) with a single, consistent player UI:

- **Local** — self-hosted files uploaded to WordPress
- **Remote** — any direct URL (MP4, HLS `.m3u8`, DASH `.mpd`, or audio such as MP3)
- **YouTube** and **Vimeo**
- **Bunny.net Stream** and **Bunny.net Classic Storage**
- **Mux**

## Where it lives

After activation, you get a top-level **Ink Player** menu in the WordPress admin. The dashboard is organized into:

- **Dashboard** — last-30-day KPIs, a views/viewers chart, top performing media, recent media and playlists, quick links, and resources.
- **Library** — [Media](/media) and [Playlists](/playlists).
- **System** — [Analytics](/analytics), [Leads](/leads), and [Settings](/settings).

Settings is split into **Branding**, **Analytics**, **Presets**, **Sharing**, **Ads**, **Advanced**, **Webhooks**, and [Integrations](/settings/integrations).

::: tip
A **Docs** link in the admin header opens the documentation for the screen you are currently viewing.
:::

## The media record is the source of truth

Every piece of media you add becomes a **media record**. Wherever you place that media — in a Gutenberg [block](/guide/blocks), a [shortcode](/guide/shortcodes), or a [page builder](/guide/page-builders) widget — it renders from the saved record by id. Edit the media item once in the dashboard and the change propagates everywhere it is used automatically.

## Key features

- A media [library](/media) with single-record editing
- Video and audio [Gutenberg blocks](/guide/blocks) and [playlists](/playlists)
- [Shortcodes](/guide/shortcodes) for media, playlists, sharing, and clickable timestamps
- [Multi-language video](/media/multi-language) with alternate spoken-language source switching
- [Overlays](/guide/overlays) — calls to action, watermarks, email capture, hotspots, banners, and more
- [Linear ads](/settings/ads) — pre-roll, mid-roll, and post-roll, custom or VAST
- [Access control](/guide/access-control) — Public, Private, or Password
- **Draft and published** — keep media and playlists hidden from visitors while you work, then publish when ready
- [Sharing](/settings/sharing) with public share links and embed codes
- Built-in [analytics](/analytics) and [leads](/leads) capture
- [Branding](/settings/branding) and reusable [presets](/settings/presets)
- [Page builder](/guide/page-builders) support for Elementor and Beaver Builder

## Requirements

- WordPress 6.0 or later
- PHP 8.0 or later

Ready to begin? See [Installation](/guide/installation) and [Getting started](/guide/getting-started).
