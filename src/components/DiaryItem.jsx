import getEmotionImage from '../utils/get-emotion-image';
import { useNavigate } from 'react-router-dom';

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();

  const bgColors = {
    1: 'bg-green-400',
    2: 'bg-green-300',
    3: 'bg-yellow-400',
    4: 'bg-orange-400',
    5: 'bg-red-400',
  };

  return (
    <div className="relative pl-16 md:pl-20 group">
      <div
        onClick={() => nav(`/diary/${id}`)}
        className={`absolute left-0 top-0 w-12.5 h-12.5 rounded-full flex justify-center items-center cursor-pointer shadow-lg border-4 border-white z-10 transition-transform group-hover:scale-110 group-hover:-rotate-6 ${bgColors[emotionId]}`}
      >
        <img className="w-[60%]" src={getEmotionImage(emotionId)} alt="감정" />
      </div>

      <div
        onClick={() => nav(`/diary/${id}`)}
        className="bg-white p-6 rounded-3xl rounded-tl-none border border-slate-100 shadow-[0_2px_15px_rgba(0,0,0,0.02)] cursor-pointer transition-all duration-300 group-hover:shadow-[0_10px_30px_rgba(59,130,246,0.08)] group-hover:bg-blue-50/30"
      >
        <div className="flex justify-between items-start mb-3">
          <span className="text-blue-500 font-bold text-xl tracking-wide">
            {new Date(createdDate).toLocaleDateString()}
          </span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nav(`/edit/${id}`);
            }}
            className="text-slate-300 hover:text-blue-500 font-bold text-sm bg-slate-50 px-3 py-1 rounded-full transition-colors"
          >
            수정
          </button>
        </div>

        <p className="text-xl text-slate-600 leading-relaxed line-clamp-3 m-0">{content}</p>
      </div>
    </div>
  );
};

export default DiaryItem;
