import { create } from "zustand";

const initialState = {
  userStore: {},
};

const useUserStore = create((set) => ({
  ...initialState,
  setUserStore: (arg) => set({ userStore: arg }),
}));

export default useUserStore;
