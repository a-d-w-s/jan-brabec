/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {},
        container: {
            screens: {
                desktop: "1408px",
            },
        },
        fontSize: {
            sm: ['0.813rem'],
            base: ['0.875rem'],
            md: ['1rem'],
            lg: ['1.25rem'],
            h1: ['clamp(2rem, 4vw, 3.25rem)', 'normal'],
            h2: ['clamp(1.25rem, 5vw, 1.75rem)', 'normal'],
            h3: ['clamp(1rem, 5vw, 1.5rem)', 'normal'],
        },
        textColor: {
            'body': '#333',
            'white': '#fff',
            'gray': '#B2B2B2',
            'gray-dark': '#666',
            'green': '#1DCA62',
            'red': '#ff0000',
            'violet': '#9D5A9E',
            'gold': '#DCB300',
        }
    },
    plugins: [],
}
