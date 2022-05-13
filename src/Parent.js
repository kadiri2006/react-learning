import React from 'react'
import { MemoChild } from './Child';


export default function Parent({first}) {
  console.log("render parent",first);
    return (
        <>
    <div>Parent</div>
        <MemoChild/>
        </>
  )
}
