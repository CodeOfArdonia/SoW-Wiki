import { defineConfig } from 'vitepress'
import AutoNav from "vite-plugin-vitepress-auto-nav";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [
      AutoNav({
        useArticleTitle: true
      }),
    ],
  },
  title: "Songs of War Wiki",
  description: "Songs of War Wiki",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  locales: {
    en: {
      label: 'English',
      lang: 'en',
      link: '/en'
    },
    zh: {
      label: '中文',
      lang: 'zh',
      link: '/zh'
    }
  },
})
