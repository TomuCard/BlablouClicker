import { create } from 'zustand'

const useGameStore = create((set) => ({
  globalBlablou: 0,
  blablou: 0,
  // clickPower: 1,

  incrementBlablou: (amount) =>
    set((state) => ({ 
      blablou: state.blablou + amount,
      globalBlablou: state.globalBlablou + amount,
    })),

  // setClickPower: (value) => set({ clickPower: value }),
  setBlablou: (value) => set({ blablou: value }),

  loadFromLocalStorage: () => {
    try {
      const saved = localStorage.getItem('gameState');
      if (saved) {
        const parsed = JSON.parse(saved);
        set({
          globalBlablou: parsed.globalBlablou ?? 0,
          blablou: parsed.blablou ?? 0,
          // clickPower: parsed.blablou ?? 1,
        });
      }
    } catch (e) {
      console.error("Erreur au chargement du gameState", e);
    }
  }
}))

export default useGameStore
