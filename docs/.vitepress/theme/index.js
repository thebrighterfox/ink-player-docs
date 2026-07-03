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
    if (typeof window !== 'undefined') setupLightbox()
  },
}

// Click any figure image to open it in a simple full-screen lightbox.
// One delegated listener survives SPA navigation; the overlay is built lazily.
function setupLightbox() {
  if (typeof document === 'undefined' || window.__inkLightbox) return
  window.__inkLightbox = true

  let box
  const ensure = () => {
    if (box) return box
    box = document.createElement('div')
    box.className = 'ink-lightbox'
    box.innerHTML = '<img alt="">'
    box.addEventListener('click', () => box.classList.remove('open'))
    document.body.appendChild(box)
    return box
  }

  document.addEventListener('click', (e) => {
    const img = e.target.closest('.vp-doc figure img')
    if (!img) return
    const lb = ensure()
    lb.firstChild.src = img.currentSrc || img.src
    lb.classList.add('open')
  })
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && box) box.classList.remove('open')
  })
}
