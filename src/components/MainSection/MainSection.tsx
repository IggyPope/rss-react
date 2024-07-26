import { Outlet } from 'react-router-dom';

import { CardList } from '@/components/CardList/CardList';
import { Pagination } from '@/components/Pagination/Pagination';
import { ITEMS_PER_PAGE } from '@/constants/app';
import { useGetFilteredCharacters } from '@/hooks/useGetFilteredCharacters';

import { Flyout } from '../Flyout/Flyout';
import styles from './MainSection.module.scss';

export const MainSection = () => {
  const { data: charactersResponse, isFetching } = useGetFilteredCharacters();

  return (
    <main className={styles.main}>
      <div className={styles.list}>
        {isFetching && <div>Loading...</div>}
        {!isFetching && !charactersResponse?.results?.length && (
          <h1>No characters found</h1>
        )}
        {!isFetching &&
          charactersResponse?.results?.length &&
          charactersResponse?.count > ITEMS_PER_PAGE && (
            <Pagination
              disablePrev={charactersResponse?.previous === null}
              disableNext={charactersResponse?.next === null}
            />
          )}
        {!isFetching && charactersResponse?.results?.length && (
          <div className={styles.content}>
            <CardList characters={charactersResponse.results} />
            <Outlet />
          </div>
        )}
        {!isFetching && charactersResponse?.results?.length && <Flyout />}
      </div>
    </main>
  );
};
