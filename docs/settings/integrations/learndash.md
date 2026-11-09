---
description: Use Ink Player videos with LearnDash Video Progression so students finish the video before completing a lesson or topic.
---

# LearnDash

LearnDash is an **LMS** integration. It makes Ink Player a LearnDash **Video Progression** video: add an Ink Player video to a lesson or topic, and students must watch it to the end before they can mark the step complete. LearnDash's own Video Progression settings keep working.

## What this enables

- **Mark Complete** stays locked until the video ends — LearnDash checks it on the server, so it can't be skipped.
- **Display Timing** — show the video before the step's topics and quizzes, or only after they're completed.
- **Lesson auto-completion** and **Completion delay** — complete the step automatically when the video ends.
- **Video Resume** — students continue where they left off.

## Prerequisites

- **LearnDash** installed and active.
- Your video added to [Media](/media). Copy its shortcode from the media row, for example `[ink_player id="123"]`.

<div class="ink-timeline">

## Step 1 — Enable LearnDash in Ink Player

Go to **Settings → [Integrations](/settings/integrations)**, open the **LMS** tab, and turn on **LearnDash**. There are no settings to fill in.

## Step 2 — Add the video to a lesson

1. Edit a LearnDash **Lesson** or **Topic** and open its **Settings** tab.
2. Turn on **Video Progression**.
3. Paste your shortcode into **Video URL**, for example `[ink_player id="123"]`.

<figure>
  <img src="/screenshots/settings/integrations/learndash/video-url.png" alt="The LearnDash lesson Settings tab with Video Progression on and an Ink Player shortcode in Video URL">
  <figcaption>Paste the Ink Player shortcode into Video URL</figcaption>
</figure>

4. Choose a **Display Timing**, and set **Video Resume**, auto-completion, and the other options as you like.
5. **Publish** or **Save** the lesson.

::: tip
Don't also add the Ink Player block to the lesson content — LearnDash shows the **Video URL** video for you, in the place your Display Timing sets.
:::

## Step 3 — What students see

1. The video plays as an Ink Player, with all your player settings, presets, and overlays. **Mark Complete** stays disabled until the video ends. With **Before completed sub-steps**, the step's topics and quizzes are hidden until then too.

<figure>
  <img src="/screenshots/settings/integrations/learndash/locked.png" alt="A LearnDash lesson with the Ink Player video and Mark Complete disabled">
  <figcaption>Mark Complete stays locked until the video ends</figcaption>
</figure>

2. When the video ends, the button unlocks — or the step completes on its own if auto-completion is on.
3. After the step completes, LearnDash shows its "Great Job! You've completed this lesson" message with a **Next Lesson** button.

::: tip
To go straight to the next lesson instead of the message, turn on **Automatic Progression** under **LearnDash LMS → Courses → Settings**.
:::

</div>

## Notes

- Students who already completed the step, and admins who can bypass course progression, are never locked.
- Progress is saved in the same browser cookie LearnDash uses for its own videos.
