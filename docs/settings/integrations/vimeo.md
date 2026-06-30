---
description: Import videos from a Vimeo channel, group, or showcase into your Ink Player library using a Vimeo access token.
---

# Vimeo

Vimeo is a **Video** integration. Enabling it lets you import the videos behind a Vimeo channel, group, or showcase URL into your library — Ink Player enumerates them and adds each video, played through Vimeo's embed.

## What this enables

- Import every video from a Vimeo **channel**, **group**, or **showcase** URL.
- Pages through large collections using the Vimeo API.

## Prerequisites

- A **Vimeo access token**. Without one, Ink Player cannot enumerate a collection and the import fails.
- Create an app at [developer.vimeo.com](https://developer.vimeo.com/), then generate an access token with the **Public** and **Private** scopes.

## Connect

<figure>
  <img src="/screenshots/settings/integrations/vimeo-connect.png" alt="Vimeo connection with an access token">
  <figcaption>Vimeo connection with an access token</figcaption>
</figure>

1. Go to **Settings → Integrations** and enable **Vimeo** (Video category).
2. Click **Manage**.
3. Paste your **Access Token**.
4. Click **Test connection** to confirm the token works — a success message shows the connected account name.
5. Click **Save**.

## Settings reference

| Field | Tab | Required | Notes |
| --- | --- | --- | --- |
| Access Token | — | Yes | Created at developer.vimeo.com with the Public and Private scopes. Imports fail without it. |

## Using it

1. Start importing media from a playlist source.
2. Paste a Vimeo **channel, group, or showcase URL**.
3. Ink Player enumerates the collection; choose which videos to add.
4. Save — the videos appear in your [Media](/media) library, each playing through Vimeo's embed.

::: warning
Platform embeds **can't be truly access-protected**. You can place a Vimeo video on a gated page, but the underlying video remains reachable on Vimeo itself. See [Access control](/guide/access-control) for what protection is and isn't possible with embedded platforms.
:::

## Troubleshooting

- **Import fails or returns nothing** — confirm the token has both the Public and Private scopes, and that Vimeo is enabled on the Integrations screen.
- Use **Test connection** to verify the token before importing.

## Next steps

- Imported videos live in your [Media](/media) library alongside your other content.
- See [YouTube](/settings/integrations/youtube) for the equivalent playlist importer.
