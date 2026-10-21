import useCounter from "./DeepCustomHook";

function CounterB() {
  const { count, increment, decrement } = useCounter();

  return (
    <>
      <h2>Counter B: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default CounterB;
