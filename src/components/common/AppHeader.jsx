import { Link } from 'react-router-dom';

const AppHeader = () => {
  return (
    <header className="h-16 flex items-center justify-between px-6 bg-white border-b border-gray-50">
      <Link to="/" className="text-2xl font-black text-black tracking-tighter">
        EMOTION-DIARY
      </Link>
      <div className="w-9 h-9 rounded-full bg-blue-50 flex items-center justify-center text-xl border border-gray-100 shadow-sm">
        📝
      </div>
    </header>
  );
};

export default AppHeader;
