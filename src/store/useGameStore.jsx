import { useEffect } from 'react';
import { create } from 'zustand'

const useGameStore = create((set) => ({
  globalBlablou: 0,
  blablou: 0,
  clickPower: 1,

  incrementBlablou: (amount) =>
    set((state) => ({ 
      blablou: state.blablou + amount,
      globalBlablou: state.globalBlablou + amount,
    })),

  setClickPower: (value) => set({ clickPower: value }),
  setBlablou: (value) => set({ blablou: value }),

  loadFromLocalStorage: () => {
    try {
      const savedState = localStorage.getItem('gameState');
      return savedState ? JSON.parse(savedState) : { globalBlablou: 0, blablou: 0, clickPower: 1 };
    } catch (error) {
      console.error("Error loading from localStorage", error);
      return { globalBlablou: 0, blablou: 0, clickPower: 1 };
    }
  },

  getGameAllData: () => {
    console.log(useGameStore.getState());
    
    return useGameStore.getState();
  }
}))

export default useGameStore
