import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '../ui/Button';
import styles from './Pagination.module.scss';

interface Props {
  disablePrev: boolean;
  disableNext: boolean;
}

export const Pagination = ({ disablePrev, disableNext }: Props) => {
  const params = useParams();
  const navigate = useNavigate();

  const changePage = (newPage: number) => {
    navigate(`/page/${newPage}/`);
  };

  return (
    <div className={styles.wrapper}>
      <Button
        onClick={() =>
          changePage(params.pageNumber ? Number(params.pageNumber) - 1 : 1)
        }
        disabled={disablePrev}
      >
        Prev
      </Button>
      <span>{params.pageNumber}</span>
      <Button
        onClick={() =>
          changePage(params.pageNumber ? Number(params.pageNumber) + 1 : 1)
        }
        disabled={disableNext}
      >
        Next
      </Button>
    </div>
  );
};
