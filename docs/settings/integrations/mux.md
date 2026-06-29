---
description: Connect Mux to Ink Player for uploads, imports, public or signed playback, quality settings, and generated captions.
---

# Mux

Mux is a **Storage** integration for hosting and streaming your videos. Connect your Mux account to upload, import, and play assets directly through Ink Player.

## Settings

Open the Manage screen from the Mux card. Its settings are split across two tabs.

### API Access

Enter your Mux credentials:

- **Token ID**
- **Token Secret**
- **Signing Key ID**
- **Signing Private Key**

### Advanced

- **Video quality** — `basic`, `plus`, or `premium`.
- **Default playback policy** — `public` or `signed`.
- **Normalize audio** — even out loudness across your videos.
- **Auto-generate captions** — automatically create captions, with a selectable **caption language**.

## Connecting Mux

1. Go to **Settings → Integrations** and enable **Mux** (Storage category).
2. Click **Manage** to open the Mux settings.
3. On the **API Access** tab, enter your Token ID, Token Secret, Signing Key ID, and Signing Private Key.
4. On the **Advanced** tab, choose your default video quality, playback policy, and caption options.
5. Click **Test connection** to verify your credentials.
6. Save your settings.

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
