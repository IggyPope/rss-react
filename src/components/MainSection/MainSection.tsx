import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  API_PEOPLE_URL,
  ITEMS_PER_PAGE,
  LOCAL_STORAGE_KEY,
} from '@/constants/app';
import { useSyncLocalStorage } from '@/hooks/useSyncLocalStorage';
import { CharacterBaseResponse } from '@/types/api';

import { CardList } from '../CardList/CardList';
import { Pagination } from '../Pagination/Pagination';
import styles from './MainSection.module.scss';

export const MainSection = () => {
  const [searchQuery] = useSyncLocalStorage(LOCAL_STORAGE_KEY);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);

  useEffect(() => {
    setSearchParams({ page: String(page) });
  }, [page, setSearchParams]);

  const [charactersData, setCharactersData] =
    useState<CharacterBaseResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCharacters = useCallback(async () => {
    setIsLoading(true);

    const params = new URLSearchParams();

    if (searchQuery) {
      params.append('search', searchQuery);
    }

    if (page) {
      params.append('page', page.toString());
    }

    const response = await fetch(`${API_PEOPLE_URL}/?${params.toString()}`);

    const data = (await response.json()) as CharacterBaseResponse;

    setCharactersData(data);
    setIsLoading(false);
  }, [searchQuery, page]);

  useEffect(() => {
    console.log('searchQuery', searchQuery);
    void fetchCharacters();
  }, [page, searchQuery, fetchCharacters]);

  return (
    <main className={styles.main}>
      {isLoading && <div>Loading...</div>}
      {!isLoading && !charactersData?.results?.length && (
        <h1>No characters found</h1>
      )}
      {!isLoading && charactersData?.results?.length && (
        <CardList characters={charactersData.results} />
      )}
      {!isLoading &&
        charactersData?.results?.length &&
        charactersData?.count > ITEMS_PER_PAGE && (
          <Pagination
            prev={!!charactersData?.previous?.length}
            next={!!charactersData?.next?.length}
            page={page}
            setPage={setPage}
          />
        )}
    </main>
  );
};
