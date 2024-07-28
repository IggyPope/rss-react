import { useParams } from 'react-router-dom';

import { LOCAL_STORAGE_KEY } from '@/constants/app';
import { useGetCharactersQuery } from '@/store/slices/charactersApiSlice';

import { useSyncLocalStorage } from './useSyncLocalStorage';

export const useGetFilteredCharacters = () => {
  const [searchQuery] = useSyncLocalStorage(LOCAL_STORAGE_KEY);
  const { pageNumber } = useParams();

  const { data, isError, isFetching } = useGetCharactersQuery({
    searchQuery: searchQuery || '',
    pageNumber: pageNumber ? +pageNumber : 1,
  });

  return { data, isError, isFetching };
};
