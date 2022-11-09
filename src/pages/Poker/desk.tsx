import React, { useState, useEffect } from 'react';
import { useModel } from '@umijs/max';

import { Image, List, Space, Avatar, AutoCenter, Divider } from 'antd-mobile';

import styles from './index.less';

const DeskPage: React.FC = (props) => {
  const { Current_Dest_Person_List, getCurrentDeskPersonListInfo, Desk_Info } = useModel('desk_model');

  // 获取桌上的用户信息 
  getCurrentDeskPersonListInfo(Desk_Info);

  const demoAvatarImages = [
    'https://images.unsplash.com/photo-1548532928-b34e3be62fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
    'https://images.unsplash.com/photo-1542624937-8d1e9f53c1b9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
  ];

  // 处理当前桌子用户的情况
  let loginPersonListItems = [];
  for (let i = 0; i < Current_Dest_Person_List.length; i++) {
    loginPersonListItems.push(
      {
        id: i,
        avatar:
          'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9',
        name: Current_Dest_Person_List[i].name,
        // description: '当前有' + loginPersonListItems[i].peson_cnt + '个人进入',
      },
    );
  }

  return (
    // , overflowY: 'scroll'
    <div style={{ width: '100%', height: '100%', boxSizing: 'border-box', padding: '120px 0 0' }}>

      {/* <List header={Desk_Info.name} style={{ height: '200px' }}>
        {loginPersonListItems.map(person => (
          <List.Item
            key={person.name}
            prefix={
              <Image
                src={person.avatar}
                // style={{ borderRadius: 20 }}
                fit='cover'
                width={40}
                height={40}
              />
            }
            description={person.description}
          >
            {person.name}
          </List.Item>
        ))}
      </List> */}

      <div style={{ height: '120px', margin: '-120px 0 0' }}>
        <div style={{ height: '100%', border: '0px solid blue', padding: '15px 0 0 15px' }}>
          <div>当前桌子：{Desk_Info.name}</div>
          <Space block wrap>
            {loginPersonListItems.map(person => (
              <div style={{ textAlign: 'center' }}><Avatar src={demoAvatarImages[0]} />{person.name}</div>
            ))}
          </Space>
        </div>

      </div>

      <div style={{ border: '0px solid red', width: '100%', height: '100%' }}>

        <table className={styles.desktable}>
          <tr><td>1</td><td style={{ width: '60%', height: '100px', textAlign: 'center' }}>2</td><td>3</td></tr>
          <tr><td>11</td><td rowSpan={2} style={{ textAlign: '-webkit-center' }}>
            <div style={{ border: '0px solid red', width: '50px' }}>
              <Space direction='vertical'>
                <img style={{ transform: 'rotate(90deg)' }} src="/public/img/poker/heart_1.jpg" width="42" height="42"></img>
                <img style={{ transform: 'rotate(90deg)' }} src="/public/img/poker/heart_2.jpg" width="42" height="42"></img>
                <img style={{ transform: 'rotate(90deg)' }} src="/public/img/poker/heart_3.jpg" width="42" height="42"></img>
                <img style={{ transform: 'rotate(90deg)' }} src="/public/img/poker/heart_4.jpg" width="42" height="42"></img>
                <img style={{ transform: 'rotate(90deg)' }} src="/public/img/poker/heart_5.jpg" width="42" height="42"></img>
              </Space>
            </div>

          </td><td>13</td></tr>
          <tr><td>21</td><td>23</td></tr>
          <tr><td>31</td><td style={{ width: '60%', height: '100px', textAlign: 'center' }}>
            <Space>
              <img src="/public/img/poker/diamond_1.jpg" width="42" height="42"></img>
              <img src="/public/img/poker/diamond_2.jpg" width="42" height="42"></img>
            </Space>
          </td><td>33</td></tr>
        </table>

      </div>

    </div>

  );

};

export default DeskPage;
