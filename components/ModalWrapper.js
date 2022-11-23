const ModalWrapper = ({ children }) => {
  return (
    <div className="h-screen w-screen z-50 flex items-center justify-center p-3 fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-20">
      {children}
    </div>
  );
};

export default ModalWrapper;
