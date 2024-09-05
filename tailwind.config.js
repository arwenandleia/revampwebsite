/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					text: "#040217",
					background: "#D5CABA",
				},
				secondary: {
					DEFAULT: "#A77325",
					light: "#D88D1E",
					dark: "#7E5820",
				},
				tertiary: {
					light: "#59907E",
					dark: "#00271A",
				},
			},
			animation: {
				"infinite-scroll": "infinite-scroll 6s steps(3,end) 1s infinite ",
			},
			keyframes: {
				"infinite-scroll": {
					from: { transform: "translateY(0%)" },
					to: { transform: "translateY(-100%)" },
				},
			},
		},
	},
	plugins: [],
};
