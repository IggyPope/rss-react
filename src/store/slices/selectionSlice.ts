import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SelectionState {
  selected: string[];
}

const initialState: SelectionState = {
  selected: [],
};

export const selectionSlice = createSlice({
  name: 'selection',
  initialState,
  reducers: {
    select: (state, action: PayloadAction<string>) => {
      return { selected: [...state.selected, action.payload] };
    },
    unselect: (state, action: PayloadAction<string>) => {
      return {
        selected: state.selected.filter((item) => item !== action.payload),
      };
    },
  },
});

export const { select, unselect } = selectionSlice.actions;
export default selectionSlice.reducer;
