---
description: Connect an Amazon S3 bucket to Ink Player to serve your video files directly — public over CloudFront, or private with short-lived signed URLs.
---

# Amazon S3

Amazon S3 is a **Storage** integration. Connect a bucket to serve your video files straight from S3 — **public** over a CloudFront domain, or **private** with short-lived signed URLs — and upload and browse them without leaving Ink Player. S3 stores and delivers your file as-is (no transcoding), so upload formats browsers can play: MP4, MOV, WebM, or Ogg.

## What this enables

- Serve video files from your S3 bucket as **public** URLs or **signed (private)** URLs.
- **Upload** videos to the bucket from the media picker (streamed through your server — your secret key never reaches the browser).
- **Browse and search** every video in the bucket in one flat list.

## Prerequisites

- An [AWS](https://console.aws.amazon.com/) account with access to **S3** and **IAM**.
- An S3 **bucket** to hold your videos. The bucket name must not contain dots (`.`).
- For **public** delivery: a CloudFront distribution in front of the bucket. Signed delivery needs nothing extra — the bucket always stays private.

<div class="ink-timeline">

## Step 1 — Create a bucket

1. In the AWS console, search for **S3** and open it.

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/search-s3.png" alt="The AWS console search showing S3">
  <figcaption>Search for S3 and open it</figcaption>
</figure>

2. Under **General purpose buckets**, click **Create bucket**.

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/create-bucket-button.png" alt="The S3 Buckets page with the Create bucket button">
  <figcaption>Click Create bucket</figcaption>
</figure>

3. Fill in the form like this:

| Option | Choose | Why |
| --- | --- | --- |
| AWS Region | The region closest to your viewers | Note it — you'll pick the same region in Ink Player. |
| Bucket type | **General purpose** | Directory buckets (S3 Express One Zone) aren't supported. |
| Bucket namespace | **Account Regional namespace (recommended)** | AWS's security best practice: the name is reserved for your account and can never be re-created by another account. Not available in Middle East (Bahrain) and Middle East (UAE) — use Global namespace there. |
| Bucket name prefix | Lowercase letters, numbers, and hyphens | Don't use dots (`.`) — Ink Player can't reach buckets with dots in the name. |
| Object Ownership | **ACLs disabled (recommended)** | Access is controlled by policies only. |
| Block Public Access | Keep **Block all public access** turned on | Ink Player never needs a public bucket. |
| Bucket Versioning | **Disable** (the default) | With versioning on, deleting a file in Ink Player only hides it — AWS keeps the old copy and bills for it. Turn it on only if you want to recover deleted videos. |
| Default encryption | **SSE-S3** (the default) | SSE-KMS needs extra KMS permissions on the access key. |
| Bucket Key | Leave the default | Only affects SSE-KMS; with SSE-S3 it changes nothing. |
| Object Lock | **Disable** (the default, under Advanced settings) | Locked files can't be deleted from Ink Player, and uploads fail because locked buckets require a checksum on every upload. |

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/create-bucket.png" alt="The Create bucket form with General purpose, Account Regional namespace, and the full bucket name">
  <figcaption>Choose General purpose and Account Regional namespace — note the Full bucket name</figcaption>
</figure>

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/block-public-access.png" alt="Object Ownership set to ACLs disabled and Block all public access turned on">
  <figcaption>Keep ACLs disabled and Block all public access turned on</figcaption>
</figure>

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/bucket-encryption.png" alt="Bucket Versioning disabled, SSE-S3 encryption, and the Create bucket button">
  <figcaption>Leave Versioning disabled and SSE-S3 encryption, then click Create bucket</figcaption>
</figure>

4. Copy the bucket's **full name** from the bucket list and note its **AWS Region**. With Account Regional namespace, AWS adds a suffix to the prefix you typed — for example `aws-s3-bucket-015429280729-us-east-1-an` — and Ink Player needs the full name.

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/bucket-region.png" alt="The S3 bucket list showing the full bucket name and its AWS Region">
  <figcaption>Copy the full bucket name and note its region</figcaption>
</figure>

## Step 2 — Create an access policy

The policy lets Ink Player list, read, upload, and delete files in this bucket only.

1. Search for **IAM** and open it.

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/search-iam.png" alt="The AWS console search showing IAM">
  <figcaption>Search for IAM and open it</figcaption>
</figure>

2. In the left menu, click **Policies**, then **Create policy**.

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/iam-policies.png" alt="The IAM Policies page with the Create policy button">
  <figcaption>Open Policies and click Create policy</figcaption>
</figure>

3. Switch to the **JSON** tab, delete what's there, and paste this policy. Replace `your-bucket` (twice) with your full bucket name, then click **Next**:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::your-bucket"
    },
    {
      "Effect": "Allow",
      "Action": ["s3:GetObject", "s3:PutObject", "s3:DeleteObject"],
      "Resource": "arn:aws:s3:::your-bucket/*"
    }
  ]
}
```

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/iam-policy.png" alt="The IAM policy JSON editor with the bucket name filled in">
  <figcaption>Paste the policy with your bucket name in both places, then click Next</figcaption>
</figure>

4. Name the policy `ink-player-s3` and click **Create policy**.

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/policy-name.png" alt="The Policy details screen with the name ink-player-s3 and the Create policy button">
  <figcaption>Name the policy and click Create policy</figcaption>
</figure>

::: warning Don't use AmazonS3FullAccess
AWS's ready-made **AmazonS3FullAccess** policy works, but it lets the key read and delete every bucket in your AWS account. If the key ever leaked, all of them would be exposed. Use the policy above, which only covers the Ink Player bucket.
:::

## Step 3 — Create a user and access key

1. Still in IAM, click **Users** in the left menu, then **Create user**.

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/iam-users.png" alt="The IAM users page with the Create user button">
  <figcaption>Open Users and click Create user</figcaption>
</figure>

2. Enter a user name such as `ink-player` and click **Next**. Leave console access unticked — Ink Player only needs an access key.

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/iam-create-user.png" alt="The Specify user details screen with the user name ink-player">
  <figcaption>Name the user and click Next</figcaption>
</figure>

3. Choose **Attach policies directly**, search for `ink-player-s3`, tick it, and click **Next**.

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/attach-policy.png" alt="The Set permissions screen with Attach policies directly selected and ink-player-s3 ticked">
  <figcaption>Choose Attach policies directly, tick ink-player-s3, and click Next</figcaption>
</figure>

::: tip
Don't click **Create policy** here — the policy already exists from Step 2. If it doesn't appear in the list, click the refresh button next to the search.
:::

4. Check that **ink-player-s3** is listed under **Permissions summary**, then click **Create user**.

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/review-create-user.png" alt="The Review and create screen showing the ink-player user with the ink-player-s3 policy">
  <figcaption>Review the user and click Create user</figcaption>
</figure>

5. In the success banner, click **View user**.

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/user-created.png" alt="The User created successfully banner with the View user button">
  <figcaption>Click View user to open the new user</figcaption>
</figure>

6. On the user's page, open the **Security credentials** tab.

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/user-security-credentials.png" alt="The ink-player user page with the Security credentials tab">
  <figcaption>Open the Security credentials tab</figcaption>
</figure>

7. Under **Access keys**, click **Create access key**.

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/create-access-key-button.png" alt="The Access keys section with the Create access key button">
  <figcaption>Click Create access key</figcaption>
</figure>

8. Choose **Application running outside AWS** and click **Next**.

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/create-access-key.png" alt="The use case list with Application running outside AWS selected">
  <figcaption>Choose Application running outside AWS, then click Next</figcaption>
</figure>

9. The description is optional — you can enter `Ink Player` to recognise the key later. Click **Create access key**.

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/access-key-description.png" alt="The optional description tag screen with the Create access key button">
  <figcaption>Optionally add a description, then click Create access key</figcaption>
</figure>

10. Copy the **Access key** and **Secret access key** (click **Show**, or **Download .csv file**). The secret is shown **only once** — if you lose it, create a new key.

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/access-keys.png" alt="The Retrieve access keys screen showing the Access key and the hidden Secret access key">
  <figcaption>Copy the Access key and Secret access key — the secret is shown only once</figcaption>
</figure>

## Step 4 — Set up public delivery with CloudFront (optional)

Your bucket stays private. **Signed** videos already work without this step — skip it unless you want permanent public links.

For **public** videos, put Amazon CloudFront in front of the bucket. CloudFront serves your videos over its own fast domain, while the bucket stays blocked from the public.

1. Search for **CloudFront**, open it, and click **Create distribution**.
2. **Choose a plan:** the **Free** plan is enough to start. It has monthly usage and transfer limits — for a busy site, pick a paid plan.
3. **Get started:** enter a **Distribution name** such as `ink-player-videos`, keep **Single website configuration**, leave **Domain** empty, and click **Next**.

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/cf-get-started.png" alt="The CloudFront Get started screen with the distribution name ink-player-videos">
  <figcaption>Name the distribution and click Next</figcaption>
</figure>

4. **Specify origin:** choose **Amazon S3** as the origin type.

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/cf-origin-type.png" alt="The Specify origin screen with Amazon S3 selected as the origin type">
  <figcaption>Choose Amazon S3</figcaption>
</figure>

5. Click **Browse S3**, select your bucket, and click **Choose**. Leave **Origin path** empty — Ink Player needs the whole bucket.

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/cf-browse-s3.png" alt="The Select S3 location dialog listing the bucket">
  <figcaption>Browse S3 and choose your bucket</figcaption>
</figure>

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/cf-origin.png" alt="The S3 origin field filled with the bucket address and an empty origin path">
  <figcaption>The S3 origin now shows your bucket — leave Origin path empty</figcaption>
</figure>

6. Keep **Allow private S3 bucket access to CloudFront** ticked — CloudFront updates the bucket policy for you, so only CloudFront can read the bucket. Keep the recommended origin and cache settings, and click **Next**.

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/cf-origin-settings.png" alt="Allow private S3 bucket access to CloudFront ticked, with recommended origin and cache settings">
  <figcaption>Keep private bucket access ticked and the recommended settings</figcaption>
</figure>

7. **Enable security:** leave the firewall (WAF) on — it's included in the plan at no extra charge. Leave **Use monitor mode** unticked and click **Next**.

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/cf-security.png" alt="The Enable security screen with WAF protections included and monitor mode unticked">
  <figcaption>Leave the included protections on and click Next</figcaption>
</figure>

8. **Review and create:** check that **Grant CloudFront access to origin** says **Yes**, then click **Create distribution**.

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/cf-review.png" alt="The Review and create screen showing the bucket origin and Grant CloudFront access to origin Yes">
  <figcaption>Review and click Create distribution</figcaption>
</figure>

9. Wait until **Last modified** changes from **Deploying** to a date (about 5 minutes), then copy the **Distribution domain name**.

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/cf-domain.png" alt="The new distribution's Details with the Distribution domain name">
  <figcaption>Copy the Distribution domain name</figcaption>
</figure>

10. You'll paste it as the **Public URL** in Step 5, with `https://` in front — for example `https://d23fp5fqgfp5ql.cloudfront.net`.

::: danger Don't make the bucket public
Turning off **Block all public access** exposes every file in the bucket to anyone who guesses its address, including videos you meant to keep signed. Use CloudFront for public videos instead.
:::

## Step 5 — Connect Amazon S3 in Ink Player

1. Go to **Settings → [Integrations](/settings/integrations)** and enable **Amazon S3** (under the **Storage** category).
2. Click **Manage** to open its settings.
3. Fill in **Access Key ID**, **Secret Access Key**, and **Bucket name**, and choose your bucket's **Region** from the list (type to search).
4. If you set up CloudFront in Step 4, paste its domain into **Public URL (optional)**, e.g. `https://d23fp5fqgfp5ql.cloudfront.net`. Otherwise leave it empty.
5. Click **Send test** to verify the connection, then **Save changes**.

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/connect.png" alt="The Amazon S3 settings form in Ink Player with credential fields and Send test">
  <figcaption>Fill in your credentials and bucket, choose the region, click Send test, then Save changes</figcaption>
</figure>

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/public-url.png" alt="The Amazon S3 settings with the CloudFront domain in Public URL (optional)">
  <figcaption>With CloudFront: paste the distribution domain into Public URL (optional)</figcaption>
</figure>

## Step 6 — Add Amazon S3 media

1. Add an **Ink Player** block (or open **Add video** in your [Media](/media) library).
2. Under **Choose a source**, click **Amazon S3**.
3. The picker shows every video in the bucket in a flat list. Search or browse, **Upload** a new file, then select a video and click **Select video**. Uploads of any size work — large files are sent in parts.

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/add-media-source.png" alt="The Add video dialog with Amazon S3 as a source option">
  <figcaption>In the Add video dialog, choose Amazon S3 as the source</figcaption>
</figure>

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/media-picker.png" alt="The Amazon S3 media picker with a video list, an Upload button, and the selected video's details">
  <figcaption>The S3 media picker: select a video and click Select video</figcaption>
</figure>

::: tip
Without a **Public URL**, every video is served with a signed link — as in the screenshot above. If you set up CloudFront in Step 4, a **Delivery** (**Public / Signed**) toggle appears next to the search box. It's a choice for the video you insert, not a per-file status — a bucket has no per-file visibility, so switching it re-labels every card.
:::

## Step 7 — The player renders

The selected video is added to your [Media](/media) library and renders as an Ink Player — ready to place in a post, page, or builder, with all the usual player settings, presets, and overlays. Private videos are re-signed with a fresh, short-lived URL on every render.

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/s3-player.png" alt="An Amazon S3 video in the Ink Player media editor with its settings panel">
  <figcaption>The Amazon S3 video in the media editor, with all the usual player settings</figcaption>
</figure>

<figure>
  <img src="/screenshots/settings/integrations/amazon-s3/s3-preview.png" alt="The Amazon S3 video in the player preview with its shortcode">
  <figcaption>Preview the player and copy its shortcode</figcaption>
</figure>

</div>

## Public vs. signed delivery

The same object can be delivered either way — the **Delivery** toggle picks the method for the video you insert:

- **Public** — the video plays from your CloudFront **Public URL**. A plain, permanent, cacheable link. Requires the CloudFront setup in Step 4.
- **Signed** — the video plays from a temporary **presigned URL** that Ink Player mints fresh on every render and that expires after a couple of hours. The file can stay fully private in the bucket; nothing is publicly reachable.

::: warning
**Signed delivery protects the link** — it expires — but doesn't by itself stop a viewer from sharing it while it's still valid. For hard gating, pair **Signed** with the media's **Who can watch → Private/Password** so links are only minted for authorized viewers. See [Access control](/guide/access-control).
:::

## Where are the videos stored?

Always in **your S3 bucket** — nothing is copied to WordPress. A **Public URL** doesn't move your files: CloudFront fetches a video from the bucket the first time someone plays it, then keeps a temporary copy at AWS locations near your viewers so later plays load faster. Delete a file in the picker and it's gone from the bucket; CloudFront's copy expires on its own.

## Settings reference

| Field | Required | Notes |
| --- | --- | --- |
| Access Key ID | Yes | From IAM → Users → Security credentials. The user needs `s3:ListBucket`, `s3:GetObject`, `s3:PutObject`, and `s3:DeleteObject` on the bucket. |
| Secret Access Key | Yes | Paired with the Access Key ID; shown only once in AWS. |
| Region | Yes | The region the bucket was created in, chosen from the list, e.g. **US East (N. Virginia) — us-east-1**. |
| Bucket name | Yes | The full bucket name, including the Account Regional suffix if you used it. Names with dots aren't supported. |
| Public URL | Public delivery only | Your CloudFront domain, e.g. `https://dxxxx.cloudfront.net`, or a custom domain pointed at it. |

## Notes

- Keep the access key limited to this one bucket (the policy in Step 2). Never use your AWS root account's keys.
- The **Region** must match the bucket's region. A wrong region makes S3 answer that the bucket "must be addressed using the specified endpoint".
- Uploads go to the bucket root. Videos organized into folders (key prefixes) in the S3 console still appear in the picker's flat list.
- If S3 reports an access error, re-check the Access Key, Secret, region, bucket name, and that the IAM policy names the right bucket.
