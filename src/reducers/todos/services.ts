import { AppDBClient } from '@appteam6/domoapps.js';
import { IToDo, TodosState } from 'interfaces/Interfaces';

export const todosClient = new AppDBClient.DocumentsClient<IToDo>('todos');
