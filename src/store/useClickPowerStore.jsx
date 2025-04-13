import { create } from 'zustand'
import useGameStore from '@storeGame'

const useClickPowerStore = create((set, get) => ({
  clickPowerPrice: 25,
  clickPowerAmount: 1,

  setclickPowerPrice: (value) => set({ clickPowerPrice: value }),
  setclickPowerAmount: (value) => set({ clickPowerAmount: value }),

  upgradeClickPower: () => {
    const { clickPower, blablou, setBlablou } = useGameStore.getState();
    const { clickPowerPrice, clickPowerAmount, setclickPowerPrice, setclickPowerAmount } = get();

    if (blablou >= clickPowerPrice) {
      // setClickPower(clickPower + 1);
      setBlablou(blablou - clickPowerPrice);

      setclickPowerPrice(Math.floor(clickPowerPrice * 1.5));
      setclickPowerAmount(clickPowerAmount + 1);
    }
  },

  loadFromLocalStorage: () => {
    try {
      const saved = localStorage.getItem('clickPowerState');
      if (saved) {
        const parsed = JSON.parse(saved);
        set({
          clickPowerPrice: parsed.clickPowerPrice ?? 25,
          clickPowerAmount: parsed.clickPowerAmount ?? 1
        });
      }
    } catch (e) {
      console.error("Erreur au chargement du clickPowerState", e);
    }
  }
}));

export default useClickPowerStore;
