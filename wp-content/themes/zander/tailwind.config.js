var base = 5;
var max = 40;
var spacingSizes = {};
for (let i = 0; i <= max; i++) {
	spacingSizes[i] = `${i * base}px`;
}
var aspectRatios = {
	"1/2": "50%",
	"1/3": "33.333333%",
	"2/3": "66.666667%",
	"1/4": "25%",
	"2/4": "50%",
	"3/4": "75%",
	"1/5": "20%",
	"2/5": "40%",
	"3/5": "60%",
	"4/5": "80%",
	"1/6": "16.666667%",
	"2/6": "33.333333%",
	"3/6": "50%",
	"4/6": "66.666667%",
	"5/6": "83.333333%",
	"1/12": "8.333333%",
	"2/12": "16.666667%",
	"3/12": "25%",
	"4/12": "33.333333%",
	"5/12": "41.666667%",
	"6/12": "50%",
	"7/12": "58.333333%",
	"8/12": "66.666667%",
	"9/12": "75%",
	"10/12": "83.333333%",
	"11/12": "91.666667%",
	"9/16": "56.25%",
	"3/2": "150%",
	"270/317": "85.173%",
	"108/317": "33.958%",
};
var spacing = {
	...spacingSizes,
	...aspectRatios,
};

module.exports = {
	mode: "jit",
	content: ["./views/*.twig", "./views/**/*.twig", "./svg/**/*.twig"],
	options: {
		safelist: ["bg-parsley"],
		blocklist: [/^debug-/],
	},
	theme: {
		extend: {
			colors: {
				almond: "#EFE3C5",
				flamingo: "#EB4B25",
				parsley: "#144E2D",
			},
			boxShadow: {
				default: "0px 0px 15px 1px rgba(0, 0, 0, 0.15)",
			},
			borderRadius: {
				card: "10px",
			},
			spacing: spacing,
			fontSize: {
				eyebrow: [
					"18px",
					{
						letterSpacing: "1px",
						lineHeight: "120%",
					},
				],
				12: ["12px", "20px"],
				16: ["16px", "150%"],
				18: ["18px", "150%"],
				22: ["22px", "120%"],
				24: ["22px", "120%"],
				28: ["28px", "110%"],
				30: ["30px", "120%"],
				33: ["33px", "120%"],
				36: ["36px", "110%"],
				40: ["45px", "79px"],
				45: ["45px", "100%"],
				60: ["60px", "110%"],
				80: ["80px", "100%"],
				100: ["100px", "110%"],
			},
		},
		fontFamily: {
			lector: ["Lector"],
			"lector-regular": ["Lector Regular"],
		},
		container: {
			center: true,
			padding: {
				default: "20px",
			},
		},
		screens: {
			xs: "375px",
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1200px",
			xxl: "1480px",
		},
	},
	variants: {
		spacing: ["responsive"],
	},
	plugins: [],
};
