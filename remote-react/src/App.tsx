import React from 'react';
import Sidebar from './common/layout/sidebar/Index';
import Home from './modules/home/Index';
import './common/assets/scss/styles.scss';
import { Col, Row } from 'antd';
import PageLayout from './common/layout/Layout';

function App() {


  return (
    <Row style={{ width: '100vw', height: '100vh' }}>
      <Col span={5} style={{ border: '1px solid #000' }}>
        <Sidebar />
      </Col>
      <Col span={19}>
        <Home />
      </Col>
      {/* <PageLayout /> */}
    </Row>
  );
}

export default App;
