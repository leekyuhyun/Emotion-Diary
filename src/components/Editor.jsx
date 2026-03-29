import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import EmotionItem from './EmotionItem';
import { emotionList } from '../utils/constants';

const EditorSection = ({ title, children }) => (
  <section>
    <h4 className="text-xl font-black mb-3">{title}</h4>
    {children}
  </section>
);

const Editor = ({ initData, onSubmit }) => {
  const nav = useNavigate();
  const [input, setInput] = useState(
    initData
      ? { ...initData, createdDate: new Date(Number(initData.createdDate)) }
      : { createdDate: new Date(), emotionId: 3, content: '' },
  );

  const onChangeInput = (e) => {
    let { name, value } = e.target;
    if (name === 'createdDate') value = new Date(value);
    setInput({ ...input, [name]: value });
  };

  const onClickSubmit = () => {
    const targetDate = new Date(input.createdDate);
    targetDate.setHours(0, 0, 0, 0);
    onSubmit({ ...input, createdDate: targetDate });
  };

  return (
    <div className="flex flex-col gap-8 mt-4">
      <EditorSection title="오늘의 날짜">
        <input
          className="bg-gray-100 border-none rounded-xl p-4 text-lg w-full cursor-pointer"
          name="createdDate"
          type="date"
          value={input.createdDate.toISOString().split('T')[0]}
          onChange={onChangeInput}
        />
      </EditorSection>

      <EditorSection title="오늘의 감정">
        <div className="flex gap-2">
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
      </EditorSection>

      <EditorSection title="오늘의 일기">
        <textarea
          className="bg-gray-100 border-none rounded-xl p-5 text-lg w-full min-h-50 resize-none leading-relaxed"
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        />
      </EditorSection>

      <div className="flex justify-between items-center pb-20">
        <Button text="취소하기" onClick={() => nav(-1)} />
        <Button text="작성완료" type="POSITIVE" onClick={onClickSubmit} />
      </div>
    </div>
  );
};

export default Editor;
