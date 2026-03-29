const Button = ({ text, type, onClick }) => {
  const btnType = ['POSITIVE', 'NEGATIVE'].includes(type) ? type : 'DEFAULT';

  const typeClass = {
    DEFAULT:
      'bg-white text-slate-500 border border-slate-200 hover:bg-slate-50 hover:text-slate-600',

    POSITIVE:
      'bg-white text-diary-blue border border-slate-200 hover:bg-diary-blue hover:text-white hover:border-diary-blue shadow-sm',

    NEGATIVE:
      'bg-white text-rose-500 border border-slate-200 hover:bg-rose-500 hover:text-white hover:border-rose-500 shadow-sm',
  }[btnType];

  return (
    <button
      onClick={onClick}
      className={`cursor-pointer px-5 py-2 rounded-xl text-base font-black transition-all active:scale-95 ${typeClass}`}
    >
      {text}
    </button>
  );
};

export default Button;
