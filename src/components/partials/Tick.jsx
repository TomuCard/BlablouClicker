import { useEffect } from 'react'
import useGameStore from '@storeGame'
import useAutoClickStore from '@storeAutoClick'
import useClickPowerStore from '@storeClickPower';

export default function useTick() {
  const { incrementBlablou } = useGameStore();
  const { autoClickerAmount } = useAutoClickStore();
  const { clickPowerAmount } = useClickPowerStore();

  // AUTO CLICKER
  useEffect(() => {
    const interval = setInterval(() => {
      incrementBlablou(autoClickerAmount * clickPowerAmount);
    }, 10000);
  
    return () => clearInterval(interval);
  }, [autoClickerAmount]);
}