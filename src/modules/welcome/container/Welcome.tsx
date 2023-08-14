/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../redux/store";
import { addUser } from "../../../redux/userSlice";
import { setApiKeyGlobal } from '../../../data/api/request';

const Welcome = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const onFinish = (values: any) => {
        if (values.username)  dispatch(addUser(values.username));
       
        if (values.apiKey) {
            setApiKeyGlobal(values.apiKey);
            sessionStorage.setItem('apikey', values.apiKey)
            navigate('/home');
        }
    };

    type FieldType = {
        username?: string;
        apiKey?: string;
    };

    return (
        <Form
            layout="vertical"
            style={{ width: 400 }}
            onFinish={onFinish}
            size="large"
        >
            <Form.Item<FieldType>
                label="Nombre"
                name="username"
            >
                <Input placeholder="Su nombre" />
            </Form.Item>

            <Form.Item<FieldType>
                label="API key - Open AI"
                name="apiKey"
                tooltip="Agregue un api-key solo para testear la app, después eliminala"
                rules={[{ required: true, message: 'Inserte su API key de OpenAI!' }]}
            >
                <Input placeholder="API key"/>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
};

export default Welcome
