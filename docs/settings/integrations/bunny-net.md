---
description: Connect Bunny.net Stream and Classic Storage to Ink Player for public and private video delivery with signed URLs.
---

# Bunny.net

Bunny.net is a **Storage** integration that lets you host and deliver your videos and media files through Bunny's network. Ink Player supports two ways of working with Bunny, and you can use either or both.

## Delivery modes

### Bunny Stream

Stream videos from a **Bunny Stream library**. This mode works with:

- **Public libraries** — streams are openly reachable by URL.
- **Private / token-authenticated libraries** — streams are protected with signed, expiring URLs.

### Classic Storage

Serve media files from a **Bunny storage zone**, delivered to viewers over a **pull-zone CDN**. Classic Storage uses separate **public** and **private** storage zones so you can keep open and protected files apart.

## Settings

Open the Manage screen from the Bunny.net card to configure:

- **Bunny Stream API access** — the Stream **library** and its **API key**.
- **Classic Storage public zone** — the public storage zone name and its **CDN (pull) hostname**.
- **Classic Storage private zone** — the private storage zone name and its **CDN (pull) hostname**.
- **Token authentication key** — used for private, signed delivery.

## Connecting Bunny.net

1. Go to **Settings → Integrations** and enable **Bunny.net** (Storage category).
2. Click **Manage** to open the Bunny.net settings.
3. Enter your **Bunny Stream** library and API key if you're using Stream.
4. Enter your **public** and **private** Classic Storage zone names and their CDN (pull) hostnames if you're using Classic Storage.
5. Enter the **token authentication key** for private, signed delivery.
6. Click **Test connection** to verify your credentials.
7. Save your settings.

::: tip
You only need to fill in the sections for the modes you actually use. If you stream everything through Bunny Stream, you can leave the Classic Storage zones empty.
:::

## Picking Bunny media

When you add media, open the **Bunny.net source picker** to:

- Browse your **Stream library**, including its **folders / collections**.
- **Upload** new media directly to Bunny.
- **Filter** items by **public** vs **private**.

The chosen item is added to your [Media](/media) library ready to use in a player.

## Private content and access control

Private content is delivered through **token-authenticated URLs** — signed links that expire — so the underlying stream URL stays protected and can't be freely shared or guessed.

::: info
For how Ink Player gates protected media and how signed delivery fits into your overall protection strategy, see [Access control](/guide/access-control).
:::
