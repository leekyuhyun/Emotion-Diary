// className 속성을 추가로 받아서 커스텀할 수 있게 합니다.
const Button = ({ text, type, onClick, className = '' }) => {
  const btnClass =
    type === 'POSITIVE'
      ? 'bg-blue-500 text-white shadow-[0_8px_20px_rgba(59,130,246,0.3)] hover:bg-blue-600 hover:shadow-[0_12px_25px_rgba(59,130,246,0.4)]'
      : type === 'NEGATIVE'
        ? 'bg-red-500 text-white shadow-[0_8px_20px_rgba(239,68,68,0.3)] hover:bg-red-600 hover:shadow-[0_12px_25px_rgba(239,68,68,0.4)]'
        : 'bg-white text-slate-600 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:bg-slate-50 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)]';

  return (
    <button
      onClick={onClick}
      className={`cursor-pointer border-none rounded-full px-8 py-4 text-xl font-extrabold whitespace-nowrap transition-all duration-300 hover:-translate-y-1.5 active:translate-y-0 ${btnClass} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
