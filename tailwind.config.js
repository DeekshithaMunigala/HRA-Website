/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        colors: {
            'custom-green': '#67c656',
            'custom-blue': '#03a3d7',
            'custom-pink': '#F596D3',
            ...colors
        },
        container: {
            center: true,
            padding: "1.5rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
                type: {
                    '0%': { width: '0ch' },
                    '5%, 10%': { width: '1ch' },
                    '15%, 20%': { width: '2ch' },
                    '25%, 30%': { width: '3ch' },
                    '35%, 40%': { width: '4ch' },
                    '45%, 50%': { width: '5ch' },
                    '55%, 60%': { width: '6ch' },
                    '65%, 70%': { width: '7ch' },
                    '75%, 80%': { width: '8ch' },
                    '85%, 90%': { width: '9ch' },
                    '95%': { width: '10ch' },
                  },

            },
           
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                 "accordion-up": "accordion-up 0.2s ease-out",
                cursor: 'cursor .6s linear infinite alternate',
                type: 'type 1.8s ease-out .8s 1 normal both',
                'type-reverse': 'type 1.8s ease-out 0s infinite alternate-reverse both',
              },
             
        
        },
        extend: {
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    }
    },
    plugins: [require("tailwindcss-animate")],
};
