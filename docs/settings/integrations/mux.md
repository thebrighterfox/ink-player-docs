---
description: Connect Mux to Ink Player for uploads, imports, public or signed playback, quality settings, and generated captions.
---

# Mux

Mux is a **Storage** integration for hosting and streaming your videos. Connect your Mux account to upload, import, and play assets directly through Ink Player.

## Connecting Mux

<figure>
  <img src="/screenshots/settings/integrations/mux-connect.png" alt="Mux connection — token and signing keys">
  <figcaption>Mux connection — token and signing keys</figcaption>
</figure>

1. Go to **Settings → Integrations** and enable **Mux** (Storage category).
2. Click **Manage** to open the Mux settings — they are split across two tabs.
3. On the **API Access** tab, enter your **Access Token ID** and **Access Token Secret**. Add the **Signing Key ID** and **Signing Private Key (Base64)** only if you use signed (private) playback.
4. On the **Advanced** tab, choose your default video quality, playback policy, and caption options.
5. Click **Test connection** to verify your credentials.
6. Save your settings.

## Settings reference

| Field | Tab | Required | Notes |
| --- | --- | --- | --- |
| Access Token ID | API Access | Yes | Create an API access token in the Mux dashboard (Settings → API Access Tokens). |
| Access Token Secret | API Access | Yes | Paired with the Access Token ID. |
| Signing Key ID | API Access | Signed playback only | Required only for signed (private) playback. |
| Signing Private Key (Base64) | API Access | Signed playback only | Base64-encoded private key for signing. |
| Video quality | Advanced | No | Encoding tier for new uploads and URL imports: `basic`, `plus`, or `premium`. |
| Playback policy | Advanced | No | Default for new assets: `public` or `signed`. |
| Normalize audio | Advanced | No | Even out loudness across your videos. |
| Auto-generate captions | Advanced | No | Automatically create captions. |
| Caption language | Advanced | No | Shown when auto-captions are on; defaults to auto-detect. |

## Playback policies

Every Mux asset is played under one of two policies:

- **Public** — anyone with the URL can play the video.
- **Signed** — Ink Player generates an expiring, unforgeable **RS256 JWT-signed** URL.

::: warning
**Signed playback protects the stream URL** — the link is unforgeable and expires — but it does **not by itself** stop a logged-in viewer from sharing a link while it is still valid.

A **public** Mux video placed on a gated page is gated **at the page**, but its URL remains reachable to anyone who has it. Choose **signed** when you need the stream URL itself to be protected.
:::

## Adding Mux media

When you add media, the **Mux picker** lets you:

- Choose from **existing assets** in your Mux account.
- **Upload directly** using chunked upload.
- **Import by URL**.
- **Filter** items by **public** vs **signed**.

The selected asset is added to your [Media](/media) library.

::: info
For how playback policies fit into protecting your content, see [Access control](/guide/access-control).
:::
