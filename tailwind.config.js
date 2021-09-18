module.exports = {
    mode: "jit",
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class", // 'media' or 'class' or false
    theme: {
        extend: {
            colors: {
                "color-primary": "#007BFD",
                "dark-primary": "#1F2A48",
                "dark-secondary": "#141C2F",
                "light-primary": "#FEFEFE",
                "light-secondary": "#f0f2f5",
            },
            fontFamily: {
                mono: ["Space Mono", "monospace"],
            },
            screens: {
                sm: "580px",
                xs: "420px",
            },
            gridTemplateColumns: {
                "user-grid": "110px auto",
            },
            gridTemplateRows: {
                "user-grid": "60px 60px fit-content",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
