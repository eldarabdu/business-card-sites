import { createTheme } from "@mantine/core"

const theme = createTheme({
	fontFamily: "Rubik",
	defaultRadius: "md",
	breakpoints: {
		xs: "30em",
		sm: "48em",
		md: "64em",
		lg: "74em",
		xl: "90em",
	},
	radius: {
		md: "12px",
		lg: "24px",
		xl: "50%",
	},
	colors: {
		blue: [
			"#236EF5",
			"#1D64D2",
			"#1859B0",
			"#134E94",
			"#0E4378",
			"#0A3862",
			"#072D4C",
			"#052236",
			"#031720",
			"#010C0E",
		],
		green: [
			"#e8f9f8",
			"#dfeceb",
			"#c5d4d3",
			"#a8bcbb",
			"#8fa7a6",
			"#7e9a99",
			"#749492",
			"#61817f",
			"#527371",
			"#3f6463",
		],
		red: [
			"#D01616",
			"#D01616",
			"#D01616",
			"#D01616",
			"#D01616",
			"#D01616",
			//error
			"#D01616",
			"",
			"",
			"",
		],
		gray: [
			"#f4f4f6",
			"#e6e6e6",
			"#cacaca",
			"#adacaf",
			"#939399",
			"#84838b",
			"#7b7b86",
			"#696974",
			"#5d5d68",
			"#50505d",
		],
		yellow: [
			"#fcf9e7",
			"#f5f1d7",
			"#e9e1b1",
			"#ddd188",
			"#d3c364",
			"#ccba4e",
			"#c9b541",
			"#b19f32",
			"#9e8d28",
			"#887a1b",
		],
	},
	cursorType: "pointer",
	headings: {
		sizes: {
			h1: {
				fontSize: "36px",
				fontWeight: "400",
				lineHeight: "1.1",
			},
			h2: {
				fontSize: "24px",
				fontWeight: "400",
			},
		},
	},
	components: {
		Button: {
			defaultProps: {
				h: 40,
				fw: "500",
			},
		},
		Input: {
			defaultProps: {
				h: 40,
				size: "md",
				fw: "500",
			},
		},
		PinInput: {
			defaultProps: {
				size: "md",
				radius: "md",
				placeholder: "0",
			},
		},
		InputLabel: {
			defaultProps: {
				fw: "400",
			},
		},
		InputError: {
			defaultProps: {
				c: "red.0",
			},
		},
	},
})

export default theme
