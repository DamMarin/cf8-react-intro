import {useEffect, useState} from "react";


const WindowSize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
        });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[]);

  return (
  <>
    <div className="text-center pt-12">
      <h1 className="text-cf-dark-gray text-xl">
        Window Size: {size.width} x {size.height}
      </h1>
    </div>
  </>
  );
};

export default WindowSize;