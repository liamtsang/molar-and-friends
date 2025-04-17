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
			white: "#FFFFFF",
			black: "#000000",
		},
		extend: {
			fontFamily: {
				averia: ["Averia Serif Libre"],
				andada: ["Andada Pro Variable"],
				open: ["Open Sans Variable"],
				instrument: ["Instrument Sans Variable"],
				stonehill: ["Stonehill Regular"],
				quirky: ["Quirky Spring"],
			},
			textStyles: {
				"heading-1":
					"font-stonehill text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-9xl font-bold leading-[100%] md:leading-[80%] tracking-normal",
				"heading-2":
					"font-averia text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-bold tracking-tighter",
				body: "text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-xl leading-6 sm:leading-6 md:leading-7 lg:leading-8 xl:leading-9",
				"button-text":
					"text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold",
			},
		},
	},
};
