import { create } from 'zustand';

export const usePortfolioStore = create((set) => ({

    showLogo: false,
    bgWhite: false,
    loading: false,
    error: null,

    setShowLogo: (input) => set({ showLogo: input }),
    setBgWhite: (input) => set({ bgWhite: input }),
}))