/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
 import { registerBlockType } from "@wordpress/blocks";

 /**
	* Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
	* All files containing `style` keyword are bundled together. The code used
	* gets applied both to the front of your site and to the editor.
	*
	* @see https://www.npmjs.com/package/@wordpress/scripts#using-css
	*/
 import "../../style.scss";

 /**
	* Internal dependencies
	*/
 import Edit from "./edit";
 import save from "./save";

 /**
	* Every block starts by registering a new block type definition.
	*
	* @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
	*/

 registerBlockType("create-block/divineheaderblock", {

	 attributes: {
		 content: {
			 type: "string",
			 source: "html",
			 selector: 'h2',

		 },
		 alignment: {
			 type: "string",
			 default: "none",
		 },


		 the_font_sizes: { type: "array", default: ["26px", "24px", "18px"] },

		 padding: {
			 type: "array",
			 default: [
				 ["0", "0", "0", "0"],
				 ["0", "0", "0", "0"],
				 ["0", "0", "0", "0"],
			 ],
		 },
		 margins: {
			 type: "array",
			 default: [
				 ["0", "0", "0", "0"],
				 ["0", "0", "0", "0"],
				 ["0", "0", "0", "0"],
			 ],
		 },
		 bg_color: { type: "string", default: "#ffffff" },
		 text_color: { type: "string", default: "#000000" },
		 display: {
			 type: "array",
			 default: ["inline-block", "inline-block", "inline-block"],
		 },

		 unique_id: { type: "string", default: "" },
		 border_size: { type: "array", default: [0, 0, 0] },
		 letterSpacing: { type: "array", default: [0, 0, 0] },
		 lineHeight: { type: "array", default: [16, 16, 16] },
		 textTransform: { type: "array", default: ["none", "none", "none"] },
		 borderRadius: { type: "array", default: [3, 3, 3] },
		 borderStyle: { type: "array", default: ["none", "none", "none"] },
		 border_color: { type: "array", default: ["#000000", "#000000", "#000000"] },
	 },
	 title: "Divine Header Block",
	category: "widgets",
		icon: "smiley",
	 /**
		* @see ./edit.js
		*/
	 edit: Edit,

	 /**
		* @see ./save.js
		*/
	 save,
 });
