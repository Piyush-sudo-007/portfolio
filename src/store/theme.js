import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: "light",

  toggleTheme: () =>
    set((state) => {
      const nextTheme = state.theme === "light" ? "dark" : "light";

      document.documentElement.classList.toggle("dark", nextTheme === "dark");
      localStorage.setItem("theme", nextTheme);

      return { theme: nextTheme };
    }),
}));

export const initTheme = () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.classList.toggle("dark", savedTheme === "dark");
};

export default useThemeStore;
