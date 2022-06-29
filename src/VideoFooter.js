import React from 'react'
import './VideoFooter.css';
function VideoFooter() {
  return (
	  <div className='videoFooter'>
		  {/* <h2>I am a footer</h2> */}
		  <div className="videoFooter__text">
			 <h3>Dress Name</h3> 
			 <p>Dress Description</p>
		  </div>
		  <img className="videoFooter__record" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12595594/2020/10/15/3fb18e5c-56b2-46f9-8dde-eb8c6dd689481602737925787SareemallNavyBluePolyChiffonSolidEthnicPartywearSareewithMat2.jpg" alt=""/>
	</div>
  )
}

export default VideoFooter