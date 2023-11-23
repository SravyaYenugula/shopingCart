
import LayoutForm from "./Components/cart";
// import SecondForm from "./Components/footer";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from './Components/cart'
import React, { Component,useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon,Row,Col, Typography, Badge, Drawer } from 'antd';
import {ReconciliationOutlined,ShoppingOutlined ,ShopOutlined,ShoppingCartOutlined  } from "@ant-design/icons";
import Footer from "./Components/footer";
import Header from "./Components/Header"
import Products from "./Components/cart"
import Product from "./Components/productList"
import CartList from "./Components/cart"
import {} from "antd" 
import "./App.css"
// const { Header, Sider, Content } = Layout;


function App  () {

  const [product, setProduct] = useState([
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG9e8Axt-h9q8EIybKfjGzbkIWJAr50_BX7Q&usqp=CAU',
      name: 'Watch Pink',
      category: 'Watches',
      seller: 'Watch Ltd',
      price: 2000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9xzgtOpMxdpfgBOg3OKsEqYRkNBbuprJj4w&usqp=CAU',
      name: 'Cup red Color',
      category: 'Cup',
      seller: 'ABS Ltd',
      price: 100
    },
    {
      url: 'https://rukminim1.flixcart.com/image/300/300/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=70',
      name: 'TRQ White Shoes',
      category: 'Shoes',
      seller: 'AMZ Seller Ghz',
      price: 1999
    },
    {
      url: 'https://5.imimg.com/data5/KC/PC/MY-38629861/dummy-chronograph-watch-500x500.jpg',
      name: 'LOREM Watch Black',
      category: 'Watches',
      seller: 'Watch Ltd Siyana',
      price: 2599
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq39iB_cO6uhZ59vubrqVuYTJQH-4Qa0hU9g&usqp=CAU',
      name: 'AMZ Laptop 8GB RAM',
      category: 'Laptops',
      seller: 'Delhi Laptops',
      price: 50000
    },
    {
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvoDzLqrT7GwU3z7Ccp0Cl9rV0ZnU9DcmEg&usqp=CAU',
      name: 'Security Camera',
      category: 'CCTV',
      seller: 'Camron LTD',
      price: 4000
    },
   
  ])
  const [cart,setCart]=useState([])
  const [showCart,setShowCart]=useState(false)

  const addToCart=(data)=>{
   console.log("=====",data)
   setCart([...cart,{...data, quantity: 1 }])
   console.log("cart",cart)
  }

  const handelShow=(value)=>{
    console.log("value",value)
    setShowCart(value)
  }
 return <div className="App">
 <Header count={cart.length} handelShow ={handelShow}/>
 {
  showCart?
  <CartList cart={cart} ></CartList>:

<Product  product={product}  addToCart={addToCart}></Product>
 }

 {/* <PageContent/> */}

 
  {/* <Router>
                <Layout style={{ minHeight: '100vh' }}>

                 
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0, paddingLeft: 16 }}>
                        </Header>
                        <Content product={product} style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                            {/* <Route exact path="/" component={Dashboard} />
                            <Route path="/meseros" component={Meseros} /> */}
                         {/* </Content>

                    </Layout>

                </Layout>
            </Router>  */}
  

 </div>
  };
 



export default App;
