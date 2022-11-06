// 全局共享数据示例
import { DEFAULT_NAME } from '@/constants';
import { useState, useEffect, useCallback } from 'react';
import services from '@/services/demo';

const { shuffle, createDesk, getDeskList, loginPersonList, getCurrentDeskPersonList } = services.PokerController;

const index = () => {
  const [Tabbar_Active_Key, setTabbarActiveKey] = useState('/home');

  const setTabbarActiveKeyInfo = useCallback(async (activeKey) => {
    setTabbarActiveKey(activeKey);
  }, []);

  return {
    Tabbar_Active_Key, setTabbarActiveKeyInfo,
  };
};

export default index;
