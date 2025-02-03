import { create } from 'zustand';

export const usePortfolioStore = create((set) => ({

    bgWhite: false,
    showHeaderLogo: false,
    loading: false,
    error: null,

    setBgWhite: (input) => set({ bgWhite: input }),
    setShowHeaderLogo: (input) => set({ showHeaderLogo: input }),
}))