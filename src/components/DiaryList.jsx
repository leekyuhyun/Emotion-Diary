import DiaryItem from './DiaryItem';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const DiaryList = ({ data }) => {
  const nav = useNavigate();
  const [sortType, setSortType] = useState('latest');

  const getSortedDate = () => {
    return data.toSorted((a, b) => {
      if (sortType === 'oldest') return Number(a.createdDate) - Number(b.createdDate);
      return Number(b.createdDate) - Number(a.createdDate);
    });
  };

  const sortedData = getSortedDate();

  return (
    <div className="mt-4">
      <div className="sticky top-4 z-20 flex justify-between items-center bg-white/70 backdrop-blur-md p-2 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-white mb-10">
        <select
          className="bg-transparent text-blue-500 border-none pl-4 pr-2 py-2 text-lg font-bold cursor-pointer outline-none appearance-none"
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value={'latest'}>✨ 최신순</option>
          <option value={'oldest'}>🕰 오래된 순</option>
        </select>

        <button
          onClick={() => nav('/new')}
          className="bg-blue-500 text-white rounded-full px-6 py-3 font-bold text-lg hover:bg-blue-600 hover:scale-105 transition-transform shadow-md"
        >
          + 새 일기
        </button>
      </div>

      <div className="relative pl-4 md:pl-8 before:content-[''] before:absolute before:left-9.5 md:before:left-13.5 before:top-0 before:bottom-0 before:w-1 before:bg-slate-100 before:rounded-full">
        <div className="flex flex-col gap-10 pb-20 relative">
          {sortedData.map((item) => (
            <DiaryItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiaryList;
