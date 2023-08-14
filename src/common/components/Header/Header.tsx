import React from 'react';
import { Button, Layout, Row, Space } from 'antd';
import Icon, { LeftOutlined, SettingOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppState } from '../../../redux/store';
import { changeSettingDrawer, changeSidebar } from '../../../redux/userSlice';
import { Sidebar } from '../../../assets/icons/Sidebar/Sidebar';
import './header.css'
import { useNavigate } from 'react-router-dom';

const { Header: HeaderAntd } = Layout;

const Header: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { hiddenSidebar } = useAppState((state) => state.user);

    const handleToggleSidebar = () => {
        dispatch(changeSidebar(!hiddenSidebar))
    };

    const showDrawer = () => {
        dispatch(changeSettingDrawer(true));
    };

    const handleGoBack = () => {
        navigate('/');
    }

    const renderSidebar = () => <Sidebar color={hiddenSidebar ? '#F97316' : 'white'} />;
    
    return (
        <HeaderAntd className="header">
            <Row style={{ width: '100%' }} align={'middle'} justify={'space-between'}>
                <Space align="center">
                    <Button size="large" icon={<LeftOutlined />} onClick={handleGoBack}>Atrás</Button>
                    <Button
                        style={{ background: hiddenSidebar ? '#F8FAFC' : 'transparent' }}
                        size="large"
                        onClick={handleToggleSidebar}
                        icon={<Icon style={{ color: 'transparent', fontSize: '4px' }} component={renderSidebar} />}
                    />
                </Space>
                <Button size="large" icon={<SettingOutlined />} onClick={showDrawer} />
            </Row>
        </HeaderAntd>
    )
};

export default Header;
