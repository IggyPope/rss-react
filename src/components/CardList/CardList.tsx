import { CharacterBase } from '@/types/api';

import styles from './CardList.module.scss';

export const CardList = ({ characters }: { characters: CharacterBase[] }) => {
  return (
    <div className={styles.container}>
      {characters.map((character) => (
        <div
          key={character.name}
        >{`${character.name} - birth year: ${character.birth_year}`}</div>
      ))}
    </div>
  );
};
