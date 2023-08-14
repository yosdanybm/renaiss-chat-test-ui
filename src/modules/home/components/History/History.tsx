/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Avatar, Card, List, Row, Typography } from 'antd';
import Icon, { SearchOutlined } from '@ant-design/icons';
/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as TimeQuarterSvg } from "../../../../assets/icons/time-quarter.svg";
import { ReactComponent as TrashSvg } from "../../../../assets/icons/trash.svg";
import { ReactComponent as CheckSvg } from "../../../../assets/icons/check.svg";
import { ReactComponent as CloseSvg } from "../../../../assets/icons/close.svg";
import { ChatType } from '../../../../interfaces/openAI/openAI';
import { useAppState, useAppDispatch } from '../../../../redux/store';
import { updateHistory } from '../../../../redux/chatSlice';
import './History.css'

const { Title } = Typography;

const History: React.FC = () => {
    const { history } = useAppState((state) => state.chat);
    const dispatch = useAppDispatch();
    const [selectedItem, setSelectedItem] = useState<ChatType | null>(null);

    const handleItemClick = (item: ChatType) => {
        setSelectedItem(item);
    };

    const handleItemActionClick = (itemIndex: number) => {
        const newList = [...history];
        const updatedItem = { ...newList[itemIndex], showConfirm: !newList[itemIndex].showConfirm };
        newList[itemIndex] = updatedItem;
        dispatch(updateHistory(newList))
    };

    const handleConfirmClick = (itemIndex: number) => {
        const newList = [...history];
        dispatch(updateHistory(newList.filter((_, index) => index !== itemIndex)))
    };

    const handleCancelClick = (itemIndex: number) => {
        const newList = [...history];
        const updatedItem = { ...newList[itemIndex], showConfirm: false };
        newList[itemIndex] = updatedItem;
        dispatch(updateHistory(newList))
    };

    return (
        <Card
            className="custom-card card-history"
            size="small"
            title={
                <Title className="card-title" level={4}>Historial de Búsquedas</Title>
            }
        >
            <div
                id="scrollableDiv"
                style={{
                    height: 500,
                    overflow: 'auto',
                }}
            >
                {/* <InfiniteScroll
                    dataLength={data.length}
                    hasMore={data.length < 50}
                    loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                    endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                    scrollableTarget="scrollableDiv"
                > */}
                    <List
                        className="list-history"
                        itemLayout="horizontal"
                        dataSource={history}
                        bordered={false}
                        renderItem={(item: ChatType, index: number) => (
                            <List.Item
                                className={`list-item-history ${selectedItem === item ? 'selected' : ''}`}
                                onClick={() => handleItemClick(item)}
                                actions={[
                                    !item.showConfirm && (
                                        <Icon
                                            key="list-delete"
                                            className="icon-item-action"
                                            component={TrashSvg}
                                            onClick={() => handleItemActionClick(index)}
                                        />
                                    ),
                                    item.showConfirm && (
                                        <>
                                            <Icon
                                                key="list-confirm"
                                                className="icon-item-action"
                                                component={CheckSvg}
                                                onClick={() => handleConfirmClick(index)}
                                            />
                                            <Icon
                                                key="list-cancel"
                                                className="icon-item-action"
                                                component={CloseSvg}
                                                onClick={() => handleCancelClick(index)}
                                            />
                                        </>
                                    )
                                ]}
                            >
                                <List.Item.Meta
                                    avatar={<Avatar className="avatar-item-history" icon={<SearchOutlined />} />}
                                    title={item?.name}
                                    description={
                                        <Row align={'middle'}>
                                            <Icon
                                                className="icon-item-history"
                                                component={TimeQuarterSvg} />
                                            <span className="description-item-history">
                                                {dayjs(item.time).format('MM/DD/YYYY h:mm a')}
                                            </span>
                                        </Row>
                                    }
                                />
                            </List.Item>
                        )}
                    />
                {/* </InfiniteScroll> */}
            </div>
        </Card>
    )
};

export default History;
