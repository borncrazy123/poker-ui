import { useState, useEffect, useCallback } from 'react';
import services from '@/services/demo';

const { getLoginUserInfo } = services.PokerController;

const index = () => {
  const [Tabbar_Active_Key, setTabbarActiveKey] = useState('/home');
  const [loginUserInfo, setLoginUserInfo] = useState({});

  useEffect(() => {
    const init = async () => {
      getLoginUserInfoCallback();
    }
    init();

  }, []);

  const getLoginUserInfoCallback = useCallback(async () => {
    const tLoginUserInfo = await getLoginUserInfo();
    // console.log('tLoginUserInfo:', tLoginUserInfo);
    setLoginUserInfo(tLoginUserInfo);
  }, []);

  // // 刷新桌子列表
  // const refreshDeskInfoCallback = useCallback(async () => {
  //   const deskList = await getDeskList();
  //   // console.log('deskList:', deskList);
  //   setDeskList(deskList);
  // }, []);

  const setTabbarActiveKeyInfo = useCallback(async (activeKey:string) => {
    setTabbarActiveKey(activeKey);
  }, []);

  return {
    loginUserInfo,
    Tabbar_Active_Key,
    setTabbarActiveKeyInfo,
  };
};

export default index;
