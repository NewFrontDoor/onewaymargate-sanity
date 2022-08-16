// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// We import object and document schemas
import blockContent from "./blockContent";
import speaker from "./speaker";
import main from "./main";
import config from "./config";
import segment from "./segment";
import page from "./page";
import modals from "./modals";
import link from "./link";
import form from "./form";
import formfield from "./formfield";
import LayoutHome from "./LayoutHome";
import LayoutMap from "./LayoutMap";
import themecolor from "./themecolor";
import sermons from "./sermons";
import series from "./series";
import gridblock from "./gridblock";
import dynamicLink from "./dynamicLink";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: "default",
	// Then proceed to concatenate our our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		// The following are document types which will appear
		// in the studio.
		speaker,
		page,
		// When added to this list, object types can be used as
		// { type: 'typename' } in other document schemas
		blockContent,
		main,
		config,
		segment,
		modals,
		link,
		form,
		formfield,
		LayoutHome,
		LayoutMap,
		themecolor,
		sermons,
		series,
		gridblock,
		dynamicLink
	])
});
