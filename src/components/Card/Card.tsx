import { Link } from 'react-router-dom';

import { Character } from '@/types/api';

import styles from './Card.module.scss';

export const Card = ({ character }: { character: Character }) => {
  return (
    <Link to={`character/${character.id}/`} className={styles.card}>
      <div>{`${character.name} - birth year: ${character.birth_year}`}</div>
    </Link>
  );
};
