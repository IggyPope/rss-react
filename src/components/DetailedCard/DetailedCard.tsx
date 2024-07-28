import { Link, useNavigate, useParams } from 'react-router-dom';

import { Button } from '@/components/ui/Button';
import { useThemeContext } from '@/context/hooks';
import { useGetCharacterByIdQuery } from '@/store/slices/charactersApiSlice';

import styles from './DetailedCard.module.scss';

export const DetailedCard = () => {
  const { pageNumber, charId } = useParams();

  const { data: character, isFetching } = useGetCharacterByIdQuery(
    charId || '',
  );

  const navigate = useNavigate();

  const { theme } = useThemeContext();

  return (
    <>
      {isFetching && <div>Loading...</div>}
      {!isFetching && character && (
        <>
          <Link to={`/page/${pageNumber}/`} className={styles.clickAway}></Link>
          <div
            className={[
              styles.container,
              theme === 'light' ? styles.light : null,
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <h2 className={styles.title}>{character.name}</h2>
            <div className={styles.info}>
              <div className={styles.infoContainer}>
                <h4 className={styles.propCame}>Birth year:</h4>
                <h4 className={styles.propCame}>Gender:</h4>
                <h4 className={styles.propCame}>Height:</h4>
                <h4 className={styles.propCame}>Mass:</h4>
              </div>
              <div className={styles.infoContainer}>
                <span>{character.birth_year}</span>
                <span>{character.gender}</span>
                <span>{character.height}</span>
                <span>{character.mass}</span>
              </div>
            </div>
            <Button className={styles.close} onClick={() => navigate(-1)}>
              Close
            </Button>
          </div>
        </>
      )}
    </>
  );
};
