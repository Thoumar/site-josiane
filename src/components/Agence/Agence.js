import React, { useRef } from "react";

import Carousel, { consts } from "react-elastic-carousel";

import arrowRight from "./../../images/icons/arrow_right.svg";
import arrowLeft from "./../../images/icons/arrow_left.svg";

import "./Agence.sass";

const Agence = ({ data }) => {
	const carousel = useRef(null);

	const arrows = ({ type, onClick }) => {
		const pointer = type === consts.PREV ? <img src={arrowLeft} alt="Arrow" /> : <img src={arrowRight} alt="Arrow" />;
		return <button onClick={onClick}>{pointer}</button>;
	};

	const onNextStart = (currentItem, nextItem) => {
		if (currentItem.index === nextItem.index) {
			carousel.current.goTo(0);
		}
	};
	const onPrevStart = (currentItem, nextItem) => {
		if (currentItem.index === nextItem.index) {
			carousel.current.goTo(data.Pictures.length);
		}
	};

	return (
		<section className="Agence">
			<Carousel ref={carousel} itemsToShow={3} pagination={false} infinite={true} outerSpacing={5} onPrevStart={onPrevStart} onNextStart={onNextStart} disableArrowsOnEnd={false} renderArrow={arrows}>
				<div className="Agence__Container">
					<div>
						<img
							src="https://images.unsplash.com/photo-1622495892577-2d07f607968e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
							alt="test"
							key="1"
						/>
					</div>
					<div>
						<img
							src="https://images.unsplash.com/photo-1622495892577-2d07f607968e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
							alt="test"
							key="1"
						/>
					</div>
					<div>
						<img
							src="https://images.unsplash.com/photo-1622495892577-2d07f607968e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
							alt="test"
							key="1"
						/>
					</div>
					<div>
						<img
							src="https://images.unsplash.com/photo-1622495892577-2d07f607968e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
							alt="test"
							key="1"
						/>
					</div>
					<div>
						<img
							src="https://images.unsplash.com/photo-1622495892577-2d07f607968e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
							alt="test"
							key="1"
						/>
					</div>
					<div>
						<img
							src="https://images.unsplash.com/photo-1622495892577-2d07f607968e?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
							alt="test"
							key="1"
						/>
					</div>
				</div>
			</Carousel>
		</section>
	);
};

export default Agence;
