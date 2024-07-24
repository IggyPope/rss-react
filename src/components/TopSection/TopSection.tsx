import { type FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ErrorButton } from '@/components/ErrorButton/ErrorButton';
import { Button } from '@/components/ui/Button';
import { LOCAL_STORAGE_KEY } from '@/constants/app';
import { useSyncLocalStorage } from '@/hooks/useSyncLocalStorage';

import styles from './TopSection.module.scss';

export const TopSection = () => {
  const [searchQuery, setSearchQuery] = useSyncLocalStorage(LOCAL_STORAGE_KEY);
  const [inputValue, setInputValue] = useState(searchQuery);

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchQuery(inputValue);
    navigate(`/page/1/`);
  };

  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          placeholder="Search by name"
          className={styles.input}
          type="text"
          value={inputValue || ''}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <Button type="submit">Search</Button>
        <ErrorButton />
      </form>
    </header>
  );
};
