import React from 'react';

import { CharacterBase } from '@/types/api';

import styles from './MainSection.module.scss';

interface Props {
  characters: CharacterBase[];
}

export class MainSection extends React.Component<Props, object> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    if (this.props.characters.length === 0) {
      return <div>No characters found</div>;
    }

    return (
      <main className={styles.main}>
        {this.props.characters.map((character) => (
          <div
            key={character.name}
          >{`${character.name} - birth year: ${character.birth_year}`}</div>
        ))}
      </main>
    );
  }
}
