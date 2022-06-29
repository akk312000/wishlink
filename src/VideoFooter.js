import React from 'react'
import './VideoFooter.css';
function VideoFooter({name,description,cost_price,original_price}) {
  return (
		  <div className='parent'>
	  <div className='videoFooter'>
		  {/* <h2>I am a footer</h2> */}
		  <img className="videoFooter__record" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/12595594/2020/10/15/3fb18e5c-56b2-46f9-8dde-eb8c6dd689481602737925787SareemallNavyBluePolyChiffonSolidEthnicPartywearSareewithMat2.jpg" alt=""/>

		  <div className="videoFooter__text">
			 <h3 className='dressName'>TRACE</h3> 
			 <p className='description'> Long red slit dress</p>
			 <p className='price'>₹1600</p>

			 <p className='original_price'>₹2000</p>
				  <div className='shop-flex'>
					  
			 <p className='discount'>(20% OFF)</p>

			 <btn className='shop_button'>SHOP</btn>
			 </div>
		  </div>
		  </div>
	</div>
  )
}

export default VideoFooter