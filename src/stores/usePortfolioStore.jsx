import { create } from 'zustand';

export const usePortfolioStore = create((set) => ({

    bgWhite: false,
    showHeaderLogo: false,
    loading: false,
    error: null,
    showCTA: false, 
    scrollToContact: false,
    
    setShowCTA: (input) => set({ showCTA: input}),
    setBgWhite: (input) => set({ bgWhite: input }),
    setShowHeaderLogo: (input) => set({ showHeaderLogo: input }),
    setScrollToContact: (input) => set({ scrollToContact: input})
}))