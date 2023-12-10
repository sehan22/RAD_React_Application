/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js.jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Oswald', 'sans-serif']
            },
            colors: {
                primary: "#FFFFFF",
                secondary: "#000000",
            }
        },
    },
    plugins: [],
}

