import getEmotionImage from '../utils/get-emotion-image';

const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
  const emotionBaseStyles = {
    1: 'bg-green-50 text-green-700',
    2: 'bg-emerald-50 text-emerald-700',
    3: 'bg-yellow-50 text-yellow-700',
    4: 'bg-orange-50 text-orange-700',
    5: 'bg-red-50 text-red-700',
  };

  const emotionSelectedStyles = {
    1: 'bg-green-500 text-white shadow-md shadow-green-200',
    2: 'bg-emerald-400 text-white shadow-md shadow-emerald-200',
    3: 'bg-yellow-400 text-white shadow-md shadow-yellow-200',
    4: 'bg-orange-400 text-white shadow-md shadow-orange-200',
    5: 'bg-red-500 text-white shadow-md shadow-red-200',
  };

  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center justify-center cursor-pointer flex-1 py-3 rounded-xl border border-white transition-all ${
        isSelected ? emotionSelectedStyles[emotionId] : emotionBaseStyles[emotionId]
      }`}
    >
      <img className="w-9 mb-1" src={getEmotionImage(emotionId)} alt={emotionName} />
      <div className="text-sm font-black tracking-tighter">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
