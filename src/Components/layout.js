import { Form, Input, Select, Modal, Table, Button, Tag, List, Card, Typography, Badge, Rate, message } from "antd";
import { useNavigate } from "react-router-dom";

import { Row, Col, Space, Popconfirm,Spin } from "antd";
import { useEffect, useState } from "react";
import {
  HomeOutlined
} from "@ant-design/icons";

// import "./App.css";
import "antd/dist/antd.css";
// import "./App.css"
// import "antd/dist/antd.css";
import { Breadcrumb, Layout, Menu,Image } from 'antd';
import React from 'react';
import Content from './content'
import Footer from './footer'
import api from "./Apis/apis"
import AddCart from "./Apis/cart"

const { Search } = Input;
// import "./style.css"

const { Header,Sider } = Layout;


const LayoutForm = (prop) => {
  const navigate=useNavigate()


  const [items,setItems]=useState([])
    const [loading,setLoading]=useState([])

useEffect(()=>{
  setLoading(true)
  api().then(res=>{
    setItems(res.products) 
    setLoading(false)
    // console.log(items,"========products")
  })
})
// if(loading){

//   return <Spin spinning/> 
// }

  return( 


 <div  style={{marginRight:'10px'}}> 


 <List 
 grid={{column:3}}
  renderItem={(products,index)=>{
  return (
    <Badge.Ribbon  text={products.discountPercentage} color="pink">
    <Card   
    style={{
        // width: 300,
        marginLeft:'10px',
        marginBottom: "8px",
        borderRadius: "8px",
        overflow: "hidden"
      }}
   title={products.title} key={index}
  cover={<Image className='itensCardimage' height={'200px'} width={'200px'} src={products.thumbnail}></Image>}
  actions={[<Rate allowHalf disabled  value={products.rating}/>,
  // <Button  type="link">Add To Cart</Button>
  <AddTOCartButton item={products}/>
  ]}
  >
    <Card.Meta title={<Typography>Price:${products.price}{" "}
    <Typography.Text delete type="danger">
    ${parseFloat(products.price+(products.price*products.discountPercentage)/100).toFixed(2)}</Typography.Text>
    </Typography>}
    description=<Typography.Paragraph ellipsis={{rows:2,expandable:true,symbol:'More'}}>{products.description}</Typography.Paragraph>
    ></Card.Meta>

  </Card>
  </Badge.Ribbon> 
  );
 }}
   dataSource={items}
   ></List>
 
 </div>
  
    )
  }

  function AddTOCartButton({item}){
    const [loading,setLoading]=useState(false)

    const  AddProductToCart=()=>{
      setLoading(true)
      AddCart(item.Id).then((res)=>{
        console.log(item.title,"======")
        message.success(`${item.title} has been added to cart!`)
        setLoading(false)
      });
    };
    return <Button type="link" onClick={()=>{AddProductToCart()}} loading={loading}>Add To Cart</Button>
  }

export default  LayoutForm 
