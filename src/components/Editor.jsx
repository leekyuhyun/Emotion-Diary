import EmotionItem from './EmotionItem';
import Button from './Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { emotionList } from '../utils/constants';

const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) month = `0${month}`;
  if (date < 10) date = `0${date}`;
  return `${year}-${month}-${date}`;
};

const Editor = ({ initData, onSubmit }) => {
  const nav = useNavigate();
  const [input, setInput] = useState(() => {
    if (initData) return { ...initData, createdDate: new Date(Number(initData.createdDate)) };
    return { createdDate: new Date(), emotionId: 3, content: '' };
  });

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'createdDate') value = new Date(value);
    setInput({ ...input, [name]: value });
  };

  const onSubmitButtonClick = () => {
    onSubmit(input);
  };

  return (
    <div className="space-y-8 pb-10">
      <section className="bg-white p-8 rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-50">
        <h4 className="text-xl font-bold mb-6 text-slate-400 flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span> 언제의 기록인가요?
        </h4>
        <input
          className="w-full bg-slate-50 text-blue-500 border-none rounded-3xl text-3xl font-extrabold px-8 py-6 outline-none transition-all focus:bg-blue-50 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] cursor-pointer"
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        />
      </section>

      <section className="bg-white p-8 rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-50">
        <h4 className="text-xl font-bold mb-8 text-slate-400 flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span> 어떤 기분이었나요?
        </h4>
        <div className="flex justify-between gap-2 md:gap-4">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              onClick={() =>
                onChangeInput({ target: { name: 'emotionId', value: item.emotionId } })
              }
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>

      <section className="bg-white p-8 rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-50">
        <h4 className="text-xl font-bold mb-6 text-slate-400 flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span> 오늘의 이야기
        </h4>
        <textarea
          className="w-full bg-slate-50 border-none rounded-3xl text-2xl p-8 outline-none transition-all text-slate-700 focus:bg-blue-50/50 focus:shadow-[0_0_0_4px_rgba(59,130,246,0.1)] min-h-75 resize-none leading-[2.2]"
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="당신의 하루를 자유롭게 들려주세요."
        />
      </section>

      <section className="flex justify-between gap-4 mt-12">
        <div className="w-1/3">
          <Button onClick={() => nav(-1)} text={'취소'} className="w-full" />
        </div>
        <div className="w-2/3">
          <Button
            onClick={onSubmitButtonClick}
            text={'기록 저장하기'}
            type={'POSITIVE'}
            className="w-full"
          />
        </div>
      </section>
    </div>
  );
};

export default Editor;
