---
description: Send Ink Player lead capture payloads to custom webhook URLs with POST or query-string delivery.
---

# Webhooks

Webhooks let you send Ink Player payloads — such as captured [leads](/leads) — to any URL you choose. When an event fires, Ink Player **POSTs a JSON payload** to your destination URL, where another app or service can act on it.

Webhooks are a delivery destination for [Leads](/leads), alongside the email and CRM integrations available under [Integrations](/settings/integrations).

## How a webhook works

Each webhook has:

- A **destination URL** — where the payload is sent.
- The **event(s)** it listens to — Ink Player POSTs the JSON payload to the URL whenever one of those events fires.

## Creating a webhook

1. Add a new webhook.
2. Enter the destination URL that should receive the payload.
3. Select the event(s) the webhook should listen to.
4. Save.

## Testing a webhook

Use the test action to send a sample payload to your destination URL. This confirms the endpoint is reachable and that the receiving service handles the payload as expected, without waiting for a real event.

::: tip
Test a webhook right after creating it so you catch a wrong URL or a misconfigured endpoint before any real events fire.
:::

## Editing and deleting a webhook

- **Edit** — Update the destination URL or change which events it listens to, then save.
- **Delete** — Remove the webhook. Once deleted, no further payloads are sent to that URL.

::: info
Remember to **Save** from the Save bar at the bottom of the page after making changes.
:::
