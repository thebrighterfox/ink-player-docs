---
description: Track notable Ink Player releases and documentation changes.
---

# Changelog

All notable changes to Ink Player are documented here.

## Unreleased

Features added since the initial release.

**Highlights:**

- **Draft / Published status** — media and playlists now have a publish state. Set it with the segmented **Draft / Published** control in the blocks, or with **Save as draft** / **Publish** in the dashboard. Drafts are hidden from visitors; managers still see them with an admin-only amber **Draft** badge on the player.
- **Global ads** — play pre-roll, mid-roll, and post-roll ad breaks, controlled by a master kill-switch. Ads can be served from a custom video file or a VAST tag, with ad support for YouTube and Vimeo embeds. VPAID is disabled — only modern VAST, OMID, and SIMID are used.
- **Video overlay type** — add a video overlay, with two-source media selection so you can pick separate sources for the overlay and the player.
- **Alternate audio languages** — the multi-language switcher now supports alternate spoken-language sources, including alternate **audio** sources, and preserves the current playback position when switching. See [Multi-language video](/media/multi-language).

## 1.0.0

Initial release. Ink Player launches with a branded video and audio player and a media library managed from a Vue admin dashboard under a top-level **Ink Player** menu.

**Highlights:**

- **Media library** — a single source of truth for every video and audio item, edited once and reflected everywhere it is placed. See [Media](/media).
- **Providers** — one consistent player for local uploads, remote direct URLs (MP4, HLS, DASH, audio), YouTube, Vimeo, Bunny.net Stream, Bunny.net Classic Storage, and Mux. See [Providers](/guide/providers).
- **Multi-language video** — alternate spoken-language source versions with a player language switcher that preserves playback position. See [Multi-language video](/media/multi-language).
- **Gutenberg blocks** — Ink Player, Ink Audio Player, Ink Playlist, and Ink Audio Playlist. See [Blocks](/guide/blocks).
- **Shortcodes** — `[ink_player]`, `[ink_playlist]`, `[inkp_share]`, and `[inkp_timestamp]` for media, playlists, share pages, and clickable seeking timestamps. See [Shortcodes](/guide/shortcodes).
- **Access control** — Public, Private, and Password modes, with signed/token playback for Bunny.net and Mux. See [Access control](/guide/access-control).
- **Analytics** — last-30-day KPIs, a views/viewers chart, and top performing media. See [Analytics](/analytics).
- **Leads** — capture and review viewer leads. See [Leads](/leads).
- **Branding** — apply your colors and logo across every player. See [Settings → Branding](/settings/branding).
- **Presets** — reusable player configurations. See [Settings → Presets](/settings/presets).
- **Page builders** — native Elementor widget and Beaver Builder module. See [Page builders](/guide/page-builders).
- **Integrations** — connect providers and enable page builders from [Settings → Integrations](/settings/integrations).
