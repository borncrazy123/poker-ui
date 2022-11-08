import { useState, useEffect, useCallback } from 'react';
import services from '@/services/demo';

const { createDesk, getDeskList, enterDeskByDid, } = services.PokerController;

const center = () => {
  const [Desk_List, setDeskList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [deskItem, setDeskItem] = useState([]);

  useEffect(() => {
    const init = async () => {
      refreshDeskInfoCallback();
    }
    init();

  }, []);

  // 刷新桌子列表
  const refreshDeskInfoCallback = useCallback(async () => {
    const deskList = await getDeskList();
    // console.log('deskList:', deskList);
    setDeskList(deskList);
  }, []);

  // 新建桌子
  const createDeskInfo = useCallback(async () => {
    const deskInfo = await createDesk({
      name: '桌子_' + new Date().getTime(),
      desc: '',
    });
    refreshDeskInfoCallback();
  }, []);

  // 玩家进入桌子
  const enterDeskByDidCallback = useCallback(async (_deskItem) => {
    const deskInfo = await enterDeskByDid(_deskItem);
    setVisible(false);
    setDeskItem(_deskItem);
  }, []);

  return {
    Desk_List,
    createDeskInfo,
    enterDeskByDidCallback,
    visible,
    setVisible,
    deskItem,
  };
};

export default center;
