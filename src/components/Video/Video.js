import React, { useState, useRef } from "react";

import ReactPlayer from "react-player";
import ReactSlider from "react-slider";

import soundOnIcon from "./../../images/icons/sound_on.svg";
import soundOffIcon from "./../../images/icons/sound_off.svg";
import fullscreenIcon from "./../../images/icons/fullscreen.svg";

import playIcon from "./../../images/icons/play.svg";
import pauseIcon from "./../../images/icons/pause.svg";

import "./Video.sass";

const Video = ({
  autoPlay,
  source,
  controls,
  clicked,
  thumbnail,
  isClickable,
  hasSeekbar,
  hasPlayBigButton,
}) => {
  const playerRef = useRef(null);

  const [fullScreenState, setFullScreenState] = useState(false);

  const [state, setState] = useState({
    playing: autoPlay,
    controls: controls,
    light: false,
    muted: true,
    played: 0,
    duration: 0,
    playbackRate: 1.0,
    volume: 1,
    loop: true,
    seeking: false,
  });

  const { playing, muted, played } = state;

  const handlePlayPause = (value) =>
    setState({ ...state, playing: value, muted: !value });
  const handleSetSoundState = () => {
    setState({ ...state, muted: !state.muted });
  };
  const handleSeekChange = (newValue) =>
    playerRef.current.seekTo(newValue / 100);
  const handleProgress = (changeState) => {
    if (!state.seeking) {
      setState({ ...state, ...changeState });
    }
  };

  const handleSetFullScreenState = () => {
    setFullScreenState(!fullScreenState);
    if (!fullScreenState) {
      if (document.querySelector(".Video").requestFullscreen) {
        document.querySelector(".Video").requestFullscreen();
      } else if (document.querySelector(".Video").webkitRequestFullscreen) {
        document.querySelector(".Video").webkitRequestFullscreen();
      } else if (document.querySelector(".Video").msRequestFullscreen) {
        document.querySelector(".Video").msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  const soundIconSrc = muted ? soundOffIcon : soundOnIcon;
  const playIconSrc = playing ? pauseIcon : playIcon;

  return (
    <div className="Video">
      {hasPlayBigButton ? (
        <img
          className="Video__Button Video__BigButton--play"
          src={playIcon}
          style={{
            opacity: playing ? "0" : "1",
          }}
          alt="Icon play video"
          onClick={(e) => {
            e.stopPropagation();
            handlePlayPause(!state.playing);
          }}
        />
      ) : null}
      {controls ? (
        <div className="Video__Controls">
          <div>
            {!hasPlayBigButton ? (
              <img
                className="Video__Button Video__Button--play"
                src={playIconSrc}
                alt="Icon play video"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlayPause(!state.playing);
                }}
              />
            ) : null}
            <img
              className="Video__Button Video__Button--mute"
              src={soundIconSrc}
              alt="Icon mute video"
              onClick={handleSetSoundState}
            />
          </div>

          <div>
            {/* {hasSeekbar ? ( */}
            <ReactSlider
              className="Video__Slider"
              thumbClassName="Video__Thumb"
              trackClassName="Video__Track"
              light="http://placekitten.com/200/300"
              value={played * 100}
              onChange={handleSeekChange}
            />
            {/* ) : null} */}
          </div>
          <img
            className="Video__Button Video__Button--fullscreen"
            src={fullscreenIcon}
            alt="Icon fullscreen video"
            onClick={handleSetFullScreenState}
          />
        </div>
      ) : null}

      <div
        style={{ height: "100%", width: "100%" }}
        onClick={(e) => {
          if (isClickable) {
            e.stopPropagation();
            handlePlayPause(!state.playing);
          } else {
            clicked();
          }
        }}
      >
        <ReactPlayer
          ref={playerRef}
          playing={playing}
          muted={muted}
          loop
          url={source}
          width="100%"
          height="100%"
          onProgress={handleProgress}
        />
      </div>

      {thumbnail ? (
        <img
          className={"Video__Thumbnail" + (playing ? " hide" : " show")}
          src={thumbnail.url}
          width="100%"
          height="100%"
          alt="video thumbnail"
        />
      ) : null}
    </div>
  );
};

export default Video;
