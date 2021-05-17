import React from "react";

import "./Button.sass";

const Button = ({ text, click, customStyle }) => {
	const style = customStyle;
	return (
		<div className="Button" onClick={() => click()} style={style}>
			<div className="Button__Text">{text}</div>
		</div>
	);
};

export default Button;
