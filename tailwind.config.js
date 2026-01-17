/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'forest-green': '#0B3D2E',
                'tech-teal': '#00C2CB',
                'neon-sprout': '#39FF14',
                'slate-grey': '#2D3748',
                'clean-white': '#FFFFFF',
            },
            fontFamily: {
                'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
                'inter': ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
