import React, { useRef, useState, useEffect } from 'react';

import { NavBar, TabBar, Badge, Image, List } from 'antd-mobile';
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';

import services from '@/services/demo';

import styles from './index.less';

import CenterPage from './center';
import DeskPage from './desk';

const { shuffle, getDeskList, loginPersonList, getCurrentDeskPersonList } = services.PokerController;

const PokerPage: React.FC = () => {
  // const { name } = useModel('global');

  // 此函数必须放在前面初始化
  const setRemoteRouteActive = (deskInfo) => {
    console.log('deskInfo:', deskInfo);
    setRouteActive('/desk', deskInfo);
  }

  const [pokers, setPokers] = useState([]);
  const [personPokers, setPersonPokers] = useState([]);
  const [bankerPokers, setBankerPokers] = useState([]);
  const [Desk_List, setDeskList] = useState([]);
  // const [Current_Dest_Person_List, setCurrentDeskPersonList] = useState([]);
  const [Tabbar_Active_Key, setTabbarActiveKey] = useState('/home');
  const [Body_Page, setBodyPage] = useState(<CenterPage remoteRouteActive = {setRemoteRouteActive} />);

  // useEffect(() => {
  //   const init = async () => {
  //     const currentDestPersonList = await getCurrentDeskPersonList({ id: 1 });
  //     // console.log('currentDestPersonList:', currentDestPersonList);
  //     setCurrentDeskPersonList(currentDestPersonList);

  //   }
  //   init();

  // }, []);

  // // 处理所有登陆用户情况
  // let loginPersonListItems = [];
  // for (let i = 0; i < Current_Dest_Person_List.length; i++) {
  //   loginPersonListItems.push(
  //     <>
  //       <Avatar style={{ color: 'white', backgroundColor: 'rgb(242 110 9)' }}>{Current_Dest_Person_List[i].name.substr(0, 1)}</Avatar>
  //       <span style={{ padding: '2px' }} />
  //     </>
  //   );
  // }

  // let personPokersItems = [];
  // for (let k = 0; k < personPokers.length; k++) {
  //   personPokersItems.push(<div>第 {k} 个人的牌是：{JSON.stringify(personPokers[k])}</div>);
  // }

  const setRouteActive = (value: string, tag: object) => {
    console.log('setRouteActive:value:', value, tag);
    if ('/home' == value) {
      setBodyPage(<CenterPage remoteRouteActive = {setRemoteRouteActive} />);
    } else if ('/desk' == value) {
      setBodyPage(<DeskPage deskInfo = {tag} />);
    } else {
      setBodyPage(<CenterPage />);
    }
    setTabbarActiveKey(value);
  }

  const tabs = [
    {
      key: '/home',
      title: '中心',
      icon: <AppOutline />,
    },
    {
      key: '/desk',
      title: '桌面',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/message',
      title: '消息',
      icon: <MessageOutline />,
    },
    {
      key: '/me',
      title: '我的',
      icon: <UserOutline />,
      badge: Badge.dot,
    },
  ];

  return (
    <div className={styles.app}>
      <div className={styles.top}>
        <NavBar backArrow={false}>游戏中心</NavBar>
      </div>
      <div className={styles.body}>
        {Body_Page}
      </div>
      <div className={styles.bottom}>
        <TabBar activeKey={Tabbar_Active_Key} onChange={value => setRouteActive(value)}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} badge={item.badge} />
          ))}
        </TabBar>
      </div>
    </div>


    // <div className={styles.container}>

    //   <Row wrap={false}>
    //     <Col flex="none">
    //       <div style={{ border: '1px solid skyblue', borderRight: '0px', width: '100px', height: '100px' }}>
    //         <img style={{ width: '98px', height: '98px' }} src='/public/img/logo.jpeg'></img>
    //       </div>
    //     </Col>
    //     <Col flex="auto">
    //       <div style={{ paddingLeft: '5px', border: '1px solid skyblue', borderBottom: '0px', height: '60px', lineHeight: '60px' }}>
    //         {deskListItems}

    //         <Button
    //           onClick={async () => {
    //             const pokers = await shuffle();
    //             console.log('pokers:', pokers);
    //             setPokers(pokers);
    //           }}
    //         >
    //           洗牌
    //         </Button>
    //         <Button
    //           onClick={async () => {
    //             // 定义玩牌总人数
    //             let person_cnt = 8;
    //             // 定义玩家手里牌张数
    //             let poker_limit = 2;
    //             // 定义庄家手里的牌数
    //             let banker_poker_cnt = 5;
    //             // 定义庄家手里拿的牌
    //             let banker_pokers = [];
    //             // 定义每个玩家手里拿的牌
    //             let person_pokers = [];
    //             for (let i = 0; i < person_cnt; i++) {
    //               person_pokers[i] = [];
    //               for (let j = i; j < pokers.length && person_pokers[i].length < 2; j = j + person_cnt) {
    //                 person_pokers[i].push(pokers[j]);
    //               }
    //             }
    //             // console.log('person_pokers:', person_pokers);
    //             setPersonPokers(person_pokers);

    //             for (let j = person_cnt * poker_limit; j < pokers.length && banker_pokers.length < banker_poker_cnt; j++) {
    //               banker_pokers.push(pokers[j]);
    //             }
    //             // console.log('banker_pokers:', banker_pokers);
    //             setBankerPokers(banker_pokers);
    //           }}
    //         >
    //           发牌
    //         </Button>

    //       </div>
    //       <div style={{ paddingLeft: '5px', paddingTop: '2px', border: '1px solid skyblue', height: '40px', lineHeight: '40px' }}>
    //         <Avatar.Group maxCount={8}>
    //           {loginPersonListItems}
    //         </Avatar.Group>
    //       </div>
    //     </Col>
    //   </Row>

    //   <div style={{ height: '50px' }}></div>

    //   <div style={{ width: '100%', border: '0px solid red', overflowX: 'hidden', overflowWrap: 'anywhere' }}>
    //     {pokers.length == 0 ? '' : '洗过后的牌：' + JSON.stringify(pokers)}
    //   </div>
    //   {personPokersItems}
    //   <div>{bankerPokers.length == 0 ? '' : '庄家手里的牌是：' + JSON.stringify(bankerPokers)}</div>
    // </div>

  );

};

export default PokerPage;
