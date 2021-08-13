import { useState } from "react";

 


export const Counter = () => {
  const [oparation, setOperation]= useState(5);
  
  return (
    <div>
      <button onClick={() => setOperation(oparation - 1)}>
        Restar
      </button>
      <button onClick={() => setOperation(oparation + 1)}>
        Sumar
      </button>
      <h4>
        {oparation}
      </h4>
      <button onClick={() => setOperation(5)}>
        Reset
      </button>
    </div>
  );  
};