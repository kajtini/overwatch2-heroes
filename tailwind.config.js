/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                primary: ["Rubik", "sans-serif"],
            },

            backgroundImage: {
                primary: "url('./assets/mountain.jpg')",
            },

            keyframes: {
                fadeIn: {
                    "0%": {
                        transform: "translate(0, 10px)",
                        opacity: 0,
                    },

                    "100%": {
                        transform: "translate(0,0)",
                        opacity: 100,
                    },
                },
            },

            animation: {
                fadeIn: "fadeIn 500ms ease-in-out",
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
