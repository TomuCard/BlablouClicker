import React from 'react';

export default function Shop(props) {
  return (
    <div
      onClick={() => props.click(props.amount, props.price)}
        className='select-none bg-amber-700 hover:bg-amber-800 p-6 flex justify-between border-b-3 border-amber-900'
      >
        <p><span className='text-sm text-neutral-300'>x{props.amount} </span>{props.title}</p>
        <p>{props.price}</p>
      </div>
  )
}