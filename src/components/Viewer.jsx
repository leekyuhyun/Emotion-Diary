import getEmotionImage from '../utils/get-emotion-image';
import { emotionList } from '../utils/constants';

const Viewer = ({ emotionId, content }) => {
  const emotionItem = emotionList.find((item) => String(item.emotionId) === String(emotionId));

  const bgColors = {
    1: 'bg-green-400',
    2: 'bg-green-300',
    3: 'bg-yellow-400',
    4: 'bg-orange-400',
    5: 'bg-rose-400',
  };

  return (
    <div className="flex flex-col gap-12 mt-10">
      <section className="flex flex-col items-center gap-6">
        <h4 className="text-2xl font-black text-main-blue">오늘의 감정</h4>
        <div
          className={`w-40 h-40 rounded-full flex flex-col items-center justify-center gap-2 text-white text-xl font-black shadow-2xl border-8 border-white ${bgColors[emotionId]}`}
        >
          <img className="w-1/2" src={getEmotionImage(emotionId)} alt="emotion" />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>

      <section className="bg-white/80 p-10 rounded-[4rem] shadow-sm border border-white">
        <h4 className="text-2xl font-black text-main-blue mb-8 text-center underline decoration-dashed decoration-main-blue/30 underline-offset-8">
          오늘의 기록
        </h4>
        <p className="text-2xl leading-[2.2] text-slate-700 whitespace-pre-wrap break-keep">
          {content}
        </p>
      </section>
    </div>
  );
};
export default Viewer;
