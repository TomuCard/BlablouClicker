import { create } from 'zustand'
import useGameStore from '@storeGame'

const useAutoClickStore = create((set, get) => ({
  autoClickerPrice: 50,
  autoClickerAmount: 0,

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

  loadFromLocalStorage: () => {
    try {
      const saved = localStorage.getItem('autoClickerState');
      if (saved) {
        const parsed = JSON.parse(saved);
        set({
          autoClickerPrice: parsed.autoClickerPrice ?? 50,
          autoClickerAmount: parsed.autoClickerAmount ?? 0
        });
      }
    } catch (e) {
      console.error("Erreur au chargement du clickPowerState", e);
    }
  }
}))

export default useAutoClickStore;
