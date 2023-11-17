import { Form, Input, Select, Modal, Table, Button, Tag, List, Card, Typography, Badge, Rate, message, Drawer } from "antd";
import { useNavigate } from "react-router-dom";

import { Row, Col, Space, Popconfirm,Spin,Menu } from "antd";
import React, { useState } from 'react';
import {
  HomeOutlined,ShoppingCartOutlined
} from "@ant-design/icons";
import { flushSync } from "react-dom";



function Header(){

return(
  <div className="appheader">
 <Typography.Title></Typography.Title>

 <Typography.Title>Sri store</Typography.Title>
 <AppCart/>
  </div>


)
}
const AppCart=()=>{
  const [open, setopen] = useState(false);
  const [size, setSize] = useState();

  const showDrawer = () => {
  
    setopen(true);
    console.log("===",open)
  };
  const onClose = () => {
   
    setopen(false);
  };
return(
  <div>
<Badge   onClick={showDrawer} count={7} style={{cursor:"pointer", fontSize:'12px',marginRight:'40px'}}>
 <ShoppingCartOutlined  style={{ cursor:"pointer",fontSize:'32px',marginRight:'40px'}}></ShoppingCartOutlined>
 </Badge>
 <Drawer  title="Drawer" 
//  visible={true}  
 closable={true}  onClose={onClose} open={open}
 >
  <h1>hello</h1>
 </Drawer>
 </div>
)
}


export default  Header