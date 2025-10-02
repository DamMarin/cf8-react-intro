import {useState} from "react";
import CounterButton from "./CounterButton.tsx";

type CounterState ={
  count: number;
  lastAction: string;
  time: string;
}

const CounterAdvanced = () => {

  const [state, setState] = useState<CounterState>({
    count: 0,
    lastAction: "",
    time: "",
  });

  const getCurrentTime = () => new Date().toLocaleTimeString();

  const increaseCount = () => {
    setState({
      count: state.count + 1,
      lastAction: "Increase",
      time: getCurrentTime(),
    });
  }

  const decreaseCount = () => {
    if (state.count > 0){
      setState({
        count: state.count -1,
        lastAction: "Decrease",
        time: getCurrentTime(),
        });
    }
  }

  const resetCount = () => {
    setState({
      count: 0,
      lastAction: "Reset",
      time: getCurrentTime(),
    })
  }

  return (
    <>
      <h1 className="text-center text-2xl my-12">Count is <strong>{state.count}</strong></h1>
      <div className="text-center space-x-4">
        <CounterButton
          onClick={increaseCount}
          label="Increase"
        />
        <CounterButton
          onClick={decreaseCount}
          label="Decrease"
          disabled={state.count === 0}
        />
        <CounterButton
          onClick={resetCount}
          label="Reset"
          disabled={state.count === 0}
          addClasses="bg-cf-dark-red disabled:bg-red-500"
        />
      </div>
      <p className="text-center text-cf-gray pt-8">
        Last Change: <strong>{state.lastAction || "-"}</strong> at <strong>{state.time || "-"}</strong>
      </p>

    </>
  )
}
export default CounterAdvanced;