import React from 'react';

import { MainSection } from '@/components/MainSection/MainSection';
import { TopSection } from '@/components/TopSection/TopSection';
import { LOCAL_STORAGE_KEY } from '@/constants/app';
import { CharacterBase, CharacterBaseResponse } from '@/types/api';

interface State {
  searchTerm: string | null;
  characters: CharacterBase[];
  showLoader: boolean;
}

export class App extends React.Component<object, State> {
  constructor(props: object) {
    super(props);
    const searchTerm = localStorage.getItem(LOCAL_STORAGE_KEY);
    this.state = { searchTerm: searchTerm, characters: [], showLoader: false };
  }

  componentDidMount = () => {
    void this.fetchCharacters(this.state.searchTerm);
  };

  fetchCharacters = async (searchTerm?: string | null) => {
    this.setState((prevState) => ({ ...prevState, showLoader: true }));

    const response = await fetch(
      `https://swapi.dev/api/people/${searchTerm ? `?search=${searchTerm}` : ''}`,
    );

    const data = (await response.json()) as CharacterBaseResponse;

    const characters = data.results;

    this.setState((prevState) => ({
      ...prevState,
      characters: characters,
    }));

    this.setState((prevState) => ({ ...prevState, showLoader: false }));
  };

  render() {
    return (
      <>
        <TopSection
          inputValue={this.state.searchTerm || ''}
          updateSearchTerm={(term: string) => {
            localStorage.setItem(LOCAL_STORAGE_KEY, term);
            this.setState((prevState) => ({ ...prevState, searchTerm: term }));
            void this.fetchCharacters(term);
          }}
        />
        <MainSection
          characters={this.state.characters}
          showLoader={this.state.showLoader}
        />
      </>
    );
  }
}
