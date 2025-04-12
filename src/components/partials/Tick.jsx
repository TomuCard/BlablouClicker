import { useEffect } from 'react'
import useGameStore from '@storeGame'
import useAutoClickStore from '@storeAutoClick'

export default function Tick() {
  const { clickPower, incrementBlablou } = useGameStore();
    const { autoClickerAmount } = useAutoClickStore();

  useEffect(() => {
    const interval = setInterval(() => {
      incrementBlablou(autoClickerAmount * clickPower);
    }, 1000);
  
    return () => clearInterval(interval);
  }, [autoClickerAmount]);
}