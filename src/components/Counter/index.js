import React, { useState } from 'react'
// import styles from './CardFront.module.scss'

function Counter() {
  const [count, setCount] = useState(0);
  const [years, addYear] = useState(0);
    return (
      <div>
        <div>
          <button onClick={()=> setCount(count-1)}>Minus</button>
          clicked {count}-times <br/>
          <button onClick={()=> setCount(count+1)}>Plus</button>
        </div>
        <div>
        <button onClick={()=> addYear(years-1)}>Minus</button>
        Years: {years} <br/>
        <button onClick={()=> addYear(years+1)}>Plus</button>
      </div>
      </div>
    );
}


export default Counter;