import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import HomeExtras from './HomeExtras.vue'
import IntegrationGrid from './IntegrationGrid.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // Render the custom source strip + quick links below the hero/features.
      'home-features-after': () => h(HomeExtras),
    })
  },
  enhanceApp({ app }) {
    // Usable inside any Markdown page.
    app.component('IntegrationGrid', IntegrationGrid)
  },
}
