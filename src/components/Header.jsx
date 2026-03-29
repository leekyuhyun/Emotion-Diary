const Header = ({ title, leftChild, rightChild }) => {
  return (
    <header className="flex items-center justify-between py-6 mb-2">
      <div className="shrink-0">{leftChild}</div>
      <div className="text-3xl font-extrabold text-slate-800 tracking-tight">{title}</div>
      <div className="shrink-0">{rightChild}</div>
    </header>
  );
};

export default Header;
