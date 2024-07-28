import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { API_PEOPLE_URL } from '@/constants/app';
import {
  Character,
  CharacterBase,
  CharacterBaseResponse,
  CharacterResponse,
} from '@/types/api';

export const charactersApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: API_PEOPLE_URL }),
  reducerPath: 'charactersApi',
  endpoints: (build) => ({
    getCharacters: build.query<
      CharacterResponse,
      { searchQuery: string; pageNumber: number }
    >({
      query: ({ searchQuery, pageNumber }) => {
        const requestParams = new URLSearchParams();

        if (searchQuery.length) {
          requestParams.append('search', searchQuery);
        }

        requestParams.append('page', pageNumber.toString());

        return `?${requestParams.toString()}`;
      },
      transformResponse: (response: CharacterBaseResponse) => {
        const { count, next, previous, results } = response;

        const characters = results.map((character) => ({
          ...character,
          id: character.url.match(/\/(\d+)\/$/)?.[1] ?? '',
        }));

        return { count, next, previous, results: characters };
      },
    }),
    getCharacterById: build.query<Character, string>({
      query: (id) => `/${id}`,
      transformResponse: (response: CharacterBase) => ({
        ...response,
        id: response.url.match(/\/(\d+)\/$/)?.[1] ?? '',
      }),
    }),
  }),
});

export const { useGetCharactersQuery, useGetCharacterByIdQuery } =
  charactersApiSlice;
