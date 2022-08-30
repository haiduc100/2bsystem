import { Image, Menu } from 'antd';
import { HomeOutlined, MailOutlined, InfoCircleOutlined, PhoneOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom'
function MenuAtd(props) {
    return (
        <div>
            <Menu mode="horizontal" defaultSelectedKeys={['home']} className="d-flex justify-between items-center">
                <Menu.Item>
                    <Image
                        preview={false}
                        width={100}
                        src="images/logo.png"
                    />
                </Menu.Item>

                <Menu.Item key="home" icon={<HomeOutlined />}>

                    <Link to='/'>
                        <span>Trang chủ</span>
                    </Link>

                </Menu.Item>

                <Menu.Item key="about" icon={<InfoCircleOutlined />}>
                    <Link to='/about'>
                        <span>  Giới thiệu</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="tecnology" icon={<MailOutlined />}>
                    <Link to='/about'>
                        <span> Giải pháp
                        </span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="news" icon={<MailOutlined />}>
                    <Link to='/about'>
                        <span>  Giới thiệu</span>
                    </Link>
                    Tin tức
                </Menu.Item>
                <Menu.Item key="experience" icon={<MailOutlined />}>
                    <Link to='/about'>
                        <span>  Năng lực - Kinh nghiệm</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="hire" icon={<MailOutlined />}>
                    <Link to='/about'>
                        <span> Tuyển dụng</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="contact" icon={<PhoneOutlined />}>
                    <Link to='/about'>
                        <span> Liên hệ</span>
                    </Link>
                </Menu.Item>
            </Menu>
        </div>
    );
}

export default MenuAtd;