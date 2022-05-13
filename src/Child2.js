import React from 'react'
import Child3 from './Child3';

export default function Child2() {
  console.log("render child-2");

    return (
      <>
    
            <div>Child2</div>
      <Child3/>
        </>
  )
}
