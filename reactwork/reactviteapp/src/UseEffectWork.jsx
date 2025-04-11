import React, { useEffect, useState } from 'react'

function UseEffectWork() {
const[count,setCount]=useState(10);
const[pointer,setPointer]=useState(100);
function doIncrement(){
    setCount(count+20);
}

function doPointer(){
    setPointer(pointer-10);
}
  useEffect(()=>{
    console.log("Component is renderd using count"+count);
    console.log("Component is renderd using pointer"+pointer);
  },[count,pointer])

  return (
    <div>
count value:{count}
<br></br>
pointer value:{pointer}
<div>
    <button onClick={doIncrement}>Increment</button>
    <button onClick={doPointer}>Pointer</button>
</div>
    </div>
    
  )
}

export default UseEffectWork