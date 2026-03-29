import { useContext, useEffect } from 'react';
import { DiaryStateContext } from '../App';
import { useNavigate } from 'react-router-dom';

const useDiary = (id) => {
  const data = useContext(DiaryStateContext);
  const nav = useNavigate();

  const currentDiaryItem = data.find((item) => String(item.id) === String(id));

  useEffect(() => {
    if (!currentDiaryItem) {
      window.alert('존재하지 않는 일기입니다.');
      nav('/', { replace: true });
    }
  }, [currentDiaryItem, nav]);

  return currentDiaryItem;
};

export default useDiary;
