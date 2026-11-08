/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Figma Primary Colors
        primary: {
          DEFAULT: '#1967d2',
          hover: '#1557b0',
          light: '#eaf2ff',
        },
        // Google Brand Palette (from Figma tokens)
        google: {
          blue: '#1967d2',
          'blue-alt': '#4285F4',
          'blue-tint': '#eaf2ff',
          red: '#ea4335',
          'red-tint': '#fdedea',
          yellow: '#f9ab00',
          'yellow-alt': '#FBBC05',
          'yellow-tint': '#fff7df',
          green: '#34a853',
          'green-tint': '#eaf5ed',
        },
        // Figma Neutral scale
        neutral: {
          50: '#ffffff',
          100: '#f8f9fa',
          200: '#f1f3f4',
          300: '#dadce0',
          400: '#bdc1c6',
          500: '#9aa0a6',
          600: '#757575',
          700: '#5f6368',
          800: '#3c4043',
          900: '#242424',
          950: '#1c1b1f',
        },
        // Surface semantic tokens mapped from Figma Frame layout
        surface: {
          bg: '#ffffff',
          bgAlt: '#f8f9fa',
          card: '#ffffff',
          cardHover: '#f8f9fa',
          border: '#dadce0',
          borderLight: '#f1f3f4',
          muted: '#5f6368',
          subtle: '#757575',
          heading: '#242424',
          body: '#3c4043',
        },
      },
      fontFamily: {
        google: ['Google Sans', 'Inter', '-apple-system', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '8px',
        md: '10px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '32px',
        full: '9999px',
      },
      fontSize: {
        '2xs': ['11px', { lineHeight: '14px' }],
        xs: ['12px', { lineHeight: '16px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '26px' }],
        xl: ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '30px' }],
        '3xl': ['28px', { lineHeight: '32px' }],
        '4xl': ['36px', { lineHeight: '42px' }],
        '5xl': ['48px', { lineHeight: '54px' }],
        '6xl': ['72px', { lineHeight: '78px' }],
        '7xl': ['80px', { lineHeight: '88px' }],
      },
      boxShadow: {
        subtle: '0 1px 2px 0 rgba(60, 64, 67, 0.1), 0 1px 3px 1px rgba(60, 64, 67, 0.05)',
        card: '0 1px 3px 0 rgba(60, 64, 67, 0.12), 0 4px 8px 3px rgba(60, 64, 67, 0.06)',
        hover: '0 2px 6px 0 rgba(60, 64, 67, 0.15), 0 8px 16px 4px rgba(60, 64, 67, 0.08)',
        modal: '0 8px 24px 0 rgba(60, 64, 67, 0.2), 0 16px 48px 8px rgba(60, 64, 67, 0.12)',
      },
    },
  },
  plugins: [],
};
