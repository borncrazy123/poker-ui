import { useState, useCallback } from 'react';
import services from '@/services/demo';

const { getCurrentDeskPersonList } = services.PokerController;

const desk = () => {
  const [Current_Dest_Person_List, setCurrentDeskPersonList] = useState([{ name: '' }]);
  const [Desk_Info, setDeskInfo] = useState({
    id: -1,
    name: '请先进入桌子......',
  });

  const setDeskInfoCallback = useCallback((deskInfo) => {
    setDeskInfo(deskInfo);
  }, []);

  // 获取桌子用户
  const getCurrentDeskPersonListInfo = useCallback(async (deskInfo) => {
    const currentDestPersonList = await getCurrentDeskPersonList({ id: deskInfo.id });
    // console.log('currentDestPersonList:', currentDestPersonList);
    setCurrentDeskPersonList(currentDestPersonList);
  }, []);

  return {
    Current_Dest_Person_List,
    getCurrentDeskPersonListInfo,
    Desk_Info,
    setDeskInfoCallback
  };
};

export default desk;
