import React, { useEffect, useRef, useState } from "react";

import Carousel, { consts } from "react-elastic-carousel";

import arrowRight from "./../../images/icons/arrow_right.svg";
import arrowLeft from "./../../images/icons/arrow_left.svg";

import "./Agence.sass";
import Button from "../Button/Button";

const Picture = ({ url }) => (
  <div>
    <img src={url} alt="carousel item" />
  </div>
);

const PicturesContainer = ({ chunk }) => {
  return (
    <div className="Agence__Container">
      {chunk.map((pic, idx) => (
        <Picture key={idx} url={pic.url} />
      ))}
    </div>
  );
};

const Agence = ({ pictures }) => {
  const carousel = useRef(null);
  const carouselPictures = [].concat([...pictures]);
  const [chunksContainer, setChunksContainer] = useState([]);

  const arrows = ({ type, onClick }) => {
    const pointer =
      type === consts.PREV ? (
        <img src={arrowLeft} alt="Arrow" />
      ) : (
        <img src={arrowRight} alt="Arrow" />
      );
    return <button onClick={onClick}>{pointer}</button>;
  };

  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carousel.current.goTo(0);
    }
  };

  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carousel.current.goTo(chunksContainer.length);
    }
  };

  useEffect(() => {
    const tempArr = [];
    for (var i = 0; i < carouselPictures.length; i += 6) {
      tempArr.push(carouselPictures.slice(i, i + 6));
    }
    setChunksContainer(tempArr);
  }, []);

  return (
    <section className="Agence">
      <Carousel
        ref={carousel}
        itemsToShow={1}
        pagination={false}
        infinite={true}
        outerSpacing={5}
        onPrevStart={onPrevStart}
        onNextStart={onNextStart}
        disableArrowsOnEnd={false}
        renderArrow={arrows}
      >
        {chunksContainer.map((chunk, index) => (
          <PicturesContainer chunk={chunk} key={index} />
        ))}
      </Carousel>

      <Button
        text="LIEN EXTERNE"
        customStyle={{
          marginTop: "10rem",
        }}
        click={() => window.open("https://www.google.com", "_blank")}
      />
    </section>
  );
};

export default Agence;
