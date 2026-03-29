import { useParams, useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import Viewer from '../components/Viewer';
import useDiary from '../hooks/useDiary';
import usePageTitle from '../hooks/usePageTitle';

const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) month = `0${month}`;
  if (date < 10) date = `0${date}`;
  return `${year}-${month}-${date}`;
};

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();
  const currentDiaryItem = useDiary(params.id);
  usePageTitle(`${params.id}번 일기`);

  if (!currentDiaryItem) {
    return <div className="p-10 text-center text-xl font-black">데이터를 불러오는 중...</div>;
  }

  const title = `${getStringedDate(new Date(Number(currentDiaryItem.createdDate)))} 기록`;

  return (
    <div className="animate-in fade-in duration-500">
      <PageHeader
        title={title}
        leftChild={<Button onClick={() => nav(-1)} text={'< 뒤로 가기'} />}
        rightChild={<Button onClick={() => nav(`/edit/${params.id}`)} text={'수정하기'} />}
      />
      <Viewer emotionId={currentDiaryItem.emotionId} content={currentDiaryItem.content} />
    </div>
  );
};

export default Diary;
