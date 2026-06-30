---
description: Connect Bunny.net Stream and Classic Storage to Ink Player for public and private video delivery with signed URLs.
---

# Bunny.net

Bunny.net is a **Storage** integration that hosts and delivers your videos and media files through Bunny's network. Enabling it lets you stream from Bunny Stream libraries and serve files from Classic Storage zones — public or private — directly in your players. Use either or both.

## What this enables

- Stream from a **public** Bunny Stream library (served unsigned).
- Stream from a **private** Bunny Stream library protected with signed, expiring URLs.
- Serve files from public and private **Classic Storage** zones over a pull-zone CDN.
- Set the **initial playback quality** for Bunny media.

## Prerequisites

- A Bunny.net account with a Stream library and/or a Storage zone.
- The library/zone IDs, API keys, CDN hostnames, and — for private delivery — the relevant token authentication keys.

## Connect

1. Go to **Settings → Integrations** and enable **Bunny.net** (Storage category).
2. Click **Manage** to open the Bunny.net settings. They are split across four tabs.
3. Fill in only the tabs for the modes you actually use.
4. Click **Save**.

<figure>
  <img src="/screenshots/settings/integrations/bunny-tabs.png" alt="Bunny.net Manage screen with its four settings tabs">
  <figcaption>Bunny.net Manage screen with its four settings tabs</figcaption>
</figure>

::: tip
You only need the sections for the modes you use. If you stream everything through a public Stream library, you can leave the private and Classic Storage tabs empty.
:::

## Settings reference

| Field | Tab | Required | Notes |
| --- | --- | --- | --- |
| Public Stream Library ID | Stream (Public) | For public streaming | Your public Stream library ID. |
| Public Stream Library API Key | Stream (Public) | For public streaming | API key for the public library. |
| Public Stream CDN Hostname | Stream (Public) | For public streaming | e.g. `vz-xxxx.b-cdn.net`. |
| Private Stream Library ID | Stream (Private) | For private streaming | Your private Stream library ID. |
| Private Stream Library API Key | Stream (Private) | For private streaming | API key for the private library. |
| Private Stream CDN Hostname | Stream (Private) | For private streaming | e.g. `vz-xxxx.b-cdn.net`. |
| Private Stream Token Authentication Key | Stream (Private) | For signed delivery | Per-library token key that signs private stream URLs. |
| Public Storage Zone | Classic Storage | For public files | Public storage zone name. |
| Public Storage CDN Hostname | Classic Storage | For public files | e.g. `inkp-public-xxxx.b-cdn.net`. |
| Private Storage Zone | Classic Storage | For private files | Private storage zone name. |
| Private Storage CDN Hostname | Classic Storage | For private files | e.g. `inkp-private-xxxx.b-cdn.net`. |
| Private Storage Token Authentication Key | Classic Storage | For signed delivery | Per-zone token key that signs private storage URLs. |
| Initial quality | Playback | No | `auto`, `1080p`, `720p`, `480p`, or `360p`. |

::: info
Token authentication keys are **per private stream library** and **per private storage zone** — there is no single global token field. Public libraries and zones are served unsigned and need no token key.
:::

## Using it

When you add media, open the **Bunny.net source picker** to:

- Browse your **Stream library**, including its folders / collections.
- **Upload** new media directly to Bunny.
- **Filter** items by **public** vs **private**.

The chosen item is added to your [Media](/media) library ready to use in a player.

## Private content and access control

Private streams and files are delivered through **token-authenticated URLs** — signed links that expire — so the underlying URL stays protected and can't be freely shared or guessed.

::: info
For how Ink Player gates protected media and how signed delivery fits into your overall protection strategy, see [Access control](/guide/access-control).
:::
