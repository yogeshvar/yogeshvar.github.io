import { Col, Row } from 'antd';
import React from 'react';
import './Summary.css';
// import { Avatar, Typography } from 'antd';

// const { Title } = Typography;

const Summary: React.FC = () => (
    <>
        <Row className='max-width' justify={'start'} >
            <Col span={24}>
                <div className='title start-align'>
                    Summary
                </div>
            </Col>
        </Row>
        <Row className='max-width' justify={'start'} >
            <Col span={24}>
                <div className='text start-align'>
                    A human being still wandering about which specialization I would fall in love with (Machine Learning or BlockChain or Software Development or Data Scientist), yet have an ever-lasting love for programming and fonts on a black screen. I like to learn and explore new technologies. I possess proven communication skills and a strong work ethic. In my spare time, I'm interested in tech, AI, Gaming, Football, and Cooking.
                </div>
            </Col>
        </Row>
        <Row className='max-width start-align' justify='start'>
            <Col span={24}>
                <div className='title'> Life so far...</div>
            </Col>
        </Row>
        {/*         
        <Row className='max-width start-align' justify='space-around'>
            <Col span={7} style={{ flex: 'none' }}>
                <Title className='title' level={4}>September 1996</Title>
                <div className='text'><i>I was born in Salem, Tamilnadu.</i></div>
                <div>📸 </div>
                <img src='https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800' alt='background' className='image' width={150} height={150} />
            </Col>
            <Col span={7} style={{ marginTop: '35px' }}>
                <Divider plain style={{ borderColor: 'grey' }} />
                <Title className='title' level={4}>June 1998 - March 2014</Title>
                <div className='text'>
                    <div><i>Schooling:</i></div>
                    <div className='text-content start-align'><i>1st Grade - 9th Grade @ SSBM, Salem</i></div>
                    <div className='text-content'><i>Graduated Secondary School with 85% @ Golden Gates, Salem</i></div>
                    <div className='text-content'><i>Graduated High School with 90% @ Golden Gates, Salem</i></div>
                </div>
                <Divider plain style={{ borderColor: 'grey' }} />
            </Col>
        </Row>
        <Row className='max-width start-align' justify='space-around'>
            <Col span={7} style={{ flex: 'none' }}>
                <Divider plain style={{ borderColor: 'grey' }} />
                <Title className='title' level={4}>August 2014</Title>
                <div className='text'>
                    <div><i>Joined Bachelor of Engineering in Computer Science</i></div>
                </div>
                <Divider plain style={{ borderColor: 'grey' }} />
            </Col>
            <Col span={7} style={{ marginTop: '15px' }}>
                <Divider plain style={{ borderColor: 'grey' }} />
                <Title className='title' level={4}>May 2016 - June 2016</Title>
                <div className='text'>
                    <div className='text-content'><i>Summer Intern @ </i> <a href='https://www.google.com'>Health Care Innovation Centre, Indian Institue of Technology, Chennai.</a></div>
                    <div className='text-content'><i>Application Developer</i> for a wearable device (<a href='https://google.com'>VitalSens</a>)</div>
                </div>
                <Divider plain style={{ borderColor: 'grey' }} />
            </Col>
        </Row>
        <Row className='max-width start-align' justify='space-around'>
            <Col span={7} style={{ flex: 'none' }}>
                <Divider plain style={{ borderColor: 'grey' }} />
                <Title className='title' level={4}>March 2017 - May 2017</Title>
                <div className='text'>
                    <div className='text-content'>Experienced Fresher Program @ <a href='http://gyanmatrix.com'>Gyanmatrix</a></div>
                    <div className='text-content'><i>A special program designed for freshers to teach them what's the trend in the software industry and work culture. (<a href='https://gyanmatrix.com'>More about EFP</a>)</i></div>
                </div>
                <Divider plain style={{ borderColor: 'grey' }} />
            </Col>
            <Col span={7} style={{ marginTop: '50px' }}>
                <Divider plain style={{ borderColor: 'grey' }} />
                <Title className='title' level={4}>May 2016 - June 2018</Title>
                <div className='text'>
                    <div className='text-content'><i>Summer Intern @ </i> <a href='https://www.google.com'>Health Care Innovation Centre, Indian Institue of Technology, Chennai.</a></div>
                    <div className='text-content'><i>Application Developer</i> for a wearable device (<a href='https://google.com'>VitalSens</a>)</div>
                </div>
                <Divider plain style={{ borderColor: 'grey' }} />
            </Col>
        </Row> */}
    </>
)

export default Summary;
