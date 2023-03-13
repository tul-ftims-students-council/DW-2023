const MainTemplate = ({ children }) => {
  return (
    <div className="flex min-h-screen w-screen flex-col bg-black">
      {children}
    </div>
  );
};

export default MainTemplate;
