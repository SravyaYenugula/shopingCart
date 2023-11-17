// import "./App.css";
import LayoutForm from "./Components/layout";
// import SecondForm from "./Components/footer";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from './Components/layout'
import React, { Component,useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Icon,Row,Col, Typography, Badge, Drawer } from 'antd';
import {ReconciliationOutlined,ShoppingOutlined ,ShopOutlined,ShoppingCartOutlined  } from "@ant-design/icons";
import Footer from "./Components/footer";
import Header from "./Components/Header"
import {} from "antd" 
import "./App.css"
// const { Header, Sider, Content } = Layout;


function App  () {
 return <div className="App">
 {/* <AppHeader/>
 <AppFooter/>
 <PageContent/> */}
 <Router>
                <Layout style={{ minHeight: '100vh' }}>

                 
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0, paddingLeft: 16 }}>
                        </Header>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                            {/* <Route exact path="/" component={Dashboard} />
                            <Route path="/meseros" component={Meseros} /> */}
                        </Content>

                    </Layout>

                </Layout>
            </Router>
  

 </div>
  };
 



export default App;
