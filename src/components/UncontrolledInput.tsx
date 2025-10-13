import {useRef} from "react";

const UncontrolledInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    alert(inputRef.current?.value);
  }
  return (
    <>
    <div className="text-center mt-12">
      <input
        ref={inputRef}
        type="text"
        className="border rounded px-4 py-2"
      />
      <button
        onClick={handleClick}
        className="ml-2 bg-cf-dark-red text-white px-4 py-2 rounded">
        Show Value
      </button>
      <p className="mt-2">Value: {inputRef.current?.value}</p>
    </div>
    </>
  )
}

export default UncontrolledInput;