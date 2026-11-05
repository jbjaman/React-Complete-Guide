import useCounter from "./DeepCustomHook";

function CounterA() {
  const { count, increment, decrement } = useCounter();

  return (
    <>
      <h2>Counter A: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

export default CounterA;
