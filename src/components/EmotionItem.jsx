import getEmotionImage from '../utils/get-emotion-image';

const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
  const commonClass =
    'py-6 rounded-3xl cursor-pointer text-center transition-all duration-300 flex-1 border-2';

  const unselectedClass = 'bg-slate-50 border-slate-50 hover:bg-slate-100 hover:scale-[1.03]';

  const selectedClasses = {
    1: 'bg-green-500 border-green-500 shadow-[0_8px_20px_rgba(34,197,94,0.3)] text-white scale-105 -translate-y-2',
    2: 'bg-[#8de3a9] border-[#8de3a9] shadow-[0_10px_25px_rgba(141,227,169,0.4)] text-green-900 scale-110 -translate-y-4',
    3: 'bg-yellow-400 border-yellow-400 shadow-[0_10px_25px_rgba(250,204,21,0.4)] text-white scale-110 -translate-y-4',
    4: 'bg-orange-400 border-orange-400 shadow-[0_8px_20px_rgba(251,146,60,0.3)] text-white scale-105 -translate-y-2',
    5: 'bg-red-500 border-red-500 shadow-[0_8px_20px_rgba(239,68,68,0.3)] text-white scale-105 -translate-y-2',
  };

  const appliedClass = `${commonClass} ${isSelected ? selectedClasses[emotionId] : unselectedClass}`;

  return (
    <div onClick={onClick} className={appliedClass}>
      <img
        className={`w-1/2 mx-auto mb-4 transition-all duration-300 ${
          isSelected ? 'scale-110 drop-shadow-md' : 'opacity-90'
        }`}
        src={getEmotionImage(emotionId)}
        alt={emotionName}
      />
      <div
        className={`text-xl font-bold transition-colors duration-300 ${
          isSelected ? (emotionId === 2 ? 'text-green-700' : 'text-white') : 'text-slate-400'
        }`}
      >
        {emotionName}
      </div>
    </div>
  );
};

export default EmotionItem;
