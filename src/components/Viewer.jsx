import getEmotionImage from '../utils/get-emotion-image';
import { emotionList } from '../utils/constants';

const Viewer = ({ emotionId, content }) => {
  const emotionItem = emotionList.find((item) => String(item.emotionId) === String(emotionId));

  const bgColors = {
    1: 'bg-green-400 shadow-green-400/50',
    2: 'bg-green-300 shadow-green-300/50',
    3: 'bg-yellow-400 shadow-yellow-400/50',
    4: 'bg-orange-400 shadow-orange-400/50',
    5: 'bg-red-400 shadow-red-400/50',
  };

  return (
    <div className="relative mt-20 mb-10 bg-white rounded-[3rem] p-10 pt-24 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
      <div
        className={`absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-2xl border-8 border-[#eef2f6] z-10 ${bgColors[emotionId]}`}
      >
        <img
          className="w-[60%] drop-shadow-md"
          src={getEmotionImage(emotionId)}
          alt="감정 이미지"
        />
      </div>

      <div className="text-center mb-10">
        <h4 className="text-3xl font-extrabold text-slate-800 mb-4">{emotionItem.emotionName}</h4>
        <div className="w-12 h-1.5 bg-blue-100 mx-auto rounded-full"></div>
      </div>

      <div className="bg-slate-50/70 rounded-3xl p-8 min-h-62.5 flex items-center justify-center">
        <p className="text-2xl leading-[2.5] text-slate-700 font-medium whitespace-pre-wrap text-center m-0">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Viewer;
