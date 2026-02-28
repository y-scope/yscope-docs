/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                "DEFAULT": "1rem",
                "xl": "2rem",
                "2xl": "4rem",
            },
            screens: {
                "sm": "540px",
                "md": "720px",
                "lg": "960px",
                "xl": "1140px",
                "2xl": "1420px",
            },
        },
        extend: {
        },
    },
    plugins: [],
};
