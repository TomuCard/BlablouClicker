import React from 'react'
import useGameStore from '@storeGame'

export default function Clicker() {
  const { incrementBlablou, clickPower } = useGameStore();

  return (
    <button 
    className='clickerCoin w-100 h-100 rounded-ful hover:scale-105 active:scale-90 duration-250 ease-out'
    onClick={() => incrementBlablou(clickPower)}>
    </button>
  )
}
