import React, { useState, useEffect } from 'react';

import { Image, List } from 'antd-mobile';
import services from '@/services/demo';

const { getCurrentDeskPersonList } = services.PokerController;

const DeskPage: React.FC = (props) => {
  const [Current_Dest_Person_List, setCurrentDeskPersonList] = useState([{name: ''}]);
  let { deskInfo } = props;
  if (deskInfo == undefined) {
    deskInfo = {
      id: -1,
      name: '请先进入桌子......',
    };
  }

  useEffect(() => {
    const init = async () => {
      const currentDestPersonList = await getCurrentDeskPersonList({ id: deskInfo.id + 1 });
      // console.log('currentDestPersonList:', currentDestPersonList);
      setCurrentDeskPersonList(currentDestPersonList);

    }
    init();

  }, []);

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

    <div style={{ width: '100%', height: '100%', overflowY: 'scroll' }}>

      <List header={deskInfo.name} style={{ height: '200px' }}>
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
      </List>

    </div>

  );

};

export default DeskPage;
