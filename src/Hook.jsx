import React, { useState } from 'react';

const Hook = () => {

  let [count, setcount] = useState(0);

  let inc = () => {
    setcount(count + 1);
  };

  let dic = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  };

  const reset = () => {
    setcount(0);
  };

  console.log(count);

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <button onClick={inc}>+</button>

        <h1>{count}</h1>

        <button onClick={dic} disabled={count === 0}>-</button>

        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default Hook;
