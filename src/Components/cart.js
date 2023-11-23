import { Form,Image, Input, Select, Modal, Table, Button, Tag, List, Card, Typography, Badge, Rate, message } from "antd";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";



function CartList ({cart}) {

    const [cartTotal, setCartTotal] = useState([])
 
 
useEffect(() => {
    setCartTotal(cart)
    }, [cart])



return( 
    <div>
       {
         cartTotal.map((cartItem,cartindex)=>{
             return(
                <div>
                    <Image src={cartItem.url} width={50}/>
                    <span> {cartItem.name} </span>
                    <button onClick={() => {
                                    const _CART = cartTotal.map((item, index) => {
                                        // console.log("_cart",item)
                                        return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                    })
                                    setCartTotal(_CART)
                                }}
                    >-</button>
                    <span> {cartItem.quantity} </span>
                    <button onClick={() => {
                                    const _CART = cartTotal.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCartTotal(_CART)
                                }}>+</button>
                    <span>Rs. {cartItem.price  * cartItem.quantity} </span>

                </div>
             )
         
       })
       }
       <p>Total    <span></span>{
        cartTotal.map(item=>
     item.price *item.quantity).reduce((total, value) => total + value, 0)
      }</p>
    </div>
        )
  }

 

export default CartList
