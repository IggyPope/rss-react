import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { CharacterBase } from '@/types/api';

import { Button } from '../ui/Button';
import styles from './DetailedCard.module.scss';

export const DetailedCard = () => {
  const { pageNumber, charId } = useParams();

  const navigate = useNavigate();

  const [character, setCharacter] = useState<CharacterBase | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCharacter = async () => {
      setIsLoading(true);

      const response = await fetch(`https://swapi.dev/api/people/${charId}/`);
      const data = (await response.json()) as CharacterBase;

      setCharacter(data);
      setIsLoading(false);
    };
    void fetchCharacter();
  }, [charId]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading && character && (
        <>
          <Link to={`/page/${pageNumber}/`} className={styles.clickAway}></Link>
          <div className={styles.container}>
            <h2 className={styles.title}>{character.name}</h2>
            <div className={styles.info}>
              <div className={styles.infoContainer}>
                <h4 className={styles.propCame}>Birth year:</h4>
                <h4 className={styles.propCame}>Gender:</h4>
                <h4 className={styles.propCame}>Height:</h4>
                <h4 className={styles.propCame}>Mass:</h4>
                <h4 className={styles.propCame}>Gender:</h4>
                <h4 className={styles.propCame}>Gender:</h4>
              </div>
              <div className={styles.infoContainer}>
                <span>{character.birth_year}</span>
                <span>{character.gender}</span>
                <span>{character.height}</span>
                <span>{character.mass}</span>
                <span>{character.hair_color}</span>
                <span>{character.skin_color}</span>
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
