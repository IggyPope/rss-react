import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Button } from '../ui/Button';
import styles from './Pagination.module.scss';

interface Props {
  prev: boolean;
  next: boolean;
  page: number;
  setPage: (page: number) => void;
}

export const Pagination = ({ prev, next, page, setPage }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get('page')) {
      searchParams.set('page', '1');
      setSearchParams(searchParams);

      setPage(1);
    } else {
      const page = Number(searchParams.get('page'));
      setPage(page);
    }
  }, [searchParams, setSearchParams, setPage]);

  const changePage = useCallback(
    (newPage: number) => {
      setPage(newPage);
    },
    [setPage],
  );

  return (
    <div className={styles.wrapper}>
      <Button onClick={() => changePage(page - 1)} disabled={!prev}>
        Prev
      </Button>
      <span>{page}</span>
      <Button onClick={() => changePage(page + 1)} disabled={!next}>
        Next
      </Button>
    </div>
  );
};
