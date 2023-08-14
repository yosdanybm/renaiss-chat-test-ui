import React from 'react';
import { Card, Input, Typography } from 'antd';
import './systemCard.css'
import Icon from '@ant-design/icons';
/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as SendSvg } from "../../../../assets/icons/Send.svg";

const { Title } = Typography;

const SystemCard: React.FC = () => {
    return (
        <Card className="custom-card card-system">
            <Title className="card-system-title" level={4}>Sistema</Title>
            <Title className="card-system-subtitle" level={5}>
                Para conseguir una respuesta adecuada a tus necesidades, escribe un prompt para el sistema.
            </Title>
            <Input
                className="card-input"
                size="large"
                placeholder="Insertar prompt"
                suffix={<Icon
                    style={{ color: 'transparent' }}
                    component={SendSvg} />
                }
            />
        </Card>
    )
};

export default SystemCard;
