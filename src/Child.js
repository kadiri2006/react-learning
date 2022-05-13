import React from 'react'
import Child2 from './Child2';

export default function Child() {
  console.log("render child");

    return (
      <>
    
            <div>Child</div>
             <Child2/>
        </>
  )
}
