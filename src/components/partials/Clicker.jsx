import React from 'react'
import useGameStore from '@storeGame'
import useClickPowerStore from '@storeClickPower';

export default function Clicker() {
  const { incrementBlablou } = useGameStore();
  const { clickPowerAmount } = useClickPowerStore();

  return (
    <button 
    className='clickerCoin w-100 h-100 rounded-ful hover:scale-105 active:scale-90 duration-250 ease-out'
    onClick={() => incrementBlablou(clickPowerAmount)}>
    </button>
  )
}
