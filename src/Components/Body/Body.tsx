import { Col, Row, Space } from 'antd';
import React from 'react';
import Summary from '../Summary/Summary';
import './Body.css';

const Body: React.FC = () => (
  <>
    <Space direction='vertical' size={20}>
      <Row className='body' justify={'start'} >
        <Col span={12}>
          <div className='title start-align'>
            👨🏻‍💻 Student @
            <a href="https://www.adelaide.edu.au">
              &nbsp;UniAdelaide
            </a>
          </div>
          <div className='course'>Masters of Computer Science</div>
        </Col>
        <Col span={12}>
          <div className='date end-align'>updated @ 15/02/2023</div>
        </Col>
      </Row>
      <Row className='max-width' justify={'start'} >
        <Col span={12} className='start-align'>
          <div className='email'>
            <a href="mailto:yogeshvar@icloud.com">
              📧 Email
            </a>
          </div>
        </Col>
        <Col span={12} className='end-align'>
          <div className='resume'>
            👨‍🦰 Resume
          </div>
        </Col>
      </Row>
      <Summary />
    </Space>
  </>
)

export default Body;
