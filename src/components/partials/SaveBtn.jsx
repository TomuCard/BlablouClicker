import React from 'react';
import { save } from '@autoSave'

export default function SaveBtn() {
  return (
    <button 
    onClick={save}
    className='bg-green-700 hover:bg-green-600 absolute bottom-0 left-0 m-6 px-6 py-3 rounded-xl hover:scale-110 cursor-pointer'>
      SAVE GAME
    </button>
  )
}