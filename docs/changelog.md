---
description: Every Ink Player release and what changed in it.
---

# Changelog

## 1.0.2

- Fixed: network activation on multisite created tables only for the site it was activated from; every other site fataled on its first request.
- Fixed: a site added to a network after activation had no tables of its own.
- Added: a site missing its tables now rebuilds them on the next request, so an affected install repairs itself on update.
- Fixed: a missing table can no longer take down the front end.
- Changed: no longer warns about an unactivated licence, which gates no feature.

## 1.0.1

- Fixed: an empty control bar still painted a band over the video.
- Fixed: disabled controls could reappear depending on CSS load order.
- Fixed: audio skins showed a captions button with no way to turn it off.
- Improved: saving media or a playlist returns you to the list.
- Improved: the dashboard reports an unactivated licence.

## 1.0.0

- Initial release.
- Media library for every video and audio item, edited once and reflected everywhere.
- Providers: local uploads, remote MP4/HLS/DASH and audio, YouTube, Vimeo, Bunny.net Stream, Bunny.net Classic Storage, Mux, Cloudflare Stream and Cloudflare R2.
- Multi-language video and audio, with a switcher that keeps the playback position.
- Draft and Published states for media and playlists.
- Player theming: control bar colour, icon colour, icon hover background and play-button background.
- Playlist theming across the List, Grid and Slider layouts.
- Branding and reusable presets.
- Blocks: Ink Player, Ink Audio Player, Ink Playlist and Ink Audio Playlist.
- Shortcodes: `[ink_player]`, `[ink_playlist]`, `[inkp_share]` and `[inkp_timestamp]`.
- Elementor widget and Beaver Builder module.
- Access control: public, private and password, with signed playback.
- Ads: pre-roll, mid-roll and post-roll, from a video file or a VAST tag.
- Analytics and lead capture.
