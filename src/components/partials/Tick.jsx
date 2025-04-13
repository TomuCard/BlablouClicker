import { useEffect } from 'react'
import useGameStore from '@storeGame'
import useAutoClickStore from '@storeAutoClick'

export default function useTick() {
  const { clickPower, incrementBlablou } = useGameStore();
  const { autoClickerAmount } = useAutoClickStore();

  // AUTO CLICKER
  useEffect(() => {
    const interval = setInterval(() => {
      incrementBlablou(autoClickerAmount * clickPower);
    }, 10000);
  
    return () => clearInterval(interval);
  }, [autoClickerAmount]);
}