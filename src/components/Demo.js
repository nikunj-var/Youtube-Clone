import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";
const Demo = () => {
  const [text, setText] = useState("0");
//   we use useMemo to memoize the heavy operation
  const prime = useMemo(() => findNthPrime(text), [text]);
  return (
    <div className="m-4 p-2 h-96 w-96 border border-black">
      <div>
        <input
          className="border border-black w-80"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <h1 className=" text-2xl font-extrabold">Nth prime - {prime}</h1>
      </div>
    </div>
  );
};
export default Demo;
