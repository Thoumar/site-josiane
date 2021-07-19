import { useLoading, BallTriangle } from "@agney/react-loading";

import React from "react";

const Loader = ({ loading }) => {
	const style = { height: "100vh", display: " flex" };

	const { containerProps, indicatorEl } = useLoading({ loading: true, indicator: <BallTriangle width="50" /> });

	const containerAttributes = {
		style,
		...containerProps,
		className: "Loader " + (loading ? "loading" : "loaded"),
	};

	return <section {...containerAttributes}>{indicatorEl}</section>;
};

export default Loader;
