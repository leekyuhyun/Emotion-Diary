import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Notfound = () => {
  const nav = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
      <h1 className="text-6xl font-black text-diary-blue">404</h1>
      <p className="text-2xl font-bold">페이지를 찾을 수 없습니다.</p>
      <Button text={'홈으로 돌아가기'} onClick={() => nav('/', { replace: true })} />
    </div>
  );
};

export default Notfound;
