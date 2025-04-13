import { useEffect } from 'react'
import useGameStore from '@storeGame'
import useAutoClickStore from '@storeAutoClick'
import useClickPowerStore from '@storeClickPower'

export default function useAutoSave() {
  const loadGame = useGameStore(state => state.loadFromLocalStorage);
  const loadAutoClick = useAutoClickStore(state => state.loadFromLocalStorage);
  const loadClickPower = useClickPowerStore(state => state.loadFromLocalStorage);

  useEffect(() => {
    loadGame();
    loadAutoClick();
    loadClickPower();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      save();
    }, 120000) // toutes les 2 minutes

    return () => clearInterval(interval)
  }, [])
}

export function save() {
  const gameState = useGameStore.getState()
  const autoClickerState = useAutoClickStore.getState()
  const clickPowerState = useClickPowerStore.getState()

  localStorage.setItem('gameState', JSON.stringify(gameState))
  localStorage.setItem('autoClickerState', JSON.stringify(autoClickerState))
  localStorage.setItem('clickPowerState', JSON.stringify(clickPowerState))

  console.log('[AutoSave] GameState saved.')
}