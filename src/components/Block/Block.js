import React from "react";

import "./Block.sass";
import "./Block__Two-items.sass";
import "./Block__Two-items-aligned.sass";
import "./Block__Two-items-overlap.sass";
import "./Block__Two-items-overlap-squared.sass";
import "./Block__Four-items.sass";
import "./Block__Two-items-crossed-bottom.sass";
import "./Block__Three-items-gallery.sass";
import "./Block__Two-items-crossed-top.sass";
import "./Block__Two-items-overlap-inline.sass";
import "./Block__Two-items-crossed-top-overlap.sass";
import "./Block__Two-items-crossed-bottom-spaced.sass";
import "./Block__Two-items-crossed-bottom-squared.sass";

import Video from "./../Video/Video";

// Disposition classmatcher
const getDispositionClass = (disposition) => {
	switch (disposition) {
		case "two_items":
			return "Block__Two-items";
		case "two_items_overlap":
			return "Block__Two-items-overlap";
		case "two_items_overlap_squared":
			return "Block__Two-items-overlap-squared";
		case "four_items":
			return "Block__Four-items";
		case "two_items_crossed_bottom":
			return "Block__Two-items-crossed-bottom";
		case "two_items_crossed_bottom_spaced":
			return "Block__Two-items-crossed-bottom-spaced";
		case "two_items_crossed_bottom_squared":
			return "Block__Two-items-crossed-bottom-squared";
		case "two_items_crossed_top":
			return "Block__Two-items-crossed-top";
		case "two_items_crossed_top_overlap":
			return "Block__Two-items-crossed-top-overlap";
		case "three_items_gallery":
			return "Block__Three-items-gallery";
		case "two_items_l_style":
			return "Block__Two-items-l-style";
		case "two_items_overlap_inline":
			return "Block__Two-items-overlap-inline";
		default:
			return "";
	}
};

// Size classmatcher
const getSizeClass = (size) => {
	switch (size) {
		case "small":
			return "Block__Small-width";
		default:
			return "";
	}
};

// Render functions
const renderItem = ({ ext, url, alternativeText }, handleClick, index) => {
	switch (ext) {
		case ".png":
			return (
				<div className="Image">
					<img src={url} alt={alternativeText} key={index + "-picture-item"} onClick={handleClick} />
				</div>
			);
		case ".jpg":
			return (
				<div className="Image">
					<img src={url} alt={alternativeText} key={index + "-picture-item"} onClick={handleClick} />
				</div>
			);
		case ".mp4":
			return <Video source={url} alt={alternativeText} autoPlay clicked={handleClick} />;
		default:
			return null;
	}
};

const renderFirstItem = (item, { title, subtitle }, handleClick, index) => {
	return (
		<div className="Block-caption" key={index + "-first-item"}>
			{renderItem(item, handleClick, index)}
			<h4 onClick={handleClick}>{title}</h4>
			<p onClick={handleClick}>{subtitle || ""}</p>
		</div>
	);
};

const Block = ({ data, handleClick, key }) => {
	console.log(data.previews);

	const { title, disposition, subtitle, previews, size } = data;
	const dispositionClass = " " + getDispositionClass(disposition);
	const sizeClass = " " + getSizeClass(size);

	return (
		<section key={key} className={"Block" + dispositionClass + sizeClass}>
			{previews.map((item, i) => {
				if (i === 0) {
					return renderFirstItem(item, { title, subtitle }, handleClick, i);
				} else {
					return renderItem(item, handleClick, i);
				}
			})}
		</section>
	);
};

export default Block;
