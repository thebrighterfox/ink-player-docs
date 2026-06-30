---
description: Send Ink Player email capture leads to FluentCRM as subscribers on the same WordPress site.
---

# FluentCRM

FluentCRM is a CRM plugin that runs inside your WordPress site. Connecting it makes FluentCRM a destination for the leads Ink Player captures through the email gate. When a viewer submits their email to unlock your media, that [Lead](/leads) is created or updated as a FluentCRM subscriber.

Because FluentCRM lives on the same WordPress site, Ink Player talks to it locally — there is no external API key to enter.

## What this enables

- Creates or updates the captured email as a FluentCRM **subscriber** (status `subscribed`).
- Needs no external credentials — it connects to your local FluentCRM install.

## Prerequisites

- The **FluentCRM** plugin must be installed and active on the same WordPress site.

## Connect

<figure>
  <img src="/screenshots/settings/integrations/fluentcrm-connect.png" alt="FluentCRM connection with the Test button">
  <figcaption>FluentCRM connection with the Test button</figcaption>
</figure>

1. Make sure the **FluentCRM** plugin is installed and active.
2. Go to **Settings → [Integrations](/settings/integrations)**.
3. Find the **FluentCRM** card under the **CRM** category.
4. Click **Enable**, then **Manage**.
5. Click **Test connection** to confirm FluentCRM is active and reachable. There are no other settings to fill in.

::: info
The Manage screen has no fields — only a **Test connection** button. There is no list or tag picker; captured emails are simply created or updated as subscribers.
:::

## Using it

1. Add an **email-gate overlay** to a player and set its provider to **FluentCRM**.
2. Save the player. When a viewer submits their email, the subscriber is created or updated in FluentCRM.

## Troubleshooting

- If the FluentCRM card is missing or greyed out, confirm the FluentCRM plugin is active.

## Related links

- Prefer to send leads somewhere else as well? [Webhooks](/settings/webhooks) are an additional lead destination.
- See the [Leads](/leads) page to review everything captured by your players.
