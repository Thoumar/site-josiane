import "./Paragraph.sass";

import React from "react";

const Paragraph = ({ htmlText }) => {
	return (
		<section className="Paragraph">
			<p className="Paragraph__Text" dangerouslySetInnerHTML={{ __html: htmlText }}></p>
		</section>
	);
};

export default Paragraph;
