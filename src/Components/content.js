import { Form, Input, Select, Modal, Table, Button, Tag } from "antd";
import { useNavigate } from "react-router-dom";

import { Row, Col, Space ,Image} from "antd";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
// import "./App.css";
import  { CaretLeftOutlined,CaretRightOutlined  } from '@ant-design/icons';

import "antd/dist/antd.css";

import Title from "antd/lib/skeleton/Title";
import { v4 as uuid } from "uuid";
import api from "./Apis/apis"


<CaretLeftOutlined />

const { Search } = Input;

const contentForm= (props) => {

 
    const columns=[
        {
          title: 'SkU',
          dataIndex: 'sku',
          key: 'sku',
        },
        {
          title: 'Item Name',
          dataIndex: 'name',
          key: 'name',
          width: '280px',
        },
        {
          title: 'Qty',
          dataIndex: 'qty',
          key: 'qty',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
          bordertop:'1px dashed #f00'

        },
        
        {
          title: 'Total',
          dataIndex: 'total',
          key: 'total',
        },
      ]
    
      const data=[
        {
          sku:'B00168SKYM',
          name:'Atom 60mm Green skateboard wheels(set of4)',
          qty:1,
       price:'29.95',
        total: '29.95',
         
        },
        {
          sku:'B00168SKYM',
          name:'Atom 60mm Green skateboard wheels(set of4)',
          qty:1,
       price:'29.95',
        total: '29.95',
        },
        {
          sku:'B00168SKYM',
          name:'Atom 60mm Green skateboard wheels(set of4)',
          qty:1,
       price:'29.95',
        total: '29.95',
         
        },  
       
      ]

      
      const onSearch = (value) => console.log(value);

  return (
     <div className="pagecontent">
    Header
  </div>
  );
};

export default contentForm;
