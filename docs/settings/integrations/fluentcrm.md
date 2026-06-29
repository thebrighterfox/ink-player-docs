---
description: Send Ink Player email capture leads to FluentCRM lists or tags on the same WordPress site.
---

# FluentCRM

FluentCRM is a CRM plugin that runs inside your WordPress site. Connecting it makes FluentCRM a destination for the leads Ink Player captures through the email gate. When a viewer submits their email to unlock your media, that [Lead](/leads) is added to a FluentCRM list or tag of your choice.

Because FluentCRM lives on the same WordPress site, Ink Player integrates with it locally — there is no external API key to enter.

## What this integration does

- Adds captured leads to FluentCRM, on the same site.
- Lets you pick the list or tag new leads are assigned to.
- Needs no external credentials — it connects to your local FluentCRM install.

## How to enable

1. Make sure the **FluentCRM** plugin is installed and active on your site.
2. Go to **Settings → [Integrations](/settings/integrations)**.
3. Find the **FluentCRM** card under the **CRM** category.
4. Click **Enable**, then **Manage**.
5. Select the target **list or tag** that leads should be added to.
6. Click **Save**.

::: info
No API key is required. FluentCRM runs on the same site, so Ink Player talks to it directly.
:::

## Requirements

- The FluentCRM plugin must be installed and active on the same WordPress site.
- At least one FluentCRM list or tag to assign leads to.

## Notes

- If the FluentCRM card is missing or greyed out, confirm the FluentCRM plugin is active.
- Prefer to send leads somewhere else as well? [Webhooks](/settings/webhooks) are an additional lead destination.
- See the [Leads](/leads) page to review everything captured by your players.
