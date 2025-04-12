import { useEffect } from 'react';
import { create } from 'zustand'
import useGameStore from '@storeGame'

const useAutoClickStore = create((set, get) => ({
  autoClickerPrice: 50,
  autoClickerAmount: 1,

  setAutoClickerPrice: (value) => set({ autoClickerPrice: value }),
  setAutoClickerAmount: (value) => set({ autoClickerAmount: value }),

  upgradeAutoClick: () => {
    const { blablou, setBlablou } = useGameStore.getState();
    const { autoClickerPrice, autoClickerAmount, setAutoClickerPrice, setAutoClickerAmount } = get();

    if (blablou >= autoClickerPrice) {
      setAutoClickerAmount(autoClickerAmount + 1);
      setBlablou(blablou - autoClickerPrice);
      setAutoClickerPrice(Math.floor(autoClickerPrice * 1.5));


    }
  },
}))

export default useAutoClickStore;
