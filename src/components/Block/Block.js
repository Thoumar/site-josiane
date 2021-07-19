import React from "react";

import Video from "./../Video/Video";

// Disposition classmatcher
const getDispositionClass = (disposition) => {
	let str = disposition.replaceAll("_", "-");
	return "Block__" + str.charAt(0).toUpperCase() + str.slice(1);
};

// Size classmatcher
const getSizeClass = (size) => (size === "small" ? "Block__Small-width" : "");

// Render functions
const renderItem = ({ ext, url, alternativeText }, handleClick, index) => {
	const videoEl = <Video key={"b-v-" + index} source={url} alt={alternativeText} autoPlay clicked={handleClick} />;
	const imageEl = (
		<div key={"b-i-" + index} className="Image">
			<img src={url} alt={alternativeText} onClick={handleClick} />
		</div>
	);
	return ext === ".png" || ext === ".jpg" ? imageEl : videoEl;
};

const renderFirstItem = (item, { title, subtitle }, handleClick, index) => {
	return (
		<div key={"b-i-" + index} className="Block-caption">
			{renderItem(item, handleClick, index)}
			<h4 onClick={handleClick}>{title}</h4>
			<p onClick={handleClick}>{subtitle || ""}</p>
		</div>
	);
};

const Block = ({ data, handleClick, dataKey }) => {
	const { title, disposition, subtitle, previews, size } = data;
	const dispositionClass = " " + getDispositionClass(disposition);
	const sizeClass = " " + getSizeClass(size);

	return (
		<div key={"b" + dataKey} className={"Block" + dispositionClass + sizeClass}>
			{previews.map((item, i) => (i === 0 ? renderFirstItem(item, { title, subtitle }, handleClick, i) : renderItem(item, handleClick, i)))}
		</div>
	);
};

export default Block;
