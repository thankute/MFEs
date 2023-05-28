import React from 'react'
import { Col, Menu, Row, } from 'antd';
import Logo from '../../../assets/image/svgexport-1.svg';
import { ReactComponent as Home } from '../../../assets/image/svgexport-2.svg';
import { ReactComponent as Search } from '../../../assets/image/svgexport-3.svg';
import { ReactComponent as Explore } from '../../../assets/image/svgexport-4.svg';
import { ReactComponent as Reel } from '../../../assets/image/svgexport-5.svg';
import { ReactComponent as Message } from '../../../assets/image/svgexport-6.svg';
import { ReactComponent as Heart } from '../../../assets/image/svgexport-7.svg';
import { ReactComponent as Create } from '../../../assets/image/svgexport-8.svg';
import { ReactComponent as More } from '../../../assets/image/svgexport-9.svg';
import Avatar from '../../../assets/image/avatar.jpg';


import '../scss/sidebar.scss';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';

const Sidebar = () => {
    const items: MenuItemType[] = [
        {
            label: "Home",
            key: "home",
            icon: <Home />
        },
        {
            label: "Search",
            key: "Search",
            icon: <Search />
        },
        {
            label: "Explore",
            key: "Explore",
            icon: <Explore />
        },
        {
            label: "Reel",
            key: "Reel",
            icon: <Reel />
        },
        {
            label: "Message",
            key: "Message",
            icon: <Message />
        },
        {
            label: "Heart",
            key: "Heart",
            icon: <Heart />
        },
        {
            label: "Create",
            key: "Create",
            icon: <Create />
        },
        {
            label: "Profile",
            key: "Profile",
            icon: <img src={Avatar} alt='avatar' style={{ width: 28, height: 28, borderRadius: '50%', objectFit: 'cover' }} />
        },
    ]
    return (
        <div className='sidebar'>
            <Row style={{ padding: '40px 24px 32px 24px' }}>
                <img src={Logo} alt="logo" />
            </Row>
            <Row >
                <Menu
                    mode="inline"
                    items={items}
                />
            </Row>
            <Menu
                className='more'
                style={{ marginTop: 64 }}
                mode="inline"
                items={[{
                    label: "More",
                    key: "More",
                    icon: <More />
                },]}
            />
        </div>
    )
}

export default Sidebar