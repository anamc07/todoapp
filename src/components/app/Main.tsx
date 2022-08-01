import { Avatar, Grid, Box } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import TasksContainer from './TasksContainer';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const Main = () => {
  const [focus, setFocus] = useState<boolean>(false);
  const inpref = useRef(null);
  const [actionFilter, setActionFilter] = useState('');
  const [sort, setSort] = useState(false);

  return (
    <>
      <Box height="100vh" display="flex" flexDirection="column">
        <Box sx={{ backgroundColor: 'white' }}>
          <Header
            focus={focus}
            setFocus={setFocus}
            inpref={inpref}
            setActionFilter={setActionFilter}
            setSort={setSort}
            sort={sort}
          />
        </Box>
        <Box
          flex={1}
          sx={{ backgroundColor: 'rgba(0, 0, 0, 0.02)', marginTop: '1rem' }}
        >
          <TasksContainer
            inpref={inpref}
            filter={actionFilter}
            sort={sort}
            setSort={setSort}
          />
          <Avatar
            sx={{
              bgcolor: '#99CCEE',
              position: 'fixed',
              bottom: '1.5rem',
              right: '1.5rem',
            }}
          >
            <Link to="/createtask">
              <AddIcon />
            </Link>
          </Avatar>
        </Box>
      </Box>
    </>
  );
};

export default Main;
