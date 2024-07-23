import { Link } from 'react-router-dom';

import { CharacterBase } from '@/types/api';

import styles from './Card.module.scss';

export const Card = ({ character }: { character: CharacterBase }) => {
  const characterId = character.url.match(/\/(\d+)\/$/)?.[1];

  return (
    <Link to={`character/${characterId}/`} className={styles.card}>
      <div>{`${character.name} - birth year: ${character.birth_year}`}</div>
    </Link>
  );
};
