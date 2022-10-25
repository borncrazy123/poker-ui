// import { trim } from '@/utils/format';
// import { useModel } from '@umijs/max';
import React, { useRef, useState } from 'react';
import { Button } from 'antd';
import services from '@/services/demo';

import styles from './index.less';

const { shuffle } = services.PokerController;

const PokerPage: React.FC = () => {
  // const { name } = useModel('global');
  const [pokers, setPokers] = useState([]);
  const [personPokers, setPersonPokers] = useState([]);
  const [bankerPokers, setBankerPokers] = useState([]);

  let personPokersItems = [];
  for (let k = 0; k < personPokers.length; k++) {
    personPokersItems.push(<div>第 {k} 个人的牌是：{JSON.stringify(personPokers[k])}</div>);
  }

  return <div className={styles.container}>
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
        console.log('person_pokers:', person_pokers);
        setPersonPokers(person_pokers);

        for (let j = person_cnt * poker_limit; j < pokers.length && banker_pokers.length < banker_poker_cnt; j++) {
          banker_pokers.push(pokers[j]);
        }
        console.log('banker_pokers:', banker_pokers);
        setBankerPokers(banker_pokers);
      }}
    >
      发牌（8个人）
    </Button>
    <div>{pokers.length == 0 ? '' : '洗过后的牌：' + JSON.stringify(pokers)}</div>
    {personPokersItems}
    <div>{bankerPokers.length == 0 ? '' : '庄家手里的牌是：' + JSON.stringify(bankerPokers)}</div>

  </div>;
};

export default PokerPage;
