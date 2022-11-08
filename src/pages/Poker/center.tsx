import React, { useState, useEffect } from 'react';
import { useModel } from '@umijs/max';

import { Image, List, Button, Mask, DotLoading } from 'antd-mobile';
import styles from './index.less';

const CenterPage: React.FC = (props) => {
  // 从逻辑模型里导出逻辑
  const { Desk_List, createDeskInfo, enterDeskByDidCallback, visible, setVisible, deskItem } = useModel('center_model');
  const { setTabbarActiveKeyInfo } = useModel('index_model');
  const { setDeskInfoCallback } = useModel('desk_model');

  // 处理所有桌子情况
  let deskListItems = [];
  for (let i = 0; i < Desk_List.length; i++) {
    deskListItems.push(
      {
        id: Desk_List[i].id,
        avatar:'/public/img/poker_logo.webp',
        name: Desk_List[i].name,
        description: '当前有' + Desk_List[i].peson_cnt + '个人进入',
      },
    );
  }

  // 点击桌子的逻辑
  const enterDesk = (_deskItem) => {
    // 此处应该是调用加入对应桌子的API，如果加入不成功就应该提示错误
    // 加入不成功的情况可能是调API失败，也有可能是桌子加入不进去了，人太多等
    // console.log('_deskItem:', _deskItem);
    enterDeskByDidCallback(_deskItem);

    // 蒙板等待返回
    setVisible(true);
  }

  const enterDeskTab = () => {
    // 传参数到桌面
    setDeskInfoCallback(deskItem);
    // 调用框架层设置Tabs页
    setTabbarActiveKeyInfo('/desk');
  }

  return (
    <div style={{ width: '100%', height: '100%', overflowY: 'scroll' }}>
      <Mask visible={visible} opacity={'thick'} afterClose={() => {
        enterDeskTab();
      }}>
        <div className={styles.overlayContent}>加载中<DotLoading /></div>
      </Mask>
      <List header={
        <div>
          桌子列表
          <Button style={{ float: 'right' }} size='mini' color='primary' onClick={() => {
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
            onClick={enterDesk.bind(this, deskItem)}
          >
            {deskItem.name}
          </List.Item>
        ))}
      </List>
    </div>
  );

};

export default CenterPage;
