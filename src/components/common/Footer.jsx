import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const nav = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: '홈', path: '/' },
    { label: '작성하기', path: '/new' },
    { label: '감정통계', path: '/statistics' },
  ];

  return (
    <footer className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-120 bg-white border-t border-blue-50 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.04)]">
      <div className="flex justify-around items-center h-16 px-6">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <button
              key={index}
              onClick={() => nav(item.path)}
              className="flex flex-col items-center justify-center w-full h-full transition-all cursor-pointer group"
            >
              <span
                className={`text-base font-black transition-all tracking-tight ${
                  isActive
                    ? 'text-diary-blue scale-105'
                    : 'text-slate-300 group-hover:text-slate-400'
                }`}
              >
                {item.label}
              </span>

              <div className="h-1 mt-0.5">
                {isActive && (
                  <div className="w-1 h-1 bg-diary-blue rounded-full animate-in fade-in zoom-in duration-300" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
