---
description: Use Ink Player shortcodes for media, playlists, share pages, embeds, and timestamp buttons in WordPress content and templates.
---

# Shortcodes

Shortcodes let you place an Ink Player media item, a playlist, a share destination, or a clickable timestamp anywhere WordPress shortcodes are supported — posts, pages, classic editor content, widgets, and many templates.

::: tip
You do not have to type these by hand. Every media and playlist row in the dashboard shows a **copyable shortcode chip** — copy it and paste it where you need it.
:::

## Embed a media item

Use `[ink_player]` with the media id to render a single video or audio item.

```text
[ink_player id="123"]
```

The `id` is the media record's id, shown on each row in [Media](/media).

## Embed a playlist

Use `[ink_playlist]` with the playlist id to render a playlist.

```text
[ink_playlist id="45"]
```

The `id` is the playlist record's id, shown on each row in [Playlists](/playlists).

## Host a share page

Use `[inkp_share]` on a page to turn it into the destination for **Share** links. The shortcode reads the requested media from the share link automatically, so you don't pass it any attributes.

```text
[inkp_share]
```

Create a page, add this shortcode, then select that page in **Settings → [Sharing](/settings/sharing)**. Leave the setting empty to use the built-in default share page instead.

Share links pass the target media or playlist in the URL, for example:

```text
https://example.com/watch/?inkp_share=abc123&inkp_type=media
```

For playlists, the type is `playlist`.

## Embed codes

Ink Player share screens can also provide iframe embed code for a media item or playlist. The iframe loads a lightweight Ink Player embed page that renders the matching `[ink_player]` or `[ink_playlist]` shortcode internally.

Use embed code when you need the player outside normal WordPress content, such as:

- A custom landing page template.
- A third-party page builder area that does not run shortcodes.
- Another site that is allowed to embed your content.

::: info
Access rules still apply. Private or password-protected content checks viewer access before media URLs are emitted.
:::

## Add a clickable timestamp

Use `[inkp_timestamp]` to drop a clickable timestamp into your text. When a viewer clicks it, the player **on the same page** seeks to that time.

```text
[inkp_timestamp time="01:30" text="Chapter 2: Setup"]
```

- **`time`** — the position to seek to, in `MM:SS` format.
- **`text`** — the visible, clickable text.
- **`direction`** — optional; use `forward` or `backward` to make the button skip relative to the current time.
- **`id`** — optional target player uid when the page contains more than one player.

You can place several timestamps to build a list of chapters or key moments:

```text
[inkp_timestamp time="00:00" text="Intro"]
[inkp_timestamp time="02:15" text="Live demo"]
[inkp_timestamp time="08:40" text="Q&A"]
```

Relative skip buttons:

```text
[inkp_timestamp time="15" direction="backward" text="Back 15 seconds"]
[inkp_timestamp time="30" direction="forward" text="Skip 30 seconds"]
```

## Shortcodes inside overlays

The **Shortcode** overlay type lets you render another WordPress shortcode over the player. This is useful for forms, tables, quizzes, booking widgets, or other plugin output that needs WordPress to process its own markup and assets.

How it works:

1. Add a **Shortcode** overlay in the [Overlays](/guide/overlays) panel.
2. Paste the shortcode, for example `[contact-form-7 id="123"]`.
3. Choose its timing and placement.
4. Ink Player renders the shortcode server-side during the page request.
5. The overlay starts hidden and the player reveals it when its timing condition is met.

Because the shortcode is rendered by PHP, its normal WordPress CSS and JavaScript can load with the page. For very large shortcode output, use the shortcode plugin's own pagination, lazy loading, or AJAX controls so the overlay does not render unnecessary rows at once.

::: info
A timestamp seeks the player that is placed **on the same page**. Make sure the page also contains an [`[ink_player]`](#embed-a-media-item) (or the matching [block](/guide/blocks)) for the timestamp to control.
:::

## One source of truth

Like blocks, shortcodes render from the saved [media record](/media) by id. Edit the media item once in the dashboard and every shortcode that references it updates automatically — no need to touch your content.

## Related

- [Blocks](/guide/blocks) — the visual equivalent for the block editor
- [Page builders](/guide/page-builders) — Elementor and Beaver Builder widgets
