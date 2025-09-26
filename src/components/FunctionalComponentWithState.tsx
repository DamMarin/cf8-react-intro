import {useState} from 'react';

const FunctionalComponentWithState = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  }

  return (
    <>
      <h1 className="text-center my-12">Count is <strong>{count}</strong></h1>
      <div className="text-center">
        <button
          className="bg-cf-dark-gray text-white py-2 px-4"
          onClick={increaseCount}
        >
          Increase
        </button>
      </div>
    </>
  )
}
export default FunctionalComponentWithState;