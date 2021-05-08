import React from "react";

import "./Button.sass";

const Button = ({ text, click, withMarginBottom }) => {
	const style = {
		marginBottom: withMarginBottom ? "12rem" : "0",
	};
	return (
		<div className="Button" onClick={() => click()} style={style}>
			<div className="Button__Text">{text}</div>
		</div>
	);
};

export default Button;
