---
description: Forward captured Ink Player leads to any URL with POST JSON or GET query-string delivery and custom headers.
---

# Webhooks

Webhooks forward captured [leads](/leads) to any URL you choose. When a lead is captured and delivered to a webhook, Ink Player sends the lead payload to your destination URL, where another app or service can act on it.

Webhooks are one of the delivery destinations for [Leads](/leads), alongside the email and CRM integrations available under [Integrations](/settings/integrations).

<figure>
  <img src="/screenshots/settings/webhooks.png" alt="Webhook dialog — Name, URL, Method, and Headers">
  <figcaption>Webhook dialog — Name, URL, Method, and Headers</figcaption>
</figure>

## How a Webhook Works

Each webhook has:

- **Name** — a label so you can recognize it in the list. Required.
- **Destination URL** — where the payload is sent. Required.
- **Method** — `POST` or `GET`. This controls how the payload is delivered.
- **Headers** — optional custom request headers, added as key/value pairs.

### Method Behavior

- **POST** — the payload is sent as a **JSON body** with a `Content-Type: application/json` header.
- **GET** — the payload is appended to the destination URL as a **query string**.

## Creating a Webhook

1. Select **Add webhook**.
2. Enter a **Name** and the **Destination URL** that should receive the payload.
3. Choose the **Method** — `POST` or `GET`.
4. Optionally add custom **Headers** as key/value pairs.
5. Select **Create webhook**.

To start sending leads here, pick **Webhooks** as the delivery destination on the [Leads](/leads) side.

## The Payload

Webhooks receive the captured-lead payload. It is sent whenever a lead is captured and routed to the webhook, with these fields:

- `event` — always `lead.captured`.
- `email` — the captured email address.
- `name` — the lead's name, if provided.
- `content_id` — the numeric ID of the related media.
- `content_uid` — the media's unique identifier.
- `content_type` — the content type, e.g. `video`.
- `source_url` — the page the lead was captured on.
- `captured_at` — an ISO 8601 timestamp.

## Editing and Deleting a Webhook

Open the row menu to manage a webhook:

- **Edit** — update the name, destination URL, method, or headers, then save.
- **Delete** — remove the webhook. Once deleted, no further payloads are sent to that URL.

::: info
Webhooks are saved as you create, edit, or delete them in the dialog — there is no separate Save bar on this page.
:::
