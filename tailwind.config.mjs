/** @type {import('tailwindcss').Config} */

export default {
	plugins: [
		({ addUtilities, theme }) => {
			const textStyles = theme("textStyles", {});
			addUtilities(
				Object.entries(textStyles).reduce((acc, [name, value]) => {
					acc[`.${name}`] = value.split(" ").reduce((styles, className) => {
						styles[`@apply ${className}`] = {};
						return styles;
					}, {});
					return acc;
				}, {}),
			);
		},
	],
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			teal: "#02777C",
			nightsky: "#24373F",
			forest: "#42603D",
			blueberry: "#517C9F",
			minty: "#ABD1C8",
			cedar: "#C28044",
			stoplight: "#E16F3E",
			bubblegum: "#E6BCBB",
			sunshine: "#EBC34D",
			molar: "#EDECE6",
		},
		extend: {
			fontFamily: {
				averia: ["Averia Serif Libre"],
				andada: ["Andada Pro Variable"],
			},
			textStyles: {
				"heading-1":
					"text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-bold leading-[80%] tracking-tight font-averia",
				"heading-2":
					"text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-averia font-bold tracking-tight",
				body: "text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium",
				"button-text":
					"text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold",
			},
		},
	},
};
