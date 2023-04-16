import { useCallback } from "react";

export function useLocalStorage(key) {
    const getItemInLS = useCallback(() => {
        const itemInLs = JSON.parse(localStorage.getItem(key));
        return itemInLs;
    }, [key])

    const setItemInLS = useCallback((item) => {
        localStorage.setItem(key, JSON.stringify(item));
    }, [key])

    return { getItemInLS, setItemInLS }
}