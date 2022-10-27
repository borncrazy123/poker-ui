// import { trim } from '@/utils/format';
// import { useModel } from '@umijs/max';
import React, { useRef, useState, useEffect } from 'react';
import { Button, Layout, Menu, Col, Divider, Row, Avatar, Badge, Tooltip, Image, Radio } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
import { AntDesignOutlined, UserOutlined, ClockCircleOutlined } from '@ant-design/icons';

import services from '@/services/demo';

import styles from './index.less';

const { shuffle, getDeskList, loginPersonList, getCurrentDeskPersonList } = services.PokerController;

const PokerPage: React.FC = () => {
  // const { name } = useModel('global');
  const [pokers, setPokers] = useState([]);
  const [personPokers, setPersonPokers] = useState([]);
  const [bankerPokers, setBankerPokers] = useState([]);
  const [Desk_List, setDeskList] = useState([]);
  const [Current_Dest_Person_List, setCurrentDeskPersonList] = useState([]);

  useEffect(() => {
    const init = async () => {
      const deskList = await getDeskList();
      // console.log('deskList:', deskList);
      setDeskList(deskList);

      const currentDestPersonList = await getCurrentDeskPersonList({ id: 1 });
      // console.log('currentDestPersonList:', currentDestPersonList);
      setCurrentDeskPersonList(currentDestPersonList);

    }
    init();

  }, []);

  // 处理所有桌子情况
  let deskListItems = [];
  for (let i = 0; i < Desk_List.length; i++) {
    deskListItems.push(
      <>
        <Badge count={Desk_List[i].peson_cnt} showZero>
          <Avatar
            shape="square" size="large"
            style={{ color: 'white', backgroundColor: 'rgb(49 45 218)' }}
            onClick={async () => {
              const currentDestPersonList = await getCurrentDeskPersonList({ id: Desk_List[i].id });
              // console.log('currentDestPersonList:', currentDestPersonList);
              setCurrentDeskPersonList(currentDestPersonList);
            }}
          >
            {Desk_List[i].name}
          </Avatar>
        </Badge>
        <span style={{ padding: '7px' }} />
      </>
    );
  }

  // 处理所有登陆用户情况
  let loginPersonListItems = [];
  for (let i = 0; i < Current_Dest_Person_List.length; i++) {
    loginPersonListItems.push(
      <>
        <Avatar style={{ color: 'white', backgroundColor: 'rgb(242 110 9)' }}>{Current_Dest_Person_List[i].name.substr(0, 1)}</Avatar>
        <span style={{ padding: '2px' }} />
      </>
    );
  }

  let personPokersItems = [];
  for (let k = 0; k < personPokers.length; k++) {
    personPokersItems.push(<div>第 {k} 个人的牌是：{JSON.stringify(personPokers[k])}</div>);
  }

  return (
    <div className={styles.container}>

      <Row wrap={false}>
        <Col flex="none">
          <div style={{ border: '1px solid skyblue', borderRight: '0px', width: '100px', height: '100px' }}>
            <img style={{ width: '98px', height: '98px' }} src='/public/img/logo.jpeg'></img>
          </div>
        </Col>
        <Col flex="auto">
          <div style={{ paddingLeft: '5px', border: '1px solid skyblue', borderBottom: '0px', height: '60px', lineHeight: '60px' }}>
            {deskListItems}

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
              发牌
            </Button>

          </div>
          <div style={{ paddingLeft: '5px', border: '1px solid skyblue', height: '40px', lineHeight: '37px' }}>
            {loginPersonListItems}
          </div>
        </Col>
      </Row>

      <div style={{ height: '50px' }}></div>

      <div style={{ width: '100%', border: '0px solid red', overflowX: 'hidden' }}>
        {pokers.length == 0 ? '' : '洗过后的牌：' + JSON.stringify(pokers)}
      </div>
      {personPokersItems}
      <div>{bankerPokers.length == 0 ? '' : '庄家手里的牌是：' + JSON.stringify(bankerPokers)}</div>
    </div>

  );

};

export default PokerPage;
