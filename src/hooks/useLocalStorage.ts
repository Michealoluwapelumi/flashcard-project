"use client";

import { useEffect, useState } from "react";

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, (value: T | ((currentValue: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item) as T);
      }
    } catch {
      // Ignore read errors during SSR or private browsing
    }
  }, [key]);

  const setValue = (value: T | ((currentValue: T) => T)) => {
    setStoredValue((currentValue) => {
      const resolvedValue = value instanceof Function ? value(currentValue) : value;
      try {
        window.localStorage.setItem(key, JSON.stringify(resolvedValue));
      } catch {
        // Ignore write errors
      }
      return resolvedValue;
    });
  };

  return [storedValue, setValue];
}
