import { useCallback, useEffect, useRef, useSyncExternalStore } from 'react';

import { Store } from '@/util/Store';

export const useSyncLocalStorage = (key: string) => {
  const searchStore = new Store(key, localStorage);

  const storedValue = useSyncExternalStore(
    searchStore.subscribe,
    searchStore.getSnapshot,
  );

  const value = useRef(storedValue);

  const setValue = useCallback(
    (value: string | null) => {
      if (value === null) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, value);
      }
      dispatchEvent(new StorageEvent('storage', { key, newValue: value }));
    },
    [key],
  );

  useEffect(() => {
    value.current = storedValue;

    return () => {
      if (value.current && value.current !== storedValue) {
        setValue(value.current);
      }
    };
  }, [key, storedValue, setValue]);

  return [storedValue, setValue] as const;
};
