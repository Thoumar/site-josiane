import React from "react";

import { Parallax } from "react-scroll-parallax";

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
	const videoEl = <Video source={url} alt={alternativeText} autoPlay clicked={handleClick} />;
	const imageEl = (
		<div className="Image">
			<img src={url} alt={alternativeText} key={index + "-picture-item"} onClick={handleClick} />
		</div>
	);
	return ext === ".png" || ext === ".jpg" ? imageEl : videoEl;
};

const renderFirstItem = (item, { title, subtitle }, handleClick, index) => {
	const ratio = 15 * Math.ceil(Math.random() * 3);

	return (
		<Parallax y={[0, ratio]} className="Block-caption" key={index + "-first-item"}>
			{renderItem(item, handleClick, index)}
			<h4 onClick={handleClick}>{title}</h4>
			<p onClick={handleClick}>{subtitle || ""}</p>
		</Parallax>
	);
};

const Block = ({ data, handleClick, dataKey }) => {
	const { title, disposition, subtitle, previews, size } = data;
	const dispositionClass = " " + getDispositionClass(disposition);
	const sizeClass = " " + getSizeClass(size);

	return (
		<div key={dataKey} className={"Block" + dispositionClass + sizeClass}>
			{previews.map((item, i) => (i === 0 ? renderFirstItem(item, { title, subtitle }, handleClick, i) : renderItem(item, handleClick, i)))}
		</div>
	);
};

export default Block;
