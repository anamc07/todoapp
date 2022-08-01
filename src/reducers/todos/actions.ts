import { createAsyncThunk } from '@reduxjs/toolkit';
import { IToDo } from 'interfaces/Interfaces';

import { todosClient } from './services';

export const getTodosAsync = createAsyncThunk('getTodosAsync', async () => {
  const response = await todosClient.get();
  return response;
});

export const addTodoAsync = createAsyncThunk(
  'addTodoAsync',
  async (payload: IToDo) => {
    const response = await todosClient.create(payload);
    return response;
  },
);

export const toggleTodosAsync = createAsyncThunk(
  'toggleTodosAsync',
  async (payload: { id: number; checked: any }) => {
    const response = await todosClient.get({ 'content.id': payload.id });

    const document = response.data[0];
    document.content.checked = payload.checked;

    // update the properties ...
    const updated = await todosClient.update(document);

    // return updated;
  },
);

export const deleteTodosAsync = createAsyncThunk(
  'deleteAsync',
  async (payload: any) => {
    const documents = await todosClient.get({
      'content.id': { $in: payload },
    });

    const ids = documents.data.map((doc) => doc.id);

    const response = await todosClient.delete(ids);
    const updatedData = await todosClient.get();
    return updatedData;
  },
);
