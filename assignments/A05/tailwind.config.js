/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                green: '#B4F461',
                primary: '#111111',
                secondary: 'rgba(17,17,17,0.7)',
                nav: '#F9F7F3',
            },
            fontFamily: {
                lexend: 'Lexend',
            },
        },
    },
    plugins: [],
}