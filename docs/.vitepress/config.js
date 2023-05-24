import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Ethical AI",
  base: "/capstone/",
  description: "AI Ethics Capstone project",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Content',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Essential Question', link: '/essential' },
          { text: 'Conclusion', link: '/conclusion' },
          { text: 'Sources', link: '/sources' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/qwertydelle/capstone' }
    ]
  }
})
