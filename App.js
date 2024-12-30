import React, { useState } from "react";

const  App = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: "center", marginTop: "50px"}}>
            <h1>Count App</h1>
            <p>Counter: {count}</p>
            <button
                onClick={() => setCount(count+1)}
                style = {{padding:"10px 20px", marginRight:"10px"}}
                >
                Increment
            </button>
            <button
                onClick={() => setCount(count-1)}
                style = {{padding:"10px 20px", marginRight:"10px"}}
                >
                Decrement
            </button>
        </div>
    );
};
export default App;
