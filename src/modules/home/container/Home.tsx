import React from 'react';
import { Row, Space } from 'antd';
import History from '../components/History/History';
import Chat from '../components/Chat/Chat';
import SystemCard from '../components/SystemCard/SystemCard';
import './home.css'
import { useAppState } from '../../../redux/store';

const Home: React.FC = () => {
    const { hiddenSidebar } = useAppState((state) => state.user);

    return (
        <Row className="container">
            {!hiddenSidebar && (
                <Space className={`sidebar-container ${hiddenSidebar ? 'visible' : ''}`} direction="vertical" size="large" style={{ display: 'flex' }}>
                    <SystemCard />
                    <History />
                </Space>
            )}
            <Chat />
        </Row>
    )
};

export default Home;
