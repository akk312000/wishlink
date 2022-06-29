import React, { useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter';
function Video() {

	const [play, setPlay] = useState(false);
	const videoRef = useRef(null);
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
			  onClick={onVideoPress}
			  ref={videoRef}
			//   controls
			  src="https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-devices-99786-large.mp4"></video>
	   <VideoFooter/>
	  {/* <VideoSidebar/> */}
	  
	  </div>

  )
}

export default Video