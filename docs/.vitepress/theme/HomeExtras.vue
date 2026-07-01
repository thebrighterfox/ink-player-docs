<template>
    <div class="ink-home">
        <!-- Source / integration logo strip -->
        <section class="ink-strip">
            <div class="ink-strip__head">
                <h2>Plays everything, connects to everything</h2>
                <a class="ink-strip__all" href="/settings/integrations">All integrations →</a>
            </div>
            <div class="ink-strip__logos">
                <a v-for="l in logos" :key="l.src" :href="l.link" class="ink-logo" :title="l.alt">
                    <img :src="l.src" :alt="l.alt"/>
                </a>
            </div>
        </section>

        <section class="ink-workflow" aria-labelledby="workflow-title">
            <div class="ink-workflow__intro">
                <p class="ink-eyebrow">Recommended workflow</p>
                <h2 id="workflow-title">From source to measurable player</h2>
                <p>Add media once, configure the player around it, publish it anywhere, then use analytics and leads to improve the experience.</p>
            </div>
            <div class="ink-steps">
                <a v-for="step in workflow" :key="step.link" class="ink-step" :href="step.link">
                    <span class="ink-step__num">{{ step.num }}</span>
                    <span class="ink-step__body">
                        <span class="ink-step__title">{{ step.title }}</span>
                        <span class="ink-step__desc">{{ step.desc }}</span>
                    </span>
                </a>
            </div>
        </section>

        <!-- Quick links -->
        <section class="ink-cols">
            <div v-for="col in columns" :key="col.title" class="ink-col">
                <h3 class="ink-col__title">{{ col.title }}</h3>
                <a v-for="item in col.items" :key="item.link" :href="item.link" class="ink-link">
                    <span class="ink-link__label">{{ item.label }}</span>
                    <span class="ink-link__desc">{{ item.desc }}</span>
                </a>
            </div>
        </section>

        <!-- Footer trio -->
        <section class="ink-trio">
            <div class="ink-trio__item">
                <h4>One library, anywhere</h4>
                <p>Manage video &amp; audio once — then place it with a block, a shortcode, or your page builder. Edit the media item and every placement updates.</p>
            </div>
            <div class="ink-trio__item">
                <h4>Need help?</h4>
                <p>Stuck on something or found a bug? <a href="https://support.brighterfox.com" target="_blank" rel="noreferrer">Open a support ticket</a> and we'll take a look.</p>
            </div>
            <div class="ink-trio__item">
                <h4>What's new</h4>
                <p>See what changed in <a href="/changelog">the changelog</a>, or start with the <a href="/guide/getting-started">quick start guide</a>.</p>
            </div>
        </section>
    </div>
</template>

<script setup>
const logos = [
    {src: '/logos/youtube.svg', alt: 'YouTube', link: '/settings/integrations/youtube'},
    {src: '/logos/vimeo.svg', alt: 'Vimeo', link: '/settings/integrations/vimeo'},
    {src: '/logos/bunnynet.svg', alt: 'Bunny.net', link: '/settings/integrations/bunny-net'},
    {src: '/logos/mux.png', alt: 'Mux', link: '/settings/integrations/mux'},
    {src: '/logos/mailchimp.png', alt: 'Mailchimp', link: '/settings/integrations/mailchimp'},
    {src: '/logos/mailerlite.webp', alt: 'MailerLite', link: '/settings/integrations/mailerlite'},
    {src: '/logos/activecampaign.png', alt: 'ActiveCampaign', link: '/settings/integrations/activecampaign'},
    {src: '/logos/fluentcrm.svg', alt: 'FluentCRM', link: '/settings/integrations/fluentcrm'},
    {src: '/logos/woocommerce.svg', alt: 'WooCommerce', link: '/settings/integrations/woocommerce'},
    {src: '/logos/elementor.gif', alt: 'Elementor', link: '/settings/integrations/elementor'},
    {src: '/logos/beaver.png', alt: 'Beaver Builder', link: '/settings/integrations/beaver-builder'},
    {src: '/logos/google_analytics.svg', alt: 'Google Analytics', link: '/settings/integrations/google-analytics'},
]

const columns = [
    {
        title: 'Start here',
        items: [
            {label: 'Dashboard', desc: 'Understand the admin home', link: '/dashboard'},
            {label: 'Getting Started', desc: 'Add your first video in minutes', link: '/guide/getting-started'},
            {label: 'Blocks', desc: 'The four Gutenberg blocks', link: '/guide/blocks'},
            {label: 'Shortcodes', desc: '[ink_player] and [ink_playlist]', link: '/guide/shortcodes'},
            {label: 'Multi-Language', desc: 'Alternate spoken-language sources', link: '/media/multi-language'},
        ],
    },
    {
        title: 'Library & insights',
        items: [
            {label: 'Media', desc: 'Your reusable video & audio', link: '/media'},
            {label: 'Playlists', desc: 'Group media into a player', link: '/playlists'},
            {label: 'Analytics', desc: 'Views, retention, devices', link: '/analytics'},
            {label: 'Leads', desc: 'Email-gate and capture', link: '/leads'},
        ],
    },
    {
        title: 'Configure & connect',
        items: [
            {label: 'Branding', desc: 'Logo watermark & brand color', link: '/settings/branding'},
            {label: 'Presets', desc: 'Default player looks', link: '/settings/presets'},
            {label: 'Bunny.net & Mux', desc: 'Host and stream your videos', link: '/settings/integrations/bunny-net'},
            {label: 'Email & CRM', desc: 'Send leads where you work', link: '/settings/integrations'},
        ],
    },
]

const workflow = [
    {num: '01', title: 'Add media', desc: 'Upload, paste a URL, or pick from Bunny.net or Mux.', link: '/media'},
    {num: '02', title: 'Configure playback', desc: 'Set the skin, controls, access rules, overlays, and ads.', link: '/guide/overlays'},
    {num: '03', title: 'Publish anywhere', desc: 'Use blocks, shortcodes, share pages, embeds, or page builders.', link: '/guide/blocks'},
    {num: '04', title: 'Measure and follow up', desc: 'Review analytics and send captured leads to your tools.', link: '/analytics'},
]
</script>

<style scoped>
.ink-home {
    max-width: 1152px;
    margin: 0 auto;
    padding: 8px 24px 64px;
}

/* Strip */
.ink-strip {
    margin-top: 8px;
    padding: 28px;
    border: 1px solid var(--vp-c-border);
    border-radius: 8px;
    background: var(--vp-c-bg-soft);
}
.ink-strip__head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 22px;
}
.ink-strip__head h2 {
    margin: 0;
    font-size: 19px;
    font-weight: 700;
    letter-spacing: 0;
    border: 0;
    padding: 0;
}
.ink-strip__all {
    flex: none;
    font-size: 14px;
    font-weight: 600;
    color: var(--vp-c-brand-1);
}
.ink-strip__logos {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    gap: 12px;
}
.ink-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    border-radius: 8px;
    background: var(--vp-c-bg);
    border: 1px solid var(--vp-c-border);
    text-decoration: none !important;
    transition: transform .15s ease, border-color .15s ease;
}
.ink-logo:hover { transform: translateY(-2px); border-color: var(--vp-c-brand-1); }
.ink-logo img { width: 26px; height: 26px; object-fit: contain; }

/* Workflow */
.ink-workflow {
    display: grid;
    grid-template-columns: minmax(0, .85fr) minmax(0, 1.35fr);
    gap: 32px;
    align-items: start;
    margin-top: 32px;
    padding: 32px;
    border: 1px solid var(--vp-c-border);
    border-radius: 8px;
    background: linear-gradient(180deg, var(--vp-c-bg), var(--vp-c-bg-soft));
}
.ink-eyebrow {
    margin: 0 0 8px;
    color: var(--vp-c-brand-1);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: .08em;
    text-transform: uppercase;
}
.ink-workflow__intro h2 {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 26px;
    line-height: 1.2;
}
.ink-workflow__intro p:last-child {
    margin: 12px 0 0;
    color: var(--vp-c-text-2);
    line-height: 1.65;
}
.ink-steps {
    display: grid;
    gap: 10px;
}
.ink-step {
    display: flex;
    gap: 14px;
    padding: 14px;
    border: 1px solid var(--vp-c-divider);
    border-radius: 8px;
    background: var(--vp-c-bg);
    text-decoration: none !important;
    transition: border-color .15s ease, transform .15s ease, box-shadow .15s ease;
}
.ink-step:hover {
    border-color: var(--vp-c-brand-1);
    transform: translateY(-1px);
    box-shadow: 0 10px 24px -18px rgba(20, 184, 138, .55);
}
.ink-step__num {
    flex: none;
    color: var(--vp-c-brand-1);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: .06em;
}
.ink-step__body {
    display: flex;
    flex-direction: column;
    min-width: 0;
}
.ink-step__title {
    color: var(--vp-c-text-1);
    font-size: 15px;
    font-weight: 700;
}
.ink-step__desc {
    margin-top: 2px;
    color: var(--vp-c-text-3);
    font-size: 13.5px;
    line-height: 1.5;
}

/* Columns */
.ink-cols {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-top: 56px;
}
.ink-col__title {
    margin: 0 0 8px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--vp-c-text-3);
}
.ink-link {
    display: block;
    padding: 14px 0;
    border-bottom: 1px solid var(--vp-c-divider);
    transition: padding-left .15s ease;
}
.ink-link:hover { padding-left: 6px; }
.ink-link__label {
    display: block;
    font-size: 15px;
    font-weight: 600;
    color: var(--vp-c-text-1);
}
.ink-link:hover .ink-link__label { color: var(--vp-c-brand-1); }
.ink-link__desc {
    display: block;
    margin-top: 2px;
    font-size: 13.5px;
    color: var(--vp-c-text-3);
}

/* Trio */
.ink-trio {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    margin-top: 56px;
    padding-top: 40px;
    border-top: 1px solid var(--vp-c-divider);
}
.ink-trio__item h4 {
    margin: 0 0 8px;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--vp-c-text-1);
}
.ink-trio__item p {
    margin: 0;
    font-size: 14px;
    line-height: 1.65;
    color: var(--vp-c-text-2);
}
.ink-trio__item a { color: var(--vp-c-brand-1); font-weight: 500; }

@media (max-width: 768px) {
    .ink-workflow { grid-template-columns: 1fr; padding: 24px; }
    .ink-cols, .ink-trio { grid-template-columns: 1fr; gap: 28px; }
    .ink-trio { margin-top: 40px; }
}
</style>
