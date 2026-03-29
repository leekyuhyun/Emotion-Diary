import { useContext, useState } from 'react';
import { DiaryStateContext } from '../App';

export const useFilteredDiary = () => {
  const data = useContext(DiaryStateContext);
  const [pivotDate, setPivotDate] = useState(new Date());

  const monthlyData = data.filter((item) => {
    const itemDate = new Date(item.createdDate);
    return (
      itemDate.getFullYear() === pivotDate.getFullYear() &&
      itemDate.getMonth() === pivotDate.getMonth()
    );
  });

  const onIncreaseMonth = () =>
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  const onDecreaseMonth = () =>
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));

  return { monthlyData, pivotDate, onIncreaseMonth, onDecreaseMonth };
};
