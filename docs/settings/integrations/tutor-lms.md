---
description: Play Ink Player videos as Tutor LMS lesson videos, require students to finish them, and auto-advance to the next lesson.
---

# Tutor LMS

Tutor LMS is an **LMS** integration. Use an Ink Player video as a lesson's video, and students must watch it to the end before they can complete the lesson — and the lesson can complete by itself and move on when the video ends.

## What this enables

- **Ink Player as the lesson video** — through Tutor's **Shortcode** video source.
- **Require video completion** — **Mark as Complete** stays locked until the video ends. Tutor also refuses the completion on the server, so it can't be skipped.
- **Auto-advance** — when the video ends, a short countdown appears, the lesson completes on its own, and the next lesson opens and starts playing.

## Prerequisites

- **Tutor LMS** installed and active.
- Your video added to [Media](/media). Copy its shortcode from the media row, for example `[ink_player id="123"]`.

<div class="ink-timeline">

## Step 1 — Enable Tutor LMS in Ink Player

1. Go to **Settings → [Integrations](/settings/integrations)**, open the **LMS** tab, and turn on **Tutor LMS**.

<figure>
  <img src="/screenshots/settings/integrations/tutor-lms/enable.png" alt="The Integrations page LMS tab with the Tutor LMS toggle">
  <figcaption>Turn on Tutor LMS</figcaption>
</figure>

2. Click **Manage** to choose **Require video completion**, **Auto-advance**, and the **Countdown**, then **Save changes**.

<figure>
  <img src="/screenshots/settings/integrations/tutor-lms/settings.png" alt="Tutor LMS settings: Require video completion, Auto-advance, and Countdown">
  <figcaption>Choose how lessons complete</figcaption>
</figure>

## Step 2 — Add the video to a lesson

1. Open your course in the **Course Builder** and edit a lesson.
2. Under **Video**, choose **Shortcode** as the source.
3. Paste your shortcode, for example `[ink_player id="123"]`, and click **Ok**.

<figure>
  <img src="/screenshots/settings/integrations/tutor-lms/lesson-video.png" alt="The Tutor lesson editor with Shortcode chosen under Video and an Ink Player shortcode">
  <figcaption>Choose Shortcode and paste the Ink Player shortcode</figcaption>
</figure>

4. Save the lesson.

::: tip
If **Shortcode** isn't in the list, turn it on under **Tutor LMS → Settings → Course → Preferred Video Source**.
:::

## Step 3 — What students see

1. The video plays in the lesson as an Ink Player. **Mark as Complete** is disabled, with the hint "Watch the video to continue."

<figure>
  <img src="/screenshots/settings/integrations/tutor-lms/locked.png" alt="A Tutor lesson with Mark as Complete disabled before the video is watched">
  <figcaption>Mark as Complete stays locked until the video ends</figcaption>
</figure>

2. When the video ends, **Mark as Complete** unlocks.

<figure>
  <img src="/screenshots/settings/integrations/tutor-lms/unlocked.png" alt="Mark as Complete enabled after the video ended">
  <figcaption>The button unlocks when the video ends</figcaption>
</figure>

3. With **Auto-advance** on, "Continuing in 3…" counts down, the lesson completes on its own, and the next lesson opens and starts playing.

<figure>
  <img src="/screenshots/settings/integrations/tutor-lms/countdown.png" alt="The Continuing in 3 countdown under Mark as Complete">
  <figcaption>Auto-advance counts down, then moves to the next lesson</figcaption>
</figure>

</div>

## Settings reference

| Setting | Default | What it does |
| --- | --- | --- |
| Require video completion | On | Students can complete a lesson only after its Ink Player video ends. |
| Auto-advance | Off | When the video ends, complete the lesson after the countdown and open the next lesson. |
| Countdown (seconds) | 5 | How long the countdown runs before the lesson completes. |

## Notes

- Lessons without an Ink Player video, and lessons a student already completed, are never locked.
- An Ink Player block or shortcode in the lesson content counts too.
- Auto-advance only autoplays the next lesson it opens. Opening a lesson with **Next** leaves the video paused.
- If the browser blocks autoplay with sound, the next video starts muted.
