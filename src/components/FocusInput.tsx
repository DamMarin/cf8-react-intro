import {useRef} from "react";

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () =>{
    inputRef.current?.focus()
  }

  return (
    <>
      <div className="text-center space-x-4 mt-12">
        <input
          ref={inputRef}
          type="text" className="border px-4 py-2"/>
        <button className="bg-cf-dark-gray text-white py-2 px-4"
        onClick={handleClick}
        >
          Focus
        </button>
      </div>
    </>
  )
}

export default FocusInput;