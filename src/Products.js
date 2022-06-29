import React from 'react'
import Card from './Card';
import './Products.css';
// import ShopButton from './ShopButton';
function Products({productName, productCount}) {
	return (
	  <>
			<div  className='header'>
				<h1 className='tg_products'>{ productName}</h1>
				<div className='products'>

					{[...Array(productCount)].map((e, i) => <Card isOffer={i%2===0}/>)}
		 </div>
		 {/* <ShopButton /> */}
			</div>
			
	  </>
		
			  
		
  )
}

export default Products