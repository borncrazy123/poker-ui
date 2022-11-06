// 全局共享数据示例
import { DEFAULT_NAME } from '@/constants';
import { useState, useEffect, useCallback } from 'react';
import services from '@/services/demo';

const { shuffle, createDesk, getDeskList, loginPersonList, getCurrentDeskPersonList } = services.PokerController;

const center = () => {
  const [Desk_List, setDeskList] = useState([]);

  useEffect(() => {
    const init = async () => {
      const deskList = await getDeskList();
      // console.log('deskList:', deskList);
      setDeskList(deskList);

    }
    init();

  }, []);

  // 新建桌子
  const createDeskInfo = useCallback(async () => {
    return;
    const deskInfo = await createDesk({
      name: '桌子3',
      desc: '',
    });
  }, []);

  return {
    Desk_List,
    createDeskInfo,
  };
};

export default center;
