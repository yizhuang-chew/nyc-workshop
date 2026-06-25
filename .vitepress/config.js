import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'PSD Agentforce Workshop',
  description: 'Hands-on workshop: Prompt Builder & Agent Builder for the PSD Case Assistant',

  // Deploying to GitHub Pages at https://<user>.github.io/nyc-workshop/
  base: '/nyc-workshop/',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start the Workshop', link: '/setup' },
    ],

    // Left sidebar — gives the module > exercise tree AND the
    // automatic prev/next pager at the bottom of every page.
    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Exercise 0: Pre-Setup Checklist', link: '/setup' },
        ],
      },
      {
        text: 'Exercise 1: Prompt Builder',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/prompt-builder/overview' },
          { text: '1A: Create an Email Prompt', link: '/prompt-builder/email-prompt' },
          { text: '1B: Field Generation Prompt', link: '/prompt-builder/field-generation' },
        ],
      },
      {
        text: 'Exercise 2: Agent Builder',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/agent-builder/overview' },
          { text: '2A: New Agent with Default Topics', link: '/agent-builder/default-topics' },
          { text: '2B: Enhance with Topics & Actions', link: '/agent-builder/topics-and-actions' },
        ],
      },
      {
        text: 'Resources',
        collapsed: false,
        items: [
          { text: 'Want to learn more?', link: '/resources' },
        ],
      },
    ],
  },
})
