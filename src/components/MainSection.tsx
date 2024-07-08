import React from 'react';

import { CharacterBase } from '@/types/api';

import styles from './MainSection.module.scss';

interface Props {
  characters: CharacterBase[];
  showLoader: boolean;
}

export class MainSection extends React.Component<Props, object> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <main className={styles.main}>
        {this.props.showLoader ? (
          <div>Loading...</div>
        ) : this.props.characters.length ? (
          this.props.characters.map((character) => (
            <div
              key={character.name}
            >{`${character.name} - birth year: ${character.birth_year}`}</div>
          ))
        ) : (
          <h1>No characters found</h1>
        )}
      </main>
    );
  }
}
