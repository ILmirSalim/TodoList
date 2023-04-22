import { useCallback } from "react";

export function useLocalStorage(key:string) {
  const getItemInLS = useCallback(() => {
    const itemInLs = JSON.parse(localStorage.getItem(key) || "null");
    return itemInLs;
  }, [key]);

  const setItemInLS = useCallback((item: any) => {
    localStorage.setItem(key, JSON.stringify(item));
  }, [key]);

  return { getItemInLS, setItemInLS };
}