import React from "react";
import S from "@sanity/desk-tool/structure-builder";
import { FaCogs } from "react-icons/fa";
import {
	MdMap,
	MdReceipt,
	MdHome,
	MdVideoLibrary,
	MdViewAgenda,
	MdCollectionsBookmark,
	MdInsertDriveFile
} from "react-icons/md";

export default () => {
	return S.list()
		.title("Website Content and Settings")
		.items([
			S.listItem()
				.title("Home and Menu")
				.icon(MdHome)
				.child(
					S.editor()
						.title("Home and Menu")
						.id("global-main")
						.schemaType("main")
						.documentId("global-main")
				),
			S.listItem()
				.title("Segments")
				.icon(MdViewAgenda)
				.child(
					S.list()
						.title("Segments")
						.items([
							S.listItem()
								.title("Normal segments")
								.icon(MdReceipt)
								.child(S.documentTypeList("LayoutHome").title("Segments")),
							S.listItem()
								.title("Map segments")
								.icon(MdMap)
								.child(S.documentTypeList("LayoutMap").title("Segments"))
						])
				),
			S.listItem()
				.title("Pages")
				.icon(MdInsertDriveFile)
				.child(S.documentTypeList("page").title("Pages")),
			S.listItem()
				.title("Body content blocks")
				.icon(MdCollectionsBookmark)
				.child(
					S.list()
						.title("Body content blocks")
						.items([
							S.listItem()
								.title("Forms")
								.child(S.documentTypeList("form").title("Forms")),
							S.listItem()
								.title("Grid block")
								.child(S.documentTypeList("gridblock").title("Grid block"))
						])
				),
			S.listItem()
				.title("Categories and classes")
				.icon(MdCollectionsBookmark)
				.child(
					S.list()
						.title("Categories and classes")
						.items([
							S.listItem()
								.title("Speakers")
								.child(S.documentTypeList("speaker").title("Speakers")),
							S.listItem()
								.title("Series")
								.child(
									S.documentTypeList("series")
										.title("Series")
										.defaultOrdering([{ field: "_updatedAt", direction: "desc" }])
								)
						])
				),
			S.listItem()
				.title("Sermons")
				.icon(MdVideoLibrary)
				.child(
					S.documentTypeList("sermons")
						.title("Sermons")
						.defaultOrdering([{ field: "_updatedAt", direction: "desc" }])
				),
			S.divider(),
			S.listItem()
				.title("Dynamic Link")
				.child(S.documentTypeList("dynamicLink").title("Dynamic Link")),
			S.listItem()
				.title("Config")
				.icon(FaCogs)
				.child(
					S.editor()
						.id("config")
						.title("Config")
						.schemaType("config")
						.documentId("global-config")
				)
		]);
};
