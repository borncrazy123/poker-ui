import React, { useState, useEffect } from 'react';
import { useModel } from '@umijs/max';

import { Image, List, Space, Avatar, AutoCenter, Divider } from 'antd-mobile';

import styles from './index.less';

const DeskPage: React.FC = (props) => {
  const { Current_Dest_Person_List, getCurrentDeskPersonListInfo, Desk_Info } = useModel('desk_model');
  const { loginUserInfo } = useModel('index_model');

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
          <div>当前桌子：{Desk_Info.name} <Divider direction='vertical' /> 当前用户：{loginUserInfo.username}</div>
          <Space block wrap>
            {loginPersonListItems.map(person => (
              <div style={{ textAlign: 'center' }}><Avatar src={demoAvatarImages[0]} />{person.name}</div>
            ))}
          </Space>
        </div>

      </div>

      <div style={{ border: '0px solid red', width: '100%', height: '100%' }}>

        <table className={styles.desktable}>
          <tr>
            <td>
              {
                loginPersonListItems[4] != undefined
                  ?
                  <>
                    <Avatar style={{ '--size': '32px', display: 'inline-flex' }} src={demoAvatarImages[0]} />
                    <div>{loginPersonListItems[4].name}</div>
                  </>
                  :
                  <div style={{ width: '32px' }} />
              }
            </td>
            <td style={{ height: '100px', textAlign: 'center' }}>
              {
                loginPersonListItems[5] != undefined
                  ?
                  <>
                    <Avatar style={{ '--size': '32px', display: 'inline-flex' }} src={demoAvatarImages[0]} />
                    <div>{loginPersonListItems[5].name}</div>
                  </>
                  :
                  <div style={{ width: '32px' }} />
              }
            </td>
            <td>
              {
                loginPersonListItems[6] != undefined
                  ?
                  <>
                    <Avatar style={{ '--size': '32px', display: 'inline-flex' }} src={demoAvatarImages[0]} />
                    <div>{loginPersonListItems[6].name}</div>
                  </>
                  :
                  <div style={{ width: '32px' }} />
              }
            </td>
          </tr>
          <tr>
            <td>
              {
                loginPersonListItems[3] != undefined
                  ?
                  <>
                    <Avatar style={{ '--size': '32px', display: 'inline-flex' }} src={demoAvatarImages[0]} />
                    <div>{loginPersonListItems[3].name}</div>
                  </>
                  :
                  <div style={{ width: '32px' }} />
              }
            </td>
            <td rowSpan={2} style={{ textAlign: '-webkit-center', width: '60%' }}>
              <div style={{ border: '0px solid red', width: '50px' }}>
                <Space direction='vertical' style={{ '--gap': '-10px' }}>
                  <img className={styles.deskpokerimg} src="/public/img/poker/heart_1.jpg" />
                  <img className={styles.deskpokerimg} src="/public/img/poker/heart_2.jpg" />
                  <img className={styles.deskpokerimg} src="/public/img/poker/heart_3.jpg" />
                  <img className={styles.deskpokerimg} src="/public/img/poker/heart_4.jpg" />
                  <img className={styles.deskpokerimg} src="/public/img/poker/heart_5.jpg" />
                </Space>
              </div>
            </td>
            <td>
              {
                loginPersonListItems[7] != undefined
                  ?
                  <>
                    <Avatar style={{ '--size': '32px', display: 'inline-flex' }} src={demoAvatarImages[0]} />
                    <div>{loginPersonListItems[7].name}</div>
                  </>
                  :
                  <div style={{ width: '32px' }} />
              }
            </td>
          </tr>
          <tr>
            <td>
              {
                loginPersonListItems[2] != undefined
                  ?
                  <>
                    <Avatar style={{ '--size': '32px', display: 'inline-flex' }} src={demoAvatarImages[0]} />
                    <div>{loginPersonListItems[2].name}</div>
                  </>
                  :
                  <div style={{ width: '32px' }} />
              }
            </td>
            <td>
              {
                loginPersonListItems[8] != undefined
                  ?
                  <>
                    <Avatar style={{ '--size': '32px', display: 'inline-flex' }} src={demoAvatarImages[0]} />
                    <div>{loginPersonListItems[8].name}</div>
                  </>
                  :
                  <div style={{ width: '32px' }} />
              }
            </td>
          </tr>
          <tr>
            <td>
              <Avatar style={{ '--size': '32px', display: 'inline-flex' }} src={demoAvatarImages[0]} />
              <div>{loginPersonListItems[1] != undefined ? loginPersonListItems[1].name : ''}</div>
            </td>
            <td style={{ width: '60%', height: '100px', textAlign: 'center' }}>
              <Space>
                <img className={styles.personpokerimg} src="/public/img/poker/diamond_1.jpg"></img>
                <img className={styles.personpokerimg} src="/public/img/poker/diamond_2.jpg"></img>
              </Space>
            </td>
            <td>
              {
                loginPersonListItems[9] != undefined
                  ?
                  <>
                    <Avatar style={{ '--size': '32px', display: 'inline-flex' }} src={demoAvatarImages[0]} />
                    <div>{loginPersonListItems[9].name}</div>
                  </>
                  :
                  <div style={{ width: '32px' }} />
              }
            </td>
          </tr>
        </table>

      </div>

    </div>

  );

};

export default DeskPage;
