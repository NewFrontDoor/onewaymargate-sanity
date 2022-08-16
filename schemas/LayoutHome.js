export default {
	name: "LayoutHome",
	title: "Home Segment",
	type: "document",
	fields: [
		{
			title: "Heading",
			name: "heading",
			type: "string"
		},
		{
			name: "blurb",
			title: "Blurb",
			type: "blockContent"
		},
		{
			title: "Background",
			name: "background",
			type: "image",
			options: {
				hotspot: true
			}
		},
		{
			title: "Styling",
			name: "styling",
			type: "object",
			fields: [
				{
					title: "Style",
					name: "style",
					type: "string",
					options: {
						list: [
							{ title: "Blue", value: "blue" },
							{ title: "Dark", value: "dark" },
							{ title: "Light", value: "light" },
							{ title: "Custom", value: "custom" }
						],
						layout: "radio"
					}
				},
				{
					title: "Custom Color",
					name: "custom_color",
					type: "color",
					validation: (Rule) => [
						Rule.custom((custom_color, { document: { styling } }) => {
							if (typeof styling.style === "undefined") {
								return true;
							}

							if (styling.style !== "custom") {
								return true;
							}

							return custom_color ? true : "Custom color is required for custom style";
						}),
						Rule.custom((custom_color, { document: { styling } }) => {
							if (typeof styling.style === "undefined") return true;
							if (styling.style === "custom") return true;
							return custom_color ? "Color will not be used unless choosing custom option above" : true;
						}).warning()
					]
				}
			]
		},
		{
			name: "actions",
			title: "Call to action",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{ title: "Label", name: "label", type: "string" },
						{
							title: "Link",
							name: "page",
							type: "reference",
							to: [{ type: "link" }, { type: "page" }, { type: "dynamicLink" }]
						}
					]
				}
			]
		}
	]
};
