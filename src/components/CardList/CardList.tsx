import { Card } from '@/components/Card/Card';
import { CharacterBase } from '@/types/api';

import styles from './CardList.module.scss';

export const CardList = ({ characters }: { characters: CharacterBase[] }) => {
  return (
    <div className={styles.container}>
      {characters.map((character) => (
        <Card key={character.url} character={character} />
      ))}
    </div>
  );
};
