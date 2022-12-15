// postcss.config.js

module.exports = {
	plugins: {
		tailwindcss: {
			content: ["./app/**/*.{html,js}", "./components/**/*.{js,ts,jsx,tsx}"],
		},
		autoprefixer: {},
	},
};
