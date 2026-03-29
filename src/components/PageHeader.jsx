const PageHeader = ({ title, leftChild, rightChild }) => {
  return (
    <header className="flex items-center justify-between py-6 px-1 mb-2">
      <div className="min-w-20 flex justify-start">{leftChild}</div>
      <div className="text-2xl font-black text-black text-center flex-1 tracking-tighter">
        {title}
      </div>
      <div className="min-w-20 flex justify-end">{rightChild}</div>
    </header>
  );
};

export default PageHeader;
