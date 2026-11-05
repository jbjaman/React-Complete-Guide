import SearchBox from "./CustomHookSearchBox";
import DeepCustomHookA from "./DeepCustomHookA";
import DeepCustomHookB from "./DeepCustomHookB";

const App = () => {
  return (
    <div>
      <h1>HOOKS</h1>
      <DeepCustomHookA />
      <DeepCustomHookB />
      <div className="p-10 border">
        <SearchBox />
      </div>
    </div>
  );
};

export default App;
