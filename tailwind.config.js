/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: "#050505",
                "neon-green": "#00ff9f",
                "cyber-blue": "#00d9ff",
            },
            fontFamily: {
                mono: ['"JetBrains Mono"', 'monospace'],
                fira: ['"Fira Code"', 'monospace'],
            },
            animation: {
                'blink': 'blink 1s step-end infinite',
                'marquee': 'marquee 25s linear infinite',
            },
            keyframes: {
                blink: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0' },
                },
                marquee: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(-100%)' },
                }
            }
        },
    },
    plugins: [],
}
