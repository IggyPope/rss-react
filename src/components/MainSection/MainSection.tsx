import { useEffect, useState } from 'react';

import { API_PEOPLE_URL, LOCAL_STORAGE_KEY } from '@/constants/app';
import { useSyncLocalStorage } from '@/hooks/useSyncLocalStorage';
import { CharacterBase, CharacterBaseResponse } from '@/types/api';

import styles from './MainSection.module.scss';

export const MainSection = () => {
  const [searchQuery] = useSyncLocalStorage(LOCAL_STORAGE_KEY);

  const [characters, setCharacters] = useState<CharacterBase[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    void fetchCharacters(searchQuery);
  }, [searchQuery]);

  const fetchCharacters = async (searchTerm?: string | null) => {
    setIsLoading(true);

    const response = await fetch(
      `${API_PEOPLE_URL}/${searchTerm ? `?search=${searchTerm}` : ''}`,
    );

    const data = (await response.json()) as CharacterBaseResponse;

    const characters = data.results;

    setCharacters(characters);
    setIsLoading(false);
  };

  return (
    <main className={styles.main}>
      {isLoading && <div>Loading...</div>}
      {!isLoading && !characters.length && <h1>No characters found</h1>}
      {!isLoading &&
        characters.length &&
        characters.map((character) => (
          <div
            key={character.name}
          >{`${character.name} - birth year: ${character.birth_year}`}</div>
        ))}
    </main>
  );
};
