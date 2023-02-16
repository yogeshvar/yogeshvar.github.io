import { Col, Row, Timeline } from 'antd';
import React from 'react';
import babyGif from './gifs/newborn.gif';
import blackBoard from './gifs/blackboard.gif';
import briefCase from './gifs/briefcase.gif';
import graduate from './gifs/mortarboard.gif';
import college from './gifs/podcast.gif';
import working from './gifs/virus.gif';
import './Summary.css';
import { Typography } from 'antd';

const { Title } = Typography;

// click on onwheel event to enlarge the image



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
        <Timeline mode="alternate" className='custom-timeline'
            items={[
                {
                    dot: (<div className='custom-dot'>
                        <img src={babyGif} alt='baby' className='custom-dot-img' />
                    </div>),
                    children: (
                        <Col span={18} style={{ flex: 'none' }}>
                            <Title className='title' level={4}>September 1996</Title>
                            <div className='text'><i>I was born in Salem, Tamilnadu.</i></div>
                            <div>📸 </div>
                            <img src='https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800' alt='background' className='image' width={150} height={150} />
                        </Col>
                    )
                },
                {
                    dot: (<div className='custom-dot'>
                        <img src={blackBoard} alt='blackboard' className='custom-dot-img' />
                    </div>),
                    children: (
                        <Col span={16} offset={8}>
                            <Title className='title start-align' level={4}>June 1998 - March 2014</Title>
                            <div className='text start-align'>
                                <div><i>Schooling:</i></div>
                                <div className='text-content start-align'><i>1st Grade - 9th Grade @ SSBM, Salem</i></div>
                                <div className='text-content'><i>Graduated Secondary School with 85% @ Golden Gates, Salem</i></div>
                                <div className='text-content'><i>Graduated High School with 90% @ Golden Gates, Salem</i></div>
                            </div>
                        </Col>
                    )
                }, {
                    dot: (<div className='custom-dot'>
                        <img src={college} alt='college' className='custom-dot-img' />
                    </div>),
                    children: (
                        <Col span={12} style={{ flex: 'none' }}>
                            <Title className='title' level={4}>August 2014</Title>
                            <div className='text'>
                                <div><i>Joined Bachelor of Engineering in Computer Science</i></div>
                            </div>
                        </Col>
                    )
                }, {
                    dot: (<div className='custom-dot'>
                        <img src={briefCase} alt='briefCase' className='custom-dot-img' />
                    </div>),
                    children: (
                        <Col span={16} offset={8}>
                            <Title className='title start-align' level={4}>May 2016 - June 2016</Title>
                            <div className='text'>
                                <div className='text-content start-align'><i>Summer Intern @ </i> <a href='https://www.google.com'>Health Care Innovation Centre, Indian Institue of Technology, Chennai.</a></div>
                                <div className='text-content start-align'><i>Application Developer</i> for a wearable device (<a href='https://google.com'>VitalSens</a>)</div>
                            </div>
                        </Col>
                    )
                }, {
                    dot: (<div className='custom-dot'>
                        <img src={working} alt='working' className='custom-dot-img' />
                    </div>),
                    children: (
                        <Col span={18} style={{ flex: 'none' }}>
                            <Title className='title' level={4}>March 2017 - May 2017</Title>
                            <div className='text'>
                                <div className='text-content'>Experienced Fresher Program @ <a href='http://gyanmatrix.com'>Gyanmatrix</a></div>
                                <div className='text-content'><i>A special program designed for freshers to teach them what's the trend in the software industry and work culture. (<a href='https://gyanmatrix.com'>More about EFP</a>)</i></div>
                            </div>
                        </Col>
                    )
                },
                {
                    dot: (<div className='custom-dot'>
                        <img src={briefCase} alt='briefCase' className='custom-dot-img' />
                    </div>),
                    children: (
                        <Col span={16} offset={8}>
                            <Title className='title start-align' level={4}>May 2017 - December 2017</Title>
                            <div className='text'>
                                <div className='text-content start-align'>Associate Trainee @ <a href='http://gyanmatrix.com'>Gyanmatrix</a></div>
                                <div className='text-content start-align'><b>Super Docs:</b><i>Making mobile and tablet-compatible websites only with the help of CSS</i>
                                    <div className='text-content start-align'><code>Tech Stack:</code> HTML, CSS</div>
                                </div>
                            </div>
                        </Col>
                    )
                },
                {
                    dot: (<div className='custom-dot'>
                        <img src={briefCase} alt='briefCase' className='custom-dot-img' />
                    </div>),
                    children: (
                        <Col span={18} style={{ flex: 'none' }}>
                            <Title className='title' level={4}>January 2018 - April 2019</Title>
                            <div className='text'>
                                <div className='text-content'>Associate Software Engineer - Full Stack  @ <a href='http://gyanmatrix.com'>Gyanmatrix</a></div>
                                <div className='text-content'><b>Coach:</b><i>An online platform where Teachers and Students will onboard themselves and take online classes.</i>
                                    <div className='text-content'><code>Tech Stack:</code> React, Redux, Node, Express, MongoDB, AWS, Java, LESS, Typescript, PHP(Symfony), Airflow, Docker, Kubernetes, MSSQL, JWT</div>
                                </div>
                            </div>
                        </Col>
                    )
                },
                {
                    dot: (<div className='custom-dot'>
                        <img src={graduate} alt='graduate' className='custom-dot-img' />
                    </div>),
                    children: (
                        <Col span={16} offset={8}>
                            <Title className='title start-align' level={4}>May 2018</Title>
                            <div className='text start-align'>
                                <div className='text-content start-align'><i>Graduated Bachelors with 7.3 CGPA</i></div>
                                <div className='start-align'>📸 </div>
                                <img src='https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800' alt='background' className='center start-align' width={150} height={150} />
                            </div>
                        </Col>
                    )
                },
                {
                    dot: (<div className='custom-dot'>
                        <img src={briefCase} alt='briefCase' className='custom-dot-img' />
                    </div>),
                    children: (
                        <Col span={18}>
                            <Title className='title start-align' level={4}>June 2019</Title>
                            <div className='text'>
                                <div className='text-content start-align'>Professional Trainer @ <a href='http://gyanmatrix.com'>Tektutor</a></div>
                                <div className='text-content start-align'><i>Teaching and training college graduates on Clean Code Practices, Design Patterns, CI/CD and latest technologies such as Docker, K8s (<a href='https://google.com'>More...</a>)</i>
                                </div>
                            </div>
                        </Col>
                    )
                },
                {
                    dot: (<div className='custom-dot'>
                        <img src={briefCase} alt='briefCase' className='custom-dot-img' />
                    </div>),
                    children: (
                        <Col span={16} offset={8}>
                            <Title className='title' level={4}>May 2019 - November 2020</Title>
                            <div className='text start-align'>
                                <div className='text-content start-align'>Software Engineer  @ <a href='http://gyanmatrix.com'>Gyanmatrix</a></div>
                                <div className='text-content start-align'>
                                    <div><i>Working on Coach. Also supporting,</i></div>
                                    <div><b>Login-Fulfillment: </b><i>Basic Common Auth Sign-in for two different legacy systems.</i></div>
                                    <div className='text-content'><code>Tech Stack:</code> AWS (Cognito, Lambda, Gateway <i>predominatly</i>...), Terraform, React, Typescript, Nodejs, PHP, Docker, MSSQL, MYSQL, CyPress,JWKS</div>
                                </div>
                            </div>
                        </Col>
                    )
                },
                {
                    dot: (<div className='custom-dot'>
                        <img src={briefCase} alt='briefCase' className='custom-dot-img' />
                    </div>),
                    children: (
                        <Col span={18}>
                            <Title className='title start-align' level={4}>May 2019 - January 2021</Title>
                            <div className='text'>
                                <div className='text-content start-align'>Professional Trainer @ <a href='http://gyanmatrix.com'>Gyanmatrix</a></div>
                                <div className='text-content start-align'><i>Teaching and training college graduates on Software Operability, Agile, CI/CD and latest technologies such as Docker, K8s (<a href='https://google.com'>More...</a>)</i>
                                </div>
                            </div>
                        </Col>
                    )
                },
                {
                    dot: (<div className='custom-dot'>
                        <img src={briefCase} alt='briefCase' className='custom-dot-img' />
                    </div>),
                    children: (
                        <Col span={16} offset={8}>
                            <Title className='title' level={4}>August 2019 - November 2020</Title>
                            <div className='text start-align'>
                                <div className='text-content start-align'>Software Engineer  @ <a href='http://gyanmatrix.com'>Gyanmatrix</a></div>
                                <div className='text-content start-align'>
                                    <div><i>Working on a survey system with various customisation.</i></div>
                                    <div className='text-content'><code>Tech Stack:</code> AWS (AppSync, Cognito), Github Actions, Nodejs, Docker, GraphQL, Terraform, React, Typescript, Nodejs, Docker</div>
                                </div>
                            </div>
                        </Col>
                    )
                },
                {
                    dot: (<div className='custom-dot'>
                        <img src={briefCase} alt='briefCase' className='custom-dot-img' />
                    </div>),
                    children: (
                        <Col span={18}>
                            <Title className='title start-align' level={4}>May 2019 - January 2021</Title>
                            <div className='text start-align'>
                                <div className='text-content start-align'>Software Engineer  @ <a href='http://gyanmatrix.com'>Gyanmatrix</a></div>
                                <div className='text-content start-align'>
                                    <div><b>Classroom: </b><i>Working on a WebRTC application with audio/video capabilities full-fledged classroom application for <a href='https://learnship.com'>Learnship</a></i></div>
                                    <div className='text-content'><code>Tech Stack:</code>React, Lightstreamer, Flux, Redux, Typescript, Nodejs, Docker, MongoDB, Java.</div>
                                </div>
                            </div>
                        </Col>
                    )
                },
                {
                    dot: (<div className='custom-dot'>
                        <img src={graduate} alt='graduate' className='custom-dot-img' />
                    </div>),
                    children: (
                        <Col span={16} offset={8}>
                            <Title className='title start-align' level={4}>June 2021 - Present</Title>
                            <div className='text start-align'>
                                <div className='text-content start-align'>Master of CS @ <a href='https://google.com'>UniAdelaide</a></div>
                                <div>GPA: 6.22</div>
                                <div>📸 </div>
                                <img src='https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800' alt='background' className='image' width={150} height={150} />
                            </div>
                        </Col>
                    )
                },
            ]}>
        </Timeline>
    </>
)

export default Summary;
