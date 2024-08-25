import { createPortal } from 'react-dom';

const Portal = ({ children }) => {
  return (
    <div className="absolute top-0 left-0 z-[100] bg-gray-100 opacity-40 w-full h-full flex justify-center items-center overflow-hidden ">
      {createPortal(<div className="absolute top-1/2 left-1/2">{children}</div>, document.body)}
    </div>
  );
};

export default Portal;
