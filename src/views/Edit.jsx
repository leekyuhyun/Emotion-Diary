import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DiaryDispatchContext } from '../App';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import Editor from '../components/Editor';
import useDiary from '../hooks/useDiary';
import usePageTitle from '../hooks/usePageTitle';

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const currentDiaryItem = useDiary(params.id);
  usePageTitle(`${params.id}번 일기 수정`);

  const onClickDelete = () => {
    if (window.confirm('일기를 정말 삭제할까요? 다시 복구되지 않아요!')) {
      onDelete(params.id);
      nav('/', { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm('일기를 정말 수정할까요?')) {
      onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
      nav('/', { replace: true });
    }
  };

  if (!currentDiaryItem) {
    return <div className="p-10 text-center text-xl font-black">데이터를 불러오는 중...</div>;
  }

  return (
    <div className="animate-in fade-in duration-500">
      <PageHeader
        title={'일기 수정하기'}
        leftChild={<Button onClick={() => nav(-1)} text={'< 뒤로 가기'} />}
        rightChild={<Button onClick={onClickDelete} text={'삭제하기'} type={'NEGATIVE'} />}
      />
      <Editor initData={currentDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
