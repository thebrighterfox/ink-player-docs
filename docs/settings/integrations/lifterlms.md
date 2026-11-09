---
description: Require students to finish a LifterLMS lesson's Ink Player video before completing it, and auto-advance to the next lesson.
---

# LifterLMS

LifterLMS is an **LMS** integration. When a lesson has an Ink Player video, students must watch it to the end before they can complete the lesson — and the lesson can complete and move on by itself when the video ends. It works with the free LifterLMS plugin; no add-on is needed.

## What this enables

- **Require video completion** — **Mark Complete** and **Take Quiz** stay locked until the video ends. LifterLMS also refuses the completion on the server, so it can't be skipped.
- **Auto-advance** — when the video ends, a short countdown appears, then the lesson completes and the next lesson opens and starts playing.

## Prerequisites

- **LifterLMS** installed and active.
- Your video added to [Media](/media).

<div class="ink-timeline">

## Step 1 — Enable LifterLMS in Ink Player

1. Go to **Settings → [Integrations](/settings/integrations)**, open the **LMS** tab, and turn on **LifterLMS**.

<figure>
  <img src="/screenshots/settings/integrations/lifterlms/enable.png" alt="The Integrations page LMS tab with the LifterLMS toggle on">
  <figcaption>Turn on LifterLMS</figcaption>
</figure>

2. Click **Manage** to choose **Require video completion**, **Auto-advance**, and the **Countdown**, then **Save changes**.

<figure>
  <img src="/screenshots/settings/integrations/lifterlms/settings.png" alt="LifterLMS settings: Require video completion, Auto-advance, and Countdown">
  <figcaption>Choose how lessons complete</figcaption>
</figure>

## Step 2 — Add the video to a lesson

1. Open your course in the **Course Builder** and click a lesson's **Settings**.
2. Paste your shortcode into the lesson **Content**, for example `[ink_player id="123"]`.

<figure>
  <img src="/screenshots/settings/integrations/lifterlms/lesson-content.png" alt="The LifterLMS Course Builder with an Ink Player shortcode in the lesson Content">
  <figcaption>Paste the Ink Player shortcode into the lesson Content</figcaption>
</figure>

3. Click **Save changes**.

You can also edit the lesson in the block editor and add the **Ink Player** block to its content instead.

::: tip
Leave the lesson's **Video Embed URL** field empty — the Ink Player video goes in the lesson content.
:::

## Step 3 — What students see

1. **Mark Complete** is disabled, with the hint "Watch the video to continue."

<figure>
  <img src="/screenshots/settings/integrations/lifterlms/locked.png" alt="A LifterLMS lesson with the Ink Player video and Mark Complete disabled">
  <figcaption>Mark Complete stays locked until the video ends</figcaption>
</figure>

2. When the video ends, the button unlocks. Clicking it completes the lesson and LifterLMS opens the next one.
3. With **Auto-advance** on, "Continuing in 3…" counts down, the lesson completes on its own, and the next lesson opens and starts playing.

</div>

## Settings reference

| Setting | Default | What it does |
| --- | --- | --- |
| Require video completion | On | Students can complete a lesson only after its Ink Player video ends. |
| Auto-advance | Off | When the video ends, complete the lesson and continue to the next one after the countdown. |
| Countdown (seconds) | 5 | How long the countdown runs before the lesson completes. |

## Notes

- Lessons without an Ink Player video, and lessons a student already completed, are never locked.
- Instructors can still mark a lesson complete for a student from the admin.
- Auto-advance only autoplays the next lesson it opens. After a manual **Mark Complete**, the next lesson's video waits for the student to press play.
- If the browser blocks autoplay with sound, the next video starts muted.
- Lock and auto-advance apply to logged-in students; LifterLMS only records completion for them.
