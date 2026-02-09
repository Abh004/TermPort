/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        'terminal-bg': '#131314',
        'terminal-text': '#ACA1CF',
        'terminal-border': '#3E3E43',
        'terminal-prompt': '#90B99F',
        'terminal-command': '#E29ECA',
        'terminal-accent': '#F5A191',
        'terminal-muted': '#9998A8',
      },
    },
  },
  plugins: [],
};
