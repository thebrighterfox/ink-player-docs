---
description: Manage Ink Player advanced settings including frontend custom CSS and JavaScript and uninstall data behavior.
---

# Advanced

The Advanced page holds power-user options: injecting your own code on the frontend, and controlling what happens to your data when the plugin is uninstalled.

## Custom code

Add your own styles and scripts that are injected on the frontend **wherever an Ink Player is rendered**.

- **Custom CSS** — Override or extend the player's appearance.
- **Custom JS** — Run your own JavaScript alongside the player.

::: warning
Custom CSS and JS run on your live site. Test changes carefully — a mistake here can affect how players display or behave for every visitor.
:::

## Uninstall

### Remove data on uninstall

This toggle decides what happens when you delete the plugin:

- **On** — Deleting the plugin permanently drops **all media, playlists, presets, analytics, and settings**.
- **Off (default)** — Your data is preserved if you remove the plugin, so it's still there if you reinstall.

::: warning
Turning **Remove data on uninstall** on is irreversible once the plugin is deleted. Leave it off unless you're certain you want a clean wipe.
:::

::: info
Remember to **Save** from the Save bar at the bottom of the page after making changes.
:::
