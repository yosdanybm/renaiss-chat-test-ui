/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Drawer, Select, Space, Divider, Row, Col, Slider, InputNumber } from 'antd';
import { useAppState, useAppDispatch } from '../../../redux/store';
import { changeSettingDrawer } from '../../../redux/userSlice';
import { useListModelsOpenAI } from '../../../modules/home/hooks/useListModelsOpenAI';
import { updateModel, updateTemperature } from '../../../redux/chatSlice';

const SettingDrawer: React.FC = () => {
    const dispatch = useAppDispatch();
    const { user: { showSettingDrawer }, chat: { model, temperature } } = useAppState((state) => state);
    const { models } = useListModelsOpenAI();

    const modelOptions = models.map((model: any) => ({
        label: model.id,
        value: model.id,
        disabled: !['gpt-3.5-turbo', 'gpt-3.5-turbo-0301'].includes(model.id),
    }));

    const onChange = (newValue: number | null) => {
        if (!newValue || isNaN(newValue)) {
            return;
        }
        dispatch(updateTemperature(newValue || 0));
    };

    const onClose = () => {
        dispatch(changeSettingDrawer(false));
    };

    const handleChange = (value: string) => {
        dispatch(updateModel(value));
      };

    return (
        <Drawer title="Configuración" placement="right" onClose={onClose} open={showSettingDrawer}>
            <Space direction="vertical" align="center" style={{ width: '100%' }}>
                <Divider style={{ width: 300, marginTop: 2, marginBottom: 4 }}>Modelo</Divider>
                <Select
                    size="large"
                    defaultValue={model}
                    onChange={handleChange}
                    style={{ width: 300 }}
                    options={modelOptions}
                />
                <Divider style={{ width: 300, marginTop: '40px', marginBottom: 4 }}>Temperatura</Divider>
                <Row>
                    <Col span={16}>
                        <Slider
                            min={0}
                            max={2}
                            step={0.01}
                            onChange={onChange}
                            value={typeof temperature === 'number' ? temperature : 0}
                            style={{ width: 180 }}
                        />
                    </Col>
                    <Col span={4}>
                        <InputNumber
                            min={0}
                            max={2}
                            step={0.01}
                            style={{ margin: '0 30px', width: '64px' }}
                            value={temperature}
                            onChange={onChange}
                        />
                    </Col>
                </Row>
            </Space>
        </Drawer>
    );
};

export default SettingDrawer;
