import React from 'react'
import Card from './Card';
import './Products.css';
import ShopButton from './ShopButton';
function Products() {
	return (
	  <>
	  <div className='header'>
		  <h1 className='tg_products'>Tagged Products</h1>
				<div className='products'>
					
		 <Card/>
		 <Card/>
		 </div>
		 {/* <ShopButton /> */}
			</div>
			
	  </>
		
			  
		
  )
}

export default Products