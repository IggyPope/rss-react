export interface CharacterBase {
  name: string;
  gender: string;
  birth_year: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  homeworld: string;
  url: string;
}

export interface CharacterBaseResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: CharacterBase[];
}

export interface Character extends CharacterBase {
  id: string;
}

export interface CharacterResponse
  extends Omit<CharacterBaseResponse, 'results'> {
  results: Character[];
}
