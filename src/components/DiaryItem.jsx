import getEmotionImage from '../utils/get-emotion-image';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { getFormattedDate, getDayName } from '../utils/data-utils';

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const nav = useNavigate();

  return (
    <div
      onClick={() => nav(`/diary/${id}`)}
      className="flex items-center gap-5 py-6 px-5 mb-4 border border-slate-100 bg-white rounded-2xl hover:border-diary-blue/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all cursor-pointer group"
    >
      <div className="w-12 h-12 shrink-0 flex justify-center items-center group-hover:rotate-6 transition-transform rounded-full bg-[#E0E7FF] shadow-inner">
        <img
          className="w-full h-full object-contain"
          src={getEmotionImage(emotionId)}
          alt="emotion"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1.5">
          <span className="text-sm font-black text-slate-400 tracking-tight">
            {getFormattedDate(createdDate)}
          </span>
          <span className="text-[11px] font-bold px-2 py-0.5 bg-slate-50 text-slate-400 border border-slate-100 rounded-full">
            {getDayName(createdDate)}
          </span>
        </div>

        <p className="text-[17px] leading-snug line-clamp-1 text-slate-700 font-bold group-hover:text-diary-blue transition-colors">
          {content}
        </p>
      </div>

      <div className="shrink-0 ml-2">
        <Button
          text={'수정'}
          onClick={(e) => {
            e.stopPropagation();
            nav(`/edit/${id}`);
          }}
        />
      </div>
    </div>
  );
};

export default DiaryItem;
