import { create } from 'zustand';

export const useSearchStore = create((set) => ({
  search: '',
  setSearch: (val) => set({ search: val }),
}));
