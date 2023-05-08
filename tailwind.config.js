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
                fadeInFromBottom: {
                    "0%": {
                        transform: "translate(0, 10px)",
                        opacity: 0,
                    },

                    "100%": {
                        transform: "translate(0,0)",
                        opacity: 100,
                    },
                },

                popIn: {
                    "0%": {
                        scale: 0,
                        opacity: 0,
                    },

                    "100%": {
                        scale: 1,
                        opacity: 1,
                    },
                },

                fadeIn: {
                    "0%": {
                        opacity: 0,
                    },
                    "100%": {
                        opacity: 1,
                    },
                },
            },

            animation: {
                fadeInFromBottom: "fadeInFromBottom 500ms ease-in-out",
                fadeIn: "fadeIn 500ms ease-in-out",
                popIn: "popIn 500ms ease-in-out",
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
