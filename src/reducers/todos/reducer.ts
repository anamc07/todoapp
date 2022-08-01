import { createReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '..';
import { IToDo } from '../../interfaces/Interfaces';
import {
  addTodoAsync,
  deleteTodosAsync,
  getTodosAsync,
  toggleTodosAsync,
} from './actions';
interface TodosState {
  list: IToDo[];
  loading: boolean;
}

const initialState: TodosState = {
  list: [],
  loading: false,
};

export const todoSlice: any = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addToDo: (state: any, action: any) => {
      state.list.push(action.payload);
    },
    toggleToDo: (state: any, action: any) => {
      const index = state.list.findIndex(
        (todo: any) => todo.id === action.payload.id,
      );
      state.list[index].checked = action.payload.checked;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTodosAsync.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getTodosAsync.fulfilled, (state, action) => {
      const data = action.payload.data;
      const arr = data.map(({ content, id }) => content);

      state.list = arr;
      state.loading = false;
    });
    builder.addCase(addTodoAsync.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addTodoAsync.fulfilled, (state, action) => {
      state.list.push(action.payload.data.content);
      state.loading = false;
    });
    builder.addCase(toggleTodosAsync.fulfilled, (state, action) => {});
    builder.addCase(deleteTodosAsync.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteTodosAsync.fulfilled, (state, action) => {
      const data = action.payload.data;
      const arr = data.map(({ content }) => content);
      state.list = arr;
      state.loading = false;
    });
    builder.addCase(deleteTodosAsync.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { addToDo, toggleToDo } = todoSlice.actions;
export default todoSlice.reducer;
