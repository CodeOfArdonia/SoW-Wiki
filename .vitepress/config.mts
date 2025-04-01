import { defineConfig } from 'vitepress'
import AutoNav from "vite-plugin-vitepress-auto-nav";
import { enNav, zhNav } from './navbar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [
      AutoNav({
        useArticleTitle: true,
        itemsSetting: {
          'en/idea': {
            title: 'Idea'
          },
          'zh/idea': {
            title: '构思'
          },
          'en/idea/species': {
            title: 'Species'
          },
          'zh/idea/species': {
            title: '物种'
          },
        },
      }),
    ],
  },
  head: [['link', { rel: 'icon', href: '/favicon.webp' }]],
  title: "Songs of War Wiki",
  description: "Songs of War Wiki",
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    socialLinks: [
      { icon: 'github', link: 'https://github.com/CodeOfArdonia/SoW-Wiki' }
    ],
    nav: enNav,
  },
  locales: {
    en: {
      label: 'English',
      lang: 'en',
      link: '/en',
    },
    zh: {
      label: '中文',
      lang: 'zh',
      link: '/zh',
      title: "战争之歌百科",
      description: "Songs of War Wiki",
      themeConfig: {
        nav: zhNav,
      }
    }
  },
})
