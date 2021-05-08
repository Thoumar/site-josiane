import React, { useState } from "react";

import Video from "./../Video/Video";
import Scroller from "./../Scroller/Scroller";

import "./Header.sass";

const Header = ({ cover, title, subtitle }) => {
	// console.log(cover);

	let backgroundMedia;

	const [fullscreenState, setFullscreenState] = useState();

	const handleSetFullScreen = () => {
		console.log("go fullscreen");
		setFullscreenState(true);
	};

	// Fill the background with either a video or an image
	if (cover.url.indexOf(".mp4") > -1) {
		backgroundMedia = <Video source={cover.url} controls autoPlay clicked={handleSetFullScreen} fullscreen={fullscreenState} />;
	} else if (cover.url.indexOf(".png") > -1 || cover.url.indexOf(".jpg") > -1) {
		backgroundMedia = (
			<div className="Header__Background-image">
				<img height="100%" width="100%" src={cover.url} alt="Background" />
			</div>
		);
	} else {
		backgroundMedia = null;
	}

	return (
		<header className="Header">
			<div className="Header__Title">
				{title ? <h1>{title}</h1> : null}
				{subtitle ? <span>{subtitle}</span> : null}
			</div>
			{backgroundMedia}
			<Scroller text="Scroll" />
		</header>
	);
};

export default Header;
