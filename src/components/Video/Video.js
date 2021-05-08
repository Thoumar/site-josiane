import React, { useState, useRef } from "react";

import ReactPlayer from "react-player";
import ReactSlider from "react-slider";

import soundOnIcon from "./../../images/icons/sound_on.svg";
import soundOffIcon from "./../../images/icons/sound_off.svg";
import fullscreenIcon from "./../../images/icons/fullscreen.svg";

import playIcon from "./../../images/icons/play.svg";
import pauseIcon from "./../../images/icons/pause.svg";

import "./Video.sass";

const Video = ({ autoPlay, source, controls, clicked }) => {
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

	const handlePlayPause = () => setState({ ...state, playing: !state.playing });

	const handleSetSoundState = () => setState({ ...state, muted: !state.muted });

	const handleSeekMouseDown = (e) => setState({ ...state, seeking: true });

	const handleSeekMouseUp = (e, newValue) => {
		setState({ ...state, seeking: false });
		playerRef.current.seekTo(newValue / 100);
	};

	const handleSeekChange = (newValue) => playerRef.current.seekTo(newValue / 100);

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
			{controls ? (
				<div className="Video__Controls">
					<div>
						<img
							className="Video__Button Video__Button--play"
							src={playIconSrc}
							alt={""}
							onClick={() => {
								handlePlayPause();
							}}
						/>
						<img
							className="Video__Button Video__Button--mute"
							src={soundIconSrc}
							alt={""}
							onClick={() => {
								handleSetSoundState();
							}}
						/>
					</div>
					<div>
						{fullScreenState ? (
							<ReactSlider
								className="Video__Slider"
								thumbClassName="Video__Thumb"
								onMouseDown={handleSeekMouseDown}
								onMouseUp={handleSeekMouseUp}
								trackClassName="Video__Track"
								value={played * 100}
								onChange={handleSeekChange}
								renderThumb={(props, state) => {
									return <div {...props}></div>;
								}}
							/>
						) : null}
					</div>
					<img
						className="Video__Button Video__Button--fullscreen"
						src={fullscreenIcon}
						alt={""}
						onClick={() => {
							handleSetFullScreenState();
						}}
					/>
				</div>
			) : null}

			<ReactPlayer
				onClick={clicked}
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
	);
};

export default Video;
