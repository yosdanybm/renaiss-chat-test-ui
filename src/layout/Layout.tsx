import React, { useEffect } from 'react';
import { Layout as LayoutAntd } from 'antd';
import Header from '../common/components/Header/Header';
import './layout.css'
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import SettingDrawer from '../common/components/SettingDrawer/SettingDrawer';

const { Content } = LayoutAntd;

const Layout: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isHomeRoute = location.pathname === '/home';

    useEffect(() => {
        navigate(sessionStorage.getItem('apikey') ? '/home' : '/')
    }, [])

    return (
        <LayoutAntd className="layout">
            {isHomeRoute && <Header />}
            <Content className={`content ${!isHomeRoute && 'content-home'}`} >
                <Outlet />
            </Content>
            <SettingDrawer />
        </LayoutAntd>
    )
};

export default Layout;
