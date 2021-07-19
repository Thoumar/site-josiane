import "./Title.sass";

import React from "react";

const Title = ({ scrollRef, text, customStyle }) => {
	return (
		<h2 className="Title" style={customStyle} scroll-ref={scrollRef}>
			{text}
		</h2>
	);
};

export default Title;
