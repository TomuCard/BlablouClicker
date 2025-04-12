import { create } from 'zustand'
import useGameStore from '@storeGame'

const useClickPoweStore = create((set, get) => ({
  clickPowerPrice: 25,
  clickPowerAmount: 1,

  setclickPowerPrice: (value) => set({ clickPowerPrice: value }),
  setclickPowerAmount: (value) => set({ clickPowerAmount: value }),

  upgradeClickPower: () => {
    const { clickPower, blablou, setClickPower, setBlablou } = useGameStore.getState();
    const { clickPowerPrice, clickPowerAmount, setclickPowerPrice, setclickPowerAmount } = get();

    if (blablou >= clickPowerPrice) {
      setClickPower(clickPower + 1);
      setBlablou(blablou - clickPowerPrice);

      setclickPowerPrice(Math.floor(clickPowerPrice * 1.5));
      setclickPowerAmount(clickPowerAmount + 1);
    }
  },
}))

export default useClickPoweStore;
