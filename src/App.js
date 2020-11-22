import React from 'react';
import './App.css';
import CompAndProps from './components/CompAndProps';
import Button from './elements/Button';
import { Layout } from 'antd';
import 'antd/dist/antd.css';


const { Header, Content } = Layout;


function App() {
  return (
    <Layout>
    <Header> 
      <a href="/Register" ><Button  border="white" >Register</Button></a>
      <a href="/Login" ><Button  border="white" >Login</Button></a>
      <h1 className="logo">Kelompok 13</h1>    
    </Header>
    <Content >
      <div className="Konten">
        <CompAndProps bgcolor="#e5e5e5"/>
      </div>
    </Content>
  </Layout>
  );
}

export default App;

