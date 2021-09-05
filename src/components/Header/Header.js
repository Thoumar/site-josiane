import React, { useState } from "react";

import Video from "./../Video/Video";
import Scroller from "./../Scroller/Scroller";

import "./Header.sass";

const Header = ({ cover, title, subtitle, second_subtitle }) => {
	let backgroundMedia;

	const [fullscreenState, setFullscreenState] = useState();
	const [titleDisplay, setTitleDisplay] = useState(true);

	const handleSetFullScreen = () => setFullscreenState(false);
	const handleFadeAnimation = () => setTitleDisplay(false);

	// Fill the background with either a video or an image
	if (cover && cover.url.indexOf(".mp4") > -1) {
		backgroundMedia = <Video source={cover.url} alt={cover.alternativeText} controls autoPlay clicked={handleSetFullScreen} fullscreen={fullscreenState} hasSeekbar={true} />;
	} else if (cover && (cover.url.indexOf(".png") > -1 || cover.url.indexOf(".jpg") > -1)) {
		backgroundMedia = (
			<div className="Header__Background-image">
				<img height="100%" width="100%" src={cover.url} alt={cover.alternativeText} />
			</div>
		);
	} else {
		backgroundMedia = null;
	}

	return (
		<header className="Header" onClick={handleFadeAnimation}>
			<div className={"Header__Title" + (titleDisplay ? "" : " fade-away")}>
				{title ? <h1>{title}</h1> : null}
				{subtitle ? <span>{subtitle}</span> : null}
				{second_subtitle ? <span>{second_subtitle}</span> : null}
			</div>
			{backgroundMedia}
			<Scroller text="Scroll" />
		</header>
	);
};

export default Header;
