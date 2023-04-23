import { useCallback } from "react";

export function useLocalStorage<T>(key:string) {
  const getItemInLS = useCallback(() => {
    return JSON.parse(localStorage.getItem(key) || "null");
  }, [key]);

  const setItemInLS = useCallback((item: T) => {
    localStorage.setItem(key, JSON.stringify(item));
  }, [key]);

  return { getItemInLS, setItemInLS };
}