import React, { useEffect } from 'react';

import { ErrorButton } from '@/components/ErrorButton/ErrorButton';
import { Button } from '@/components/ui/Button';
import { LOCAL_STORAGE_KEY } from '@/constants/app';
import { useSyncLocalStorage } from '@/hooks/useSyncLocalStorage';

import styles from './TopSection.module.scss';

export const TopSection = () => {
  const [searchQuery, setSearchQuery] = useSyncLocalStorage(LOCAL_STORAGE_KEY);
  const [inputValueState, setInputValueState] = React.useState(searchQuery);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchQuery(inputValueState);
  };

  useEffect(() => {
    setInputValueState(searchQuery);
  }, [searchQuery]);

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          placeholder="Search by name"
          className={styles.input}
          type="text"
          value={inputValueState || ''}
          onChange={(event) => setInputValueState(event.target.value)}
        />
        <Button type="submit">Search</Button>
        <ErrorButton />
      </form>
    </header>
  );
};
