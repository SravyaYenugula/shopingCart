import { Form, Input, Select, Modal, Table, Button, Tag, List, Card, Typography, Badge, Rate, message, Drawer } from "antd";
import { useNavigate } from "react-router-dom";

import React, { useState } from 'react';




function Header(prop){

return(
  <div className="appheader"> 
  <div onClick={()=>prop.handelShow(false)} ><span style={{color:"white",fontWeight:'bold'}}>Shopping Cart App</span></div>
   <div onClick={()=>prop.handelShow(true)}><span style={{color:"white",fontWeight:'bold'}}>Cart
  <sup style={{fontWeight:"bold"}}> {prop.count}</sup>
  </span></div>  

  </div>


)
}



export default  Header