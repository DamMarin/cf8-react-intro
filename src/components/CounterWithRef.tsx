import CounterButton from "./CounterButton.tsx";
import {useState, useRef} from "react";

const CounterWithRef = () => {
  const [count, setCount] = useState(0);
  const clickRef = useRef(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    clickRef.current += 1;
    console.log("Ref Click", clickRef.current);
  };

  return (
    <>
      <div className="text-center mt-12">
        <h1 className="text-2xl mb-4">Count (state): {count}</h1>
        <h2 className="text-xl mb-4">Count (ref): {clickRef.current}</h2>
        <CounterButton
        onClick={handleClick}
        label="Increase"/>
      </div>
    </>
  )
}

export default CounterWithRef;