import { Stack, Paper, Typography, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../img/header.png';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Form from './Form';

const CreateTask = () => {
  const styles = {
    paperContainer: {
      backgroundImage: `url(${Image})`,
      backgroundSize: 'cover',
      height: '274px',
      boxShadow: 'none',
      marginBottom: '-107px',
    },
  };

  return (
    <>
      <Paper style={styles.paperContainer}>
        <Stack
          alignItems="flex-start"
          p={5}
          justifyContent="space-between"
          sx={{ height: '60%' }}
        >
          <Link to="/">
            <ArrowBackIcon />
          </Link>
          <Typography
            variant="h5"
            color="white"
            sx={{ fontSize: '22px', fontWeight: '700' }}
          >
            Add your new To-Do
          </Typography>
        </Stack>
      </Paper>
      <Form />
    </>
  );
};

export default CreateTask;
