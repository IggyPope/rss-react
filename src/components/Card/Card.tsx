import { Link } from 'react-router-dom';

import { useThemeContext } from '@/context/hooks';
import { Character } from '@/types/api';

import styles from './Card.module.scss';

export const Card = ({ character }: { character: Character }) => {
  const { theme } = useThemeContext();
  return (
    <Link
      to={`character/${character.id}/`}
      className={[styles.card, theme === 'light' ? styles.light : null]
        .filter(Boolean)
        .join(' ')}
    >
      <div>{`${character.name} - birth year: ${character.birth_year}`}</div>
    </Link>
  );
};
