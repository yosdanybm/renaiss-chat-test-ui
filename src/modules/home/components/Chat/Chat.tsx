/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Button, Card, Divider, Input, Row, Space, Tooltip, Typography } from 'antd';
import Icon, { PlusCircleOutlined } from '@ant-design/icons';
/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as SendSvg } from "../../../../assets/icons/Send.svg";
import { ReactComponent as AISvg } from "../../../../assets/icons/ai.svg";
import './chat.css'
import { useAppState, useAppDispatch } from '../../../../redux/store';
import { useAskQuestionOpenAI } from '../../../../common/hooks/useAskQuestionOpenAI';
import { OpenAIChatMessage } from '../../../../interfaces/openAI/openAI';
import { useEffect } from 'react';
import { CodeBlock } from '../../../../common/components/Header/CodeBlock/CodeBlock';
import dayjs from 'dayjs';
import { updateConversation, updateHistory } from '../../../../redux/chatSlice';

const { Title } = Typography;

const Chat: React.FC = () => {
    const { user: { hiddenSidebar }, chat: { history, conversation } } = useAppState((state) => state);
    const dispatch = useAppDispatch();
    const { question, setQuestion, answer, loading, askQuestion } = useAskQuestionOpenAI();

    useEffect(() => {
        if (answer) {
            const updatedMessages = [...conversation];
            const lastMessageIndex = updatedMessages.length - 1;
            updatedMessages[lastMessageIndex] = {
                ...updatedMessages[lastMessageIndex],
                content: answer.content,
                time: answer.time,
            };
            dispatch(updateConversation(updatedMessages));
        }
    }, [answer]);

    const handleSendClick = () => {
        if (question) {
            const newUserMessage: OpenAIChatMessage = {
                role: 'user',
                content: question,
            };
            const newAssistantMessage: OpenAIChatMessage = {
                role: 'assistant',
                content: '',
            };
            dispatch(updateConversation([...conversation, newUserMessage, newAssistantMessage]));
            askQuestion('gpt-3.5-turbo');
            setQuestion('');
            // Update history
            if (conversation.length === 0) {
                const questionWords = question.split(" ");
                const chatName = questionWords.slice(0, 4).join(" ");
                const updatedHistory = [...history];
                updatedHistory.unshift({
                    name: chatName,
                    time: dayjs().format(),
                    showConfirm: false,
                });
                dispatch(updateHistory(updatedHistory));
            }
        }
    };

    const handleAIClick = () => {

    }

    const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSendClick();
        }
    };

    const renderMessageContent = (content: string) => {
        const parts = content.split(/(```[a-zA-Z]*\n[\s\S]*?\n```)/);
        return parts.map((part, index) => {
            if (part.startsWith('```')) {
                const codeLanguage = part.match(/```([a-zA-Z]*)/)?.[1] || 'jsx';
                return (
                    <CodeBlock code={part.slice(3, -3)} language={codeLanguage} />
                );
            } else {
                return (
                    <span key={index}>
                        {part.split(/(`[^`]+`)/).map((subPart, subIndex) => {
                            if (subPart.startsWith('`') && subPart.endsWith('`')) {
                                return <strong key={subIndex}>{subPart.slice(1, -1)}</strong>;
                            } else {
                                return subPart;
                            }
                        })}
                    </span>
                );
            }
        });
    };

    const handleNewChatClick = () => {
        const updatedHistory = [...history];
        updatedHistory.unshift({
            name: 'Nuevo Chat',
            time: dayjs().format(),
            showConfirm: false
        })
        dispatch(updateHistory(updatedHistory))
        dispatch(updateConversation([]));
    }

    return (
        <Card
            className="custom-card card-chat"
            size="small"
            title={
                <Title className="card-title" level={4}>OdamaChat</Title>
            }
            extra={
                <Button type="primary" size="large" icon={<PlusCircleOutlined />} onClick={handleNewChatClick}>
                    Nueva Búsqueda
                </Button>}
            style={{
                width: hiddenSidebar ? '100%' : 'calc(100% - 600px)',
                minWidth: '567px',
            }}
            bodyStyle={{
                background: '#F8FAFC',
                borderRadius: '0px',
                borderTop: '1px solid #f0f0f0',
                padding: 0,
            }}
        >
            <div
                id="scrollableDiv"
                style={{
                    height: 660,
                    overflow: 'auto',
                }}
            >
                <Space direction="vertical" size="middle" style={{ display: 'flex', padding: '30px 25px 30px 25px', }}>
                    {conversation.map((message: OpenAIChatMessage, index: number) => (
                        <Card
                            key={index}
                            className="custom-card card-chat-message-user"
                            bodyStyle={{ padding: '24px 27px' }}
                        >
                            {message.content ? (
                                <>
                                    <span className="username-message"
                                        style={{ color: message.role === 'user' ? '#10B981' : 'var(--color-primary)' }}>
                                        {message.role === 'user' ? 'Ana Clara' : 'OdamaChat'}
                                    </span>
                                    <span className="time-message">{dayjs().format('h:mm a')}</span>
                                    <Divider style={{ margin: '18px 0px 14px 0px' }} />
                                    <span className="body-message">{renderMessageContent(message.content)}</span>
                                </>
                            ) : (
                                <Row>
                                    <span className="username-message" style={{ color: 'var(--color-primary)' }}>OdamaChat</span>
                                    <div className="typing-animation">
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                        <span className="dot"></span>
                                    </div>
                                </Row>
                            )}

                        </Card>
                    ))}
                </Space>
            </div>
            <div className="container-send">
                <Input
                    size="large"
                    placeholder="Insertar prompt"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onPressEnter={handleInputKeyPress}
                    disabled={loading}
                    suffix={
                        <>
                            <Icon style={{ color: 'transparent' }} component={SendSvg} onClick={handleSendClick} />
                            <Tooltip title="Coming soon">
                                <Icon disabled style={{ color: 'transparent' }} component={AISvg} onClick={handleAIClick} />
                            </Tooltip>

                        </>
                    }
                />
            </div>
        </Card>
    )
};

export default Chat;

