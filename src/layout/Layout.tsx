import React, { ReactNode } from 'react';
import { Layout as LayoutAntd } from 'antd';
import Header from '../common/components/Header/Header';
import './layout.css'

const { Content } = LayoutAntd;

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
    <LayoutAntd className="layout">
        <Header />
        <Content className="content">
            {children}
        </Content>
    </LayoutAntd>
);

export default Layout;
