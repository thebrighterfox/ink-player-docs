---
description: Control who can watch Ink Player media with public, private, and password modes, and understand which providers support enforceable protection.
---

# Access control

Access control — labeled **"Who can watch"** on a media item — decides who is allowed to view your video or audio. Ink Player offers three modes, and how strongly each is enforced depends on the [provider](/guide/providers) behind the media.

## The three modes

### Public

Anyone can watch. No sign-in and no password.

### Private

Only logged-in WordPress users can watch. Visitors who are not signed in see a **sign-in prompt** instead of the player.

### Password

Viewers must enter a **password** before the media plays.

## What each provider supports

Access control can be truly **enforced** for some sources and not others.

| Source | Enforceable access control? |
| --- | --- |
| **Bunny.net** (Stream & Classic Storage) | Yes — supports signed/token playback |
| **Mux** | Yes — supports signed/token playback |
| **Protected (private) uploads** | Yes |
| **Public WordPress media library URLs** | No — the file URL stays reachable |
| **Platform embeds (YouTube / Vimeo)** | No — cannot be truly access-protected |

::: warning
Public WordPress media-library URLs and platform embeds (YouTube/Vimeo) **cannot be truly access-protected**. You can gate the page they appear on, but the underlying URL remains reachable to anyone who has it.
:::

## Signed (token) playback

Bunny.net and Mux support **signed/token playback**. With signed playback, the stream URL itself is protected and **expiring** — so the media is secured at the source, not just at the page.

::: info
**Page gating vs. URL protection.** A "public" stream placed on a gated page is gated **at the page** — but its stream URL stays reachable. To protect the stream URL itself, use a provider that supports signed playback (Bunny.net or Mux) together with Private or Password access.
:::

## Choosing the right setup

- **Just hiding content from casual visitors?** Private or Password on any source gates the page.
- **Need the media itself to be secure and not shareable by URL?** Use **Bunny.net** or **Mux** with signed playback, plus a Private or Password mode.
- **Using a public file URL or a YouTube/Vimeo embed?** Understand that the page can be gated but the underlying URL cannot be locked down.

## Related

- [Providers](/guide/providers) — what each source type is and how to add it
- [Settings → Integrations](/settings/integrations) — connect Bunny.net and Mux
