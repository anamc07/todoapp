import React, { ChangeEvent, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Search from './Search';
import TasksList from './TasksList';
import { IToDo } from '../../interfaces/Interfaces';
import { deleteTodosAsync, getTodosAsync } from 'reducers/todos/actions';
import { useTodosSelector } from 'components/customhooks/useSelector';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/material';

export type Props = {
  todos: {
    list: IToDo[];
    loading: boolean;
  };
};

const TasksContainer = ({ inpref, filter, sort, setSort }: any) => {
  const loading = useSelector((state: Props) => state.todos.loading);

  const [list, active, completed, completedIds] = useTodosSelector();
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosAsync());
  }, []);

  const updatedList =
    filter === 'completed' && completed.length > 0
      ? completed
      : filter === 'all'
      ? list
      : filter === 'active'
      ? active
      : list;

  return (
    <Box flex={1} overflow="auto">
      <div className="half-a-border-on-top">
        <Search
          setSearchTerm={setSearchTerm}
          inpref={inpref}
          sort={sort}
          setSort={setSort}
        />
        {loading ? (
          <Box
            sx={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}
          >
            <CircularProgress />
          </Box>
        ) : (
          <TasksList
            list={updatedList}
            searchTerm={searchTerm}
            filter={filter}
            sort={sort}
          />
        )}
      </div>
    </Box>
  );
};

export default TasksContainer;
