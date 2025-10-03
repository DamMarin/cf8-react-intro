import {useEffect, useState} from "react";

const Timer = () =>{
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [running])

  const handleStart = () => setRunning(true);
  const handleStop = () => setRunning(false);
  const handleReset = () => {
    setRunning(false);
    setSeconds(0);
  }

  return (
    <>
      <div className="text-center pt-12">
        <h1 className="text-2xl mb-8">Timer: {seconds} seconds</h1>
        <div className="space-x-2">
          <button
            className="px-4 py-2 bg-green-600 hover:bg-green-800 text-white rounded"
            onClick={handleStart}
          >
            Start
          </button>
          <button
            className="px-4 py-2 bg-red-600 hover:bg-red-800 text-white rounded"
            onClick={handleStop}
          >
            Stop
          </button>
          <button
            className="px-4 py-2 bg-gray-600 hover:bg-gray-800 text-white rounded"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>

      </div>
    </>
  )
}

export default Timer;