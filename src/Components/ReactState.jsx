import { useState } from "react";


const ReactState = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <button className="border border-emerald-400 rounded-md p-1 text-sm hover:shadow-md" onClick={() => setCount(count + 1)}>Click {count} times</button>
            <p>Click 👆 the Button</p>
        </>
    );
};

export default ReactState;