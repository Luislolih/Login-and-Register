/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                spotifyGreen: "#1db954",
                textColor: "#D1D5DB",
                purpleColor: "#3b599b",
            },
        },
    },
    plugins: [],
};
