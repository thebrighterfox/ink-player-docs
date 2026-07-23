<template>
    <div class="ig-grid">
        <a v-for="i in integrations" :key="i.link" :href="i.link" class="ig-card">
            <span class="ig-card__logo"><img :src="i.logo" :alt="i.name"/></span>
            <span class="ig-card__body">
                <span class="ig-card__name">{{ i.name }}</span>
                <span class="ig-card__cat">{{ i.cat }}</span>
            </span>
            <span class="ig-card__arrow">→</span>
        </a>
    </div>
</template>

<script setup>
const integrations = [
    {name: 'Bunny.net', cat: 'Storage', logo: '/logos/bunnynet.svg', link: '/settings/integrations/bunny-net'},
    {name: 'Mux', cat: 'Storage', logo: '/logos/mux.png', link: '/settings/integrations/mux'},
    {name: 'Cloudflare Stream', cat: 'Storage', logo: '/logos/cloudflare-stream.svg', link: '/settings/integrations/cloudflare-stream'},
    {name: 'Cloudflare R2', cat: 'Storage', logo: '/logos/cloudflare-r2.svg', link: '/settings/integrations/cloudflare-r2'},
    {name: 'YouTube', cat: 'Video', logo: '/logos/youtube.svg', link: '/settings/integrations/youtube'},
    {name: 'Vimeo', cat: 'Video', logo: '/logos/vimeo.svg', link: '/settings/integrations/vimeo'},
    {name: 'Mailchimp', cat: 'Email', logo: '/logos/mailchimp.png', link: '/settings/integrations/mailchimp'},
    {name: 'MailerLite', cat: 'Email', logo: '/logos/mailerlite.webp', link: '/settings/integrations/mailerlite'},
    {name: 'ActiveCampaign', cat: 'CRM', logo: '/logos/activecampaign.png', link: '/settings/integrations/activecampaign'},
    {name: 'FluentCRM', cat: 'CRM', logo: '/logos/fluentcrm.svg', link: '/settings/integrations/fluentcrm'},
    {name: 'WooCommerce', cat: 'E-commerce', logo: '/logos/woocommerce.svg', link: '/settings/integrations/woocommerce'},
    {name: 'Elementor', cat: 'Builder', logo: '/logos/elementor.gif', link: '/settings/integrations/elementor'},
    {name: 'Beaver Builder', cat: 'Builder', logo: '/logos/beaver.png', link: '/settings/integrations/beaver-builder'},
    {name: 'Google Analytics', cat: 'Analytics', logo: '/logos/google_analytics.svg', link: '/settings/integrations/google-analytics'},
    {name: 'AutomatorWP', cat: 'Automation', logo: '/logos/automatorwp.svg', link: '/settings/integrations/automatorwp'},
]
</script>

<style scoped>
.ig-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 14px;
    margin: 24px 0 8px;
}
.ig-card {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    border: 1px solid var(--vp-c-border);
    border-radius: 8px;
    background: var(--vp-c-bg-soft);
    text-decoration: none !important;
    transition: border-color .15s ease, transform .15s ease, box-shadow .15s ease;
}
.ig-card:hover {
    border-color: var(--vp-c-brand-1);
    transform: translateY(-2px);
    box-shadow: 0 10px 24px -16px rgba(20, 184, 138, 0.5);
}
.ig-card__logo {
    flex: none;
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
    background: var(--vp-c-bg);
    border: 1px solid var(--vp-c-border);
}
.ig-card__logo img { width: 22px; height: 22px; object-fit: contain; }
.ig-card__body { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.ig-card__name { font-size: 15px; font-weight: 600; color: var(--vp-c-text-1); }
.ig-card__cat {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--vp-c-text-3);
}
.ig-card__arrow { flex: none; color: var(--vp-c-brand-1); font-weight: 600; opacity: 0; transition: opacity .15s ease, transform .15s ease; }
.ig-card:hover .ig-card__arrow { opacity: 1; transform: translateX(2px); }
</style>
