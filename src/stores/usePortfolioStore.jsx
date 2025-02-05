import { create } from 'zustand';

export const usePortfolioStore = create((set) => ({

    bgWhite: false,
    showHeaderLogo: false,
    loading: false,
    error: null,
    showCTA: false, 
    scrollToContact: false,
    scrollToOmEllen: false,
    scrollToGalleri: false,
    scrollToCv: false,
    showMore: false,
    
    setShowCTA: (input) => set({ showCTA: input}),
    setBgWhite: (input) => set({ bgWhite: input }),
    setShowHeaderLogo: (input) => set({ showHeaderLogo: input }),
    setScrollToContact: (input) => set({ scrollToContact: input}),
    setScrollToOmEllen: (input) => set({ scrollToOmEllen: input}),
    setScrollToGalleri: (input) => set({ scrollToGalleri: input }),
    setScrollToCv: (input) => set({ scrollToCv: input }),
    setShowMore: (input) => set({ showMore: input })
}))