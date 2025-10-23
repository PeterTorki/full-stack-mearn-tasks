import React, { useState } from 'react';

const UseTimer = (init) => {

  const [timer, setTimer] = useState(init);

  const incrTimer = ()=>{
    setTimer((old)=> old + 1);
  }

  const decrTimer = ()=>{
    setTimer((old)=> old - 1);
  }

  return [timer, incrTimer, decrTimer]
}

export default UseTimer;
