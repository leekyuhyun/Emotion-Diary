import PageHeader from '../components/PageHeader';
import DiaryList from '../components/DiaryList';
import Button from '../components/Button';
import { useFilteredDiary } from '../hooks/useFilteredDiary';

const Home = () => {
  const { monthlyData, pivotDate, onIncreaseMonth, onDecreaseMonth } = useFilteredDiary();

  return (
    <div className="animate-in fade-in duration-500">
      <PageHeader
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button text={'<'} onClick={onDecreaseMonth} />}
        rightChild={<Button text={'>'} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
