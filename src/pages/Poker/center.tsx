import React, { useState, useEffect } from 'react';
import { useModel } from '@umijs/max';

import { Image, List, Button } from 'antd-mobile';
import styles from './index.less';

const CenterPage: React.FC = (props) => {
  // 从逻辑模型里导出逻辑
  const { Desk_List, createDeskInfo } = useModel('center_model');
  const { setTabbarActiveKeyInfo } = useModel('index_model');
  const { setDeskInfoCallback } = useModel('desk_model');

  // 处理所有桌子情况
  let deskListItems = [];
  for (let i = 0; i < Desk_List.length; i++) {
    deskListItems.push(
      {
        id: i,
        avatar:
          'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
        name: Desk_List[i].name,
        description: '当前有' + Desk_List[i].peson_cnt + '个人进入',
      },
    );
  }

  return (

    <div style={{ width: '100%', height: '100%', overflowY: 'scroll' }}>

      <List header={
        <div>
          桌子列表
          <Button size='mini' color='primary' onClick={() => {
            createDeskInfo();
          }}
          >
            新建
          </Button>
        </div>
      } style={{ height: '200px' }}>
        {deskListItems.map(deskItem => (
          <List.Item
            key={deskItem.name}
            prefix={
              <Image
                src={deskItem.avatar}
                // style={{ borderRadius: 20 }}
                fit='cover'
                width={40}
                height={40}
              />
            }
            description={deskItem.description}
            onClick={(e) => {
              setDeskInfoCallback(deskItem);
              setTabbarActiveKeyInfo('/desk');
            }}
          >
            {deskItem.name}
          </List.Item>
        ))}
      </List>

    </div>

  );

};

export default CenterPage;
