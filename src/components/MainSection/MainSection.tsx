import { useCallback, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

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

  const params = useParams();

  const [charactersData, setCharactersData] =
    useState<CharacterBaseResponse | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const fetchCharacters = useCallback(async () => {
    setIsLoading(true);

    const requestParams = new URLSearchParams();

    if (searchQuery) {
      requestParams.append('search', searchQuery);
    }

    if (params.pageNumber) {
      requestParams.append('page', params.pageNumber);
    }

    const response = await fetch(
      `${API_PEOPLE_URL}/?${requestParams.toString()}`,
    );

    const data = (await response.json()) as CharacterBaseResponse;

    setCharactersData(data);

    setIsLoading(false);
  }, [searchQuery, params.pageNumber]);

  useEffect(() => {
    void fetchCharacters();
  }, [searchQuery, fetchCharacters]);

  return (
    <main className={styles.main}>
      <div className={styles.list}>
        {isLoading && <div>Loading...</div>}
        {!isLoading && !charactersData?.results?.length && (
          <h1>No characters found</h1>
        )}
        {!isLoading && charactersData?.results?.length && (
          <div className={styles.content}>
            <CardList characters={charactersData.results} />
            <Outlet />
          </div>
        )}
        {!isLoading &&
          charactersData?.results?.length &&
          charactersData?.count > ITEMS_PER_PAGE && (
            <Pagination
              disablePrev={charactersData?.previous === null}
              disableNext={charactersData?.next === null}
            />
          )}
      </div>
    </main>
  );
};
