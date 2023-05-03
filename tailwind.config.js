/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                primary: ["Rubik", "sans-serif"],
            },

            backgroundImage: {
                primary: "url('./assets/explosion.jpg')",
            },
        },
    },
    plugins: [],
};
