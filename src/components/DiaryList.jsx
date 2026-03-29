import DiaryItem from './DiaryItem';
import { useState } from 'react';

const DiaryList = ({ data }) => {
  const [sortType, setSortType] = useState('latest');

  const sortedData = data.toSorted((a, b) => {
    if (sortType === 'oldest') return Number(a.createdDate) - Number(b.createdDate);
    return Number(b.createdDate) - Number(a.createdDate);
  });

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-6 px-1">
        <div className="relative flex items-center gap-1">
          <select
            className="bg-transparent text-sm font-black outline-none cursor-pointer appearance-none pr-5 text-slate-600 hover:text-diary-blue transition-colors"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value={'latest'}>최신순</option>
            <option value={'oldest'}>오래된 순</option>
          </select>
          <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[8px] text-slate-400">
            ▼
          </span>
        </div>

        <span className="text-[11px] text-slate-300 font-black tracking-widest">
          TOTAL {data.length}
        </span>
      </div>

      <div className="flex flex-col pb-24">
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
