import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Character } from '@/types/api';

export interface SelectionState {
  selectedCharacters: Character[];
}

const initialState: SelectionState = {
  selectedCharacters: [],
};

export const selectionSlice = createSlice({
  name: 'selection',
  initialState,
  reducers: {
    select: (state, action: PayloadAction<Character>) => {
      if (
        state.selectedCharacters.some(
          (character) => character.id === action.payload.id,
        )
      ) {
        return state;
      }
      return {
        selectedCharacters: [...state.selectedCharacters, action.payload],
      };
    },
    unselect: (state, action: PayloadAction<string>) => {
      return {
        selectedCharacters: state.selectedCharacters.filter(
          (character) => character.id !== action.payload,
        ),
      };
    },
    resetSelection: () => initialState,
  },
});

export const { select, unselect, resetSelection } = selectionSlice.actions;
export default selectionSlice.reducer;
