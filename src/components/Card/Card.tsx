import { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';

import { useThemeContext } from '@/context/hooks';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { select, unselect } from '@/store/slices/selectionSlice';
import { Character } from '@/types/api';

import styles from './Card.module.scss';

export const Card = ({ character }: { character: Character }) => {
  const { theme } = useThemeContext();

  const dispatch = useAppDispatch();

  const selectedCharacters = useAppSelector(
    (state) => state.selection.selectedCharacters,
  );

  const isSelected = selectedCharacters.some(
    (selectedCharacter) => selectedCharacter.id === character.id,
  );

  const handleSelection = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatch(select(character));
    } else {
      dispatch(unselect(character.id));
    }
  };

  return (
    <div
      className={[styles.card, theme === 'light' ? styles.light : null]
        .filter(Boolean)
        .join(' ')}
    >
      <input
        type="checkbox"
        className={styles.checkbox}
        onChange={handleSelection}
        checked={isSelected}
      />
      <Link
        to={`character/${character.id}/`}
        className={styles.link}
        data-testid={`character`}
      >{`${character.name} - birth year: ${character.birth_year}`}</Link>
    </div>
  );
};
