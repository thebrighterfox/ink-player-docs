import { defineConfig } from 'vitepress'
import llmstxt from 'vitepress-plugin-llms'

const SITE = 'https://docs.inkplayer.com'

export default defineConfig({
  lang: 'en-US',
  title: 'Ink Player',
  description: 'Complete documentation for Ink Player — the video & audio player plugin for WordPress.',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: { hostname: SITE },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#29E3B2' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Ink Player Docs' }],
    ['meta', { property: 'og:image', content: `${SITE}/og-image.png` }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: `${SITE}/og-image.png` }],
  ],
  vite: {
    plugins: [llmstxt()],
  },
  // Per-page SEO: unique canonical + Open Graph/Twitter titles & descriptions,
  // plus JSON-LD (TechArticle + breadcrumbs; SoftwareApplication on the home page).
  transformPageData(pageData) {
    const clean = pageData.relativePath.replace(/\.md$/, '').replace(/(^|\/)index$/, '$1')
    const url = clean === '' ? `${SITE}/` : `${SITE}/${clean}`
    const title = pageData.frontmatter.title || pageData.title || 'Ink Player Documentation'
    const fullTitle = clean === '' ? 'Ink Player Documentation' : `${title} | Ink Player Docs`
    const description = pageData.frontmatter.description
      || pageData.description
      || 'Documentation for Ink Player — the video & audio player plugin for WordPress.'

    const head = (pageData.frontmatter.head ??= [])
    head.push(
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:title', content: fullTitle }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { name: 'twitter:title', content: fullTitle }],
      ['meta', { name: 'twitter:description', content: description }],
    )

    const article = {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: title,
      description,
      url,
      image: `${SITE}/og-image.png`,
      inLanguage: 'en-US',
      author: { '@type': 'Organization', name: 'Ink Player', url: 'https://inkplayer.com' },
      publisher: {
        '@type': 'Organization',
        name: 'Ink Player',
        logo: { '@type': 'ImageObject', url: `${SITE}/logo-light.svg` },
      },
    }
    if (pageData.lastUpdated) article.dateModified = new Date(pageData.lastUpdated).toISOString()
    head.push(['script', { type: 'application/ld+json' }, JSON.stringify(article)])

    if (clean === '') {
      head.push(['script', { type: 'application/ld+json' }, JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Ink Player',
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'WordPress',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        description,
        url: 'https://inkplayer.com',
      })])
    } else {
      const parts = clean.split('/')
      head.push(['script', { type: 'application/ld+json' }, JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Docs', item: `${SITE}/` },
          ...parts.map((seg, i) => ({
            '@type': 'ListItem',
            position: i + 2,
            name: seg.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
            item: `${SITE}/${parts.slice(0, i + 1).join('/')}`,
          })),
        ],
      })])
    }
  },
  themeConfig: {
    logo: { light: '/logo-light.svg', dark: '/logo-dark.svg' },
    siteTitle: 'Ink Player',
    nav: [
      { text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' },
      {
        text: 'Dashboard',
        activeMatch: '/(dashboard|media|playlists|analytics|leads|settings)',
        items: [
          { text: 'Overview', link: '/dashboard' },
          {
            text: 'Library',
            items: [
              { text: 'Media', link: '/media' },
              { text: 'Playlists', link: '/playlists' },
            ],
          },
          {
            text: 'Insights',
            items: [
              { text: 'Analytics', link: '/analytics' },
              { text: 'Leads', link: '/leads' },
            ],
          },
          {
            text: 'Configure',
            items: [
              { text: 'Settings', link: '/settings' },
              { text: 'Integrations', link: '/settings/integrations' },
            ],
          },
        ],
      },
      { text: 'Changelog', link: '/changelog' },
      { text: 'Website', link: 'https://inkplayer.com' },
    ],
    sidebar: {
      '/dashboard': [
        { text: 'Overview', items: [
          { text: 'Dashboard', link: '/dashboard' },
        ]},
        { text: 'Library', items: [
          { text: 'Media', link: '/media' },
          { text: 'Playlists', link: '/playlists' },
        ]},
        { text: 'Insights', items: [
          { text: 'Analytics', link: '/analytics' },
          { text: 'Leads', link: '/leads' },
        ]},
        { text: 'Configure', items: [
          { text: 'Settings', link: '/settings' },
          { text: 'Integrations', link: '/settings/integrations' },
        ]},
      ],
      '/guide/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'What is Ink Player?', link: '/guide/what-is-ink-player' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Quick Start', link: '/guide/getting-started' },
          ],
        },
        {
          text: 'Core Concepts',
          items: [
            { text: 'Blocks', link: '/guide/blocks' },
            { text: 'Shortcodes', link: '/guide/shortcodes' },
            { text: 'Video & Audio Sources', link: '/guide/providers' },
            { text: 'Overlays', link: '/guide/overlays' },
            { text: 'Access Control', link: '/guide/access-control' },
            { text: 'Page Builders', link: '/guide/page-builders' },
          ],
        },
      ],
      '/media': [
        {
          text: 'Media',
          items: [
            { text: 'Overview', link: '/media' },
            {
              text: 'Media Editor',
              collapsed: false,
              items: [
                { text: 'Basic Settings', link: '/media/video-inspector#basic-settings' },
                { text: 'Appearance', link: '/media/video-inspector#appearance' },
                {
                  text: 'Overlays',
                  collapsed: true,
                  items: [
                    { text: 'Overlay Controls', link: '/media/video-inspector#overlays' },
                    { text: 'Overlay Visibility', link: '/media/video-inspector#overlay-visibility' },
                    { text: 'Overlay Types', link: '/media/video-inspector#overlay-types' },
                    { text: 'Overlay Guide', link: '/guide/overlays' },
                  ],
                },
                { text: 'Ads', link: '/media/video-inspector#ads' },
                { text: 'Presets', link: '/media/video-inspector#presets' },
                { text: 'Chapters', link: '/media/video-inspector#chapters' },
                { text: 'Captions', link: '/media/video-inspector#captions' },
                { text: 'Multi-Language', link: '/media/multi-language' },
                { text: 'Global Branding', link: '/media/video-inspector#global-branding' },
                { text: 'Timestamp', link: '/media/video-inspector#timestamp' },
                { text: 'Who can watch', link: '/media/video-inspector#who-can-watch' },
              ],
            },
            {
              text: 'Media Workflows',
              collapsed: true,
              items: [
                { text: 'Sources', link: '/guide/providers' },
                { text: 'Access Control', link: '/guide/access-control' },
                { text: 'Presets', link: '/settings/presets' },
              ],
            },
          ],
        },
        {
          text: 'Related',
          items: [
            { text: 'Playlists', link: '/playlists' },
            { text: 'Analytics', link: '/analytics' },
            { text: 'Leads', link: '/leads' },
          ],
        },
      ],
      '/playlists': [
        {
          text: 'Playlists',
          items: [
            { text: 'Overview', link: '/playlists' },
            {
              text: 'Playlist Editor',
              collapsed: false,
              items: [
                { text: 'Create a Playlist', link: '/playlists/editor#create-a-playlist' },
                { text: 'Playlist Identity', link: '/playlists/editor#playlist-identity' },
                { text: 'Add Media Items', link: '/playlists/editor#add-items-from-the-media-library' },
                { text: 'Import External Playlists', link: '/playlists/editor#import-external-playlists' },
                { text: 'Reorder Items', link: '/playlists/editor#reorder-items' },
                { text: 'Configure Player', link: '/playlists/editor#configure-the-player' },
                { text: 'Publish Playlist', link: '/playlists/editor#publish-a-playlist' },
              ],
            },
            {
              text: 'Playlist Layouts',
              collapsed: true,
              items: [
                { text: 'Video Layouts', link: '/playlists/layouts#video-playlist-layouts' },
                { text: 'Audio Layouts', link: '/playlists/layouts#audio-playlist-layouts' },
                { text: 'Layout Checklist', link: '/playlists/layouts#layout-checklist' },
              ],
            },
            {
              text: 'Publishing',
              collapsed: true,
              items: [
                { text: 'Shortcodes', link: '/guide/shortcodes' },
                { text: 'Blocks', link: '/guide/blocks' },
                { text: 'Page Builders', link: '/guide/page-builders' },
              ],
            },
          ],
        },
        {
          text: 'Related',
          items: [
            { text: 'Media', link: '/media' },
            { text: 'Analytics', link: '/analytics' },
            { text: 'Leads', link: '/leads' },
          ],
        },
      ],
      '/analytics': [
        { text: 'Overview', items: [
          { text: 'Dashboard', link: '/dashboard' },
        ]},
        { text: 'Insights', items: [
          { text: 'Analytics', link: '/analytics' },
          { text: 'Leads', link: '/leads' },
        ]},
        { text: 'Library', items: [
          { text: 'Media', link: '/media' },
          { text: 'Playlists', link: '/playlists' },
        ]},
      ],
      '/leads': [
        { text: 'Overview', items: [
          { text: 'Dashboard', link: '/dashboard' },
        ]},
        { text: 'Insights', items: [
          { text: 'Analytics', link: '/analytics' },
          { text: 'Leads', link: '/leads' },
        ]},
      ],
      '/settings': [
        {
          text: 'Overview',
          items: [
            { text: 'Dashboard', link: '/dashboard' },
          ],
        },
        {
          text: 'Settings',
          items: [
            { text: 'Overview', link: '/settings' },
            { text: 'Branding', link: '/settings/branding' },
            { text: 'Analytics', link: '/settings/analytics' },
            { text: 'Presets', link: '/settings/presets' },
            { text: 'Sharing', link: '/settings/sharing' },
            { text: 'Ads', link: '/settings/ads' },
            { text: 'Advanced', link: '/settings/advanced' },
            { text: 'Webhooks', link: '/settings/webhooks' },
          ],
        },
        {
          text: 'Integrations',
          items: [
            { text: 'Overview', link: '/settings/integrations' },
            { text: 'Bunny.net', link: '/settings/integrations/bunny-net' },
            { text: 'Mux', link: '/settings/integrations/mux' },
            { text: 'YouTube', link: '/settings/integrations/youtube' },
            { text: 'Vimeo', link: '/settings/integrations/vimeo' },
            { text: 'Mailchimp', link: '/settings/integrations/mailchimp' },
            { text: 'MailerLite', link: '/settings/integrations/mailerlite' },
            { text: 'ActiveCampaign', link: '/settings/integrations/activecampaign' },
            { text: 'FluentCRM', link: '/settings/integrations/fluentcrm' },
            { text: 'WooCommerce', link: '/settings/integrations/woocommerce' },
            { text: 'Elementor', link: '/settings/integrations/elementor' },
            { text: 'Beaver Builder', link: '/settings/integrations/beaver-builder' },
            { text: 'Google Analytics', link: '/settings/integrations/google-analytics' },
            { text: 'AutomatorWP', link: '/settings/integrations/automatorwp' },
          ],
        },
      ],
    },
    footer: {
      message: 'Built for WordPress.',
      copyright: 'Copyright © 2026 Ink Player',
    },
    search: { provider: 'local' },
    outline: { level: [2, 3] },
  },
})
