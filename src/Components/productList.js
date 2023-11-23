
import "../App.css"
// import "antd/dist/antd.css";
import { Breadcrumb, Layout, Menu,Image } from 'antd';
import React from 'react';




const { Header,Sider } = Layout;


const productList = ({product,addToCart}) => {
  


  return( 


 
<div className="flex">
{

        product.map((productItem, productIndex) => {
           
           return (
            <div style={{width:'50%'}}>
               <div className="product-item">
               <Image src={productItem.url} width="50%" />
                                <p>{productItem.name} | {productItem.category} </p>
                                <p> {productItem.seller} </p>
                                <p> Rs. {productItem.price} /-</p>
                                <button onClick={()=>addToCart(productItem)}>Add To Cart</button>
               </div>
            </div>
           )
        })
}
 </div>
  
    )
  }

 

export default productList
