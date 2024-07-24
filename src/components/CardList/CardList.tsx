import { Card } from '@/components/Card/Card';
import { Character } from '@/types/api';

import styles from './CardList.module.scss';

export const CardList = ({ characters }: { characters: Character[] }) => {
  return (
    <div className={styles.container}>
      {characters.map((character) => (
        <Card key={character.id} character={character} />
      ))}
    </div>
  );
};
