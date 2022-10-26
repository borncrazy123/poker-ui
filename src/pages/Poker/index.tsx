// import { trim } from '@/utils/format';
// import { useModel } from '@umijs/max';
import React, { useRef, useState } from 'react';
import { Button, Layout, Menu, Col, Divider, Row } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

import services from '@/services/demo';

import styles from './index.less';

const { shuffle, deskList, loginPersonList } = services.PokerController;

const PokerPage: React.FC = () => {
  // const { name } = useModel('global');
  const [pokers, setPokers] = useState([]);
  const [personPokers, setPersonPokers] = useState([]);
  const [bankerPokers, setBankerPokers] = useState([]);
  const [desk_List, setDeskList] = useState([]);
  const [login_Person_List, setLoginPersonList] = useState([]);

  let personPokersItems = [];
  for (let k = 0; k < personPokers.length; k++) {
    personPokersItems.push(<div>第 {k} 个人的牌是：{JSON.stringify(personPokers[k])}</div>);
  }

  return (
    <div className={styles.container}>

      <Row wrap={false}>
        <Col flex="none">
          <div style={{ border: '1px solid skyblue', width: '100px', height: '100px' }}>
            <img style={{width:'98px', height:'98px'}} src='/public/img/logo.jpeg'></img>
          </div>
        </Col>
        <Col flex="auto">
          <div style={{ border: '1px solid skyblue', height: '60px' }}>
            展示桌子
          </div>
          <div style={{ border: '1px solid skyblue', height: '40px' }}>
            展示所有登陆用户
          </div>
        </Col>
      </Row>

      <div style={{ height: '100px' }}></div>
      <Button
        onClick={async () => {
          const pokers = await shuffle();
          console.log('pokers:', pokers);
          setPokers(pokers);
        }}
      >
        洗牌
      </Button>
      <Button
        onClick={async () => {
          // 定义玩牌总人数
          let person_cnt = 8;
          // 定义玩家手里牌张数
          let poker_limit = 2;
          // 定义庄家手里的牌数
          let banker_poker_cnt = 5;
          // 定义庄家手里拿的牌
          let banker_pokers = [];
          // 定义每个玩家手里拿的牌
          let person_pokers = [];
          for (let i = 0; i < person_cnt; i++) {
            person_pokers[i] = [];
            for (let j = i; j < pokers.length && person_pokers[i].length < 2; j = j + person_cnt) {
              person_pokers[i].push(pokers[j]);
            }
          }
          // console.log('person_pokers:', person_pokers);
          setPersonPokers(person_pokers);

          for (let j = person_cnt * poker_limit; j < pokers.length && banker_pokers.length < banker_poker_cnt; j++) {
            banker_pokers.push(pokers[j]);
          }
          // console.log('banker_pokers:', banker_pokers);
          setBankerPokers(banker_pokers);
        }}
      >
        发牌（8个人）
      </Button>
      <Button
        onClick={async () => {
          const desk_List = await deskList();
          // console.log('deskList:', deskList);
          setDeskList(desk_List);
        }}
      >
        获取所有桌子
      </Button>
      <Button
        onClick={async () => {
          const login_Person_List = await loginPersonList();
          // console.log('deskList:', deskList);
          setLoginPersonList(login_Person_List);
        }}
      >
        获取当前所有登陆用户
      </Button>
      <div style={{ width: '100%', border: '0px solid red', overflowX: 'hidden' }}>
        {pokers.length == 0 ? '' : '洗过后的牌：' + JSON.stringify(pokers)}
      </div>
      {personPokersItems}
      <div>{bankerPokers.length == 0 ? '' : '庄家手里的牌是：' + JSON.stringify(bankerPokers)}</div>
      <div>{desk_List.length == 0 ? '' : '当前所有桌子：' + JSON.stringify(desk_List)}</div>
      <div>{login_Person_List.length == 0 ? '' : '获取当前所有登陆用户：' + JSON.stringify(login_Person_List)}</div>
    </div>

  );

};

export default PokerPage;
