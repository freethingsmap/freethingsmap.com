/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'body': ['Inter', 'SF Mono', 'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
            'fancy': ['Inter', 'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
            'mono': ['Figtree', 'Maison Neue', 'Inconsolata', 'Courier New', 'monospace']
        },
        extend: {
            colors: {
                divider: "#b5b5b5",
                calloutBorder: "#acafb0",
                yellow: {
                    50: "#fcffd5",
                    100: '#FFF7A1',
                },
                clouds: {
                    100: '#d2e8ff',
                }
            }
        },
    },
    plugins: [
        require('@headlessui/tailwindcss'),
        require('@tailwindcss/line-clamp')
    ],
}