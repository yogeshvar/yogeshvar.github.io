import React from 'react';
import pfp from './pfp.png'
import { Avatar, Typography } from 'antd';
import './Header.css';

const { Title } = Typography;

function Header() {
  const IMAGE_URL = "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=4800"
  return (
    <div className="Header">
      <img className="splash" src={IMAGE_URL} alt="background" />
      <Avatar shape="square" className='square' size={115}>
        <img className='square-img' src={pfp} alt="profile" />
      </Avatar>
      {/* make a div that's center of the page */}
      <div className="center">
        <Title className="custom-title" level={2}>Yogeshvar Senthilkumar</Title>
        <div>Welcome to my <b>Notion.</b></div>
      </div>

    </div>
  );
}

export default Header;
