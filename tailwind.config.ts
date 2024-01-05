import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      screens: {
        xs: { min: '480px' },
        tablet: { max: '999px' },
        '2xl': '1400px',
      },
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        main: 'var(--main)',
        textGray: 'var(--textGray)',
        background: 'var(--background)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
      },
    },
  },
  plugins: [],
};
export default config;
