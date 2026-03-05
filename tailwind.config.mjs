/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        forge: {
          black:  '#080808',
          white:  '#f0ede6',
          cream:  '#c8c3b8',
          accent: '#e8d5a3',
          orange: '#c4601a',
          dim:    '#111110',
          dim2:   '#1a1a18',
        },
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      fontSize: {
        '10': '10px',
        '11': '11px',
      },
      letterSpacing: {
        wider2: '0.14em',
        wider3: '0.2em',
        wider4: '0.24em',
      },
      borderColor: {
        subtle: 'rgba(240,237,230,0.08)',
      },
      animation: {
        'rot-hex': 'rotHex 12s linear infinite',
        ticker:    'ticker 28s linear infinite',
        pulse2:    'pulse2 2s infinite',
        fadeUp:    'fadeUp 0.9s ease forwards',
      },
      keyframes: {
        rotHex:  { to: { transform: 'rotate(360deg)' } },
        ticker:  { to: { transform: 'translateX(-50%)' } },
        pulse2:  {
          '0%,100%': { opacity: '1', transform: 'scale(1)' },
          '50%':     { opacity: '0.5', transform: 'scale(0.8)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'grid-subtle':
          'linear-gradient(rgba(240,237,230,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(240,237,230,0.022) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '80px 80px',
      },
      clipPath: {
        hex: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      },
    },
  },
  plugins: [],
};
