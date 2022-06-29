import React, { useRef, useState } from 'react'
// import { BsPlayCircle } from 'react-icons/bs';
import "./Video.css"
import Image from './public/dress.png'
import VideoFooter from './VideoFooter';
function Video() {
	const [play, setPlay] = useState(false);
	const videoRef = useRef(null);
	// const isVideoPlaying = videoRef => !!(videoRef.currentTime > 0 && !videoRef.paused && !videoRef.ended && videoRef.readyState > 2);
	const [showButton, setShowButton] = useState(true)
		const onButtonClick = () => {
			setShowButton(!showButton)
				videoRef.current.play();
				setPlay(true);
		}

	const onVideoPress = () => {
		if (play) {
			videoRef.current.pause();
			setPlay(false);
		}
		else {
			videoRef.current.play();
			setPlay(true);
		}
}
  return (
	  <div className='video'>
		  <video className="video__player"
			  loop
			  controls
			  preload="metadata"
			  poster={Image}
			  onClick={onVideoPress}
			  ref={videoRef}
			  src="https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-devices-99786-large.mp4">

		  </video>
		
			  <div className="play-button-wrapper"
				  onClick={onButtonClick}
			  >
				  <div title="Play video" className="play-gif" id="circle-play-b">
				  {showButton &&
				  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
						  <path d="M40 0a40 40 0 1040 40A40 40 0 0040 0zM26 61.56V18.44L64 40z" />
					  </svg>
				} 
				  </div>
			  </div>
		  {play &&
				  
			  <VideoFooter />
		  }

		  {!play &&
			  <div>
				  <h2 className='heading'>
					  Shop My Closet
			  </h2>
			  </div>}
	  </div>

  )
}

export default Video