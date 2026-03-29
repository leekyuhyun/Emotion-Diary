import { useContext } from 'react';
import { DiaryStateContext } from '../App';
import PageHeader from '../components/PageHeader';
import getEmotionImage from '../utils/get-emotion-image';
import { emotionList } from '../utils/constants';
import usePageTitle from '../hooks/usePageTitle';

const Statistics = () => {
  const data = useContext(DiaryStateContext);
  usePageTitle('전체 감정 통계');

  const stats = emotionList.map((emotion) => {
    const count = data.filter((d) => Number(d.emotionId) === emotion.emotionId).length;
    return { ...emotion, count };
  });

  const totalCount = data.length;

  return (
    <div className="animate-in fade-in duration-500 pb-20">
      <PageHeader title={'감정 통계'} />

      <section className="mt-4 border-b border-gray-100">
        <div className="bg-white py-12 flex flex-col items-center justify-center">
          <h3 className="text-sm font-black text-slate-400 mb-2.5">전체 누적 기록</h3>
          <span className="text-4xl font-black text-diary-blue tracking-tighter">
            {totalCount}
            <span className="text-lg text-slate-500 ml-1">회</span>
          </span>
        </div>
      </section>

      <section className="mt-10 flex flex-col gap-2 px-1">
        <h4 className="text-lg font-black text-slate-800 px-1 mb-4">전체 감정 비율</h4>
        {totalCount === 0 ? (
          <div className="py-20 text-center text-slate-200 font-bold">
            기록된 데이터가 없습니다.
          </div>
        ) : (
          stats.map((item) => {
            const ratio = totalCount > 0 ? Math.round((item.count / totalCount) * 100) : 0;
            const isEmpty = item.count === 0;

            return (
              <div
                key={item.emotionId}
                className={`flex items-center gap-6 py-6 px-1 border-b border-gray-50 last:border-none transition-all group ${isEmpty ? 'opacity-50' : 'opacity-100'}`}
              >
                <img
                  className="w-8 h-8 group-hover:scale-110 transition-transform object-contain"
                  src={getEmotionImage(item.emotionId)}
                  alt={item.emotionName}
                />
                <div className="flex-1">
                  <div className="flex justify-between items-end mb-2.5 gap-2">
                    <span
                      className={`text-base font-black tracking-tight ${isEmpty ? 'text-slate-400' : 'text-slate-700'}`}
                    >
                      {item.emotionName}
                    </span>
                    <span
                      className={`text-[13px] font-bold ${isEmpty ? 'text-slate-300' : 'text-diary-blue'}`}
                    >
                      {item.count}회 ({ratio}%)
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                    <div
                      className="h-full bg-diary-blue transition-all duration-1000 rounded-full"
                      style={{ width: `${ratio}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })
        )}
      </section>
    </div>
  );
};

export default Statistics;
