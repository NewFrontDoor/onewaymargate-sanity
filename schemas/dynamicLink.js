export default {
	name: "dynamicLink",
	title: "Dynamic Link",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			description: "Used to identify the link when searching for it in a normal segment.",
			type: "string"
		},
		{
			name: "link",
			title: "Link Type",
			description:
				"This will be used for linking to a document's page dynamically i.e. to link to the latest sermon without having to update the link each week. If you would like more functionality to be added please contact support@newfrontdoor.org.",
			type: "string",
			options: {
				list: [{ title: "Latest sermon", value: "latest-sermon" }]
			}
		}
	]
};
