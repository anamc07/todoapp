import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';

import PriorityButtons from './PriorityButtons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTodoAsync } from 'reducers/todos/actions';
import { v4 as uuidv4 } from 'uuid';

const Form = ({}: any) => {
  const [data, setData] = useState({
    id: '',
    title: '',
    notes: '',
    url: '',
    date: '',
    time: '',
    checked: '',
  });
  const [errors, setErrors] = useState<any>({});
  const [isSubmit, setIsSubmit] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = uuidv4();
  const [priority, setPriority] = React.useState('High');

  const handlePriority = (
    event: React.MouseEvent<HTMLElement>,
    newPriority: string,
  ) => {
    setPriority(newPriority);
  };

  function handleChange(evt: any) {
    const value = evt.target.value;
    setData({
      ...data,
      [evt.target.name]: value,
    });
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setErrors(validate(data));
    setIsSubmit(true);
  };

  const validate = (values: any) => {
    const error: any = {};
    if (!Boolean(values.title)) {
      error.title = 'Required';
    }
    if (!Boolean(values.notes)) {
      error.notes = 'Required';
    }
    if (!Boolean(values.date)) {
      error.date = 'Required';
    }
    return error;
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      dispatch(
        addTodoAsync({
          ...data,
          priority,
          checked: false,
          id,
        }),
      );
      navigate('/');
    }
  }, [errors]);

  return (
    <Box
      className="overlay-container"
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Stack spacing={3}>
        <Stack>
          <TextField
            id="outlined-basic"
            label="New Item Title"
            name="title"
            onChange={handleChange}
            fullWidth
            sx={{
              '& fieldset ': {
                borderRadius: '15px',
                border: '1px solid #F3F3F3',
              },
            }}
            error={!!Boolean(errors?.title)}
            helperText={Boolean(errors?.title) ? errors.title : null}
            required
          />
        </Stack>
        <Stack>
          <TextField
            id="outlined-basic"
            label="Notes"
            name="notes"
            fullWidth
            multiline
            onChange={handleChange}
            rows={4}
            sx={{
              '& fieldset ': {
                borderRadius: '15px',
                border: '1px solid #F3F3F3',
              },
            }}
            error={!!Boolean(errors?.notes)}
            helperText={Boolean(errors?.notes) ? errors.notes : null}
            required
          />
        </Stack>
        <Stack>
          <TextField
            id="outlined-basic"
            label="URL"
            name="url"
            onChange={handleChange}
            fullWidth
            sx={{
              '& fieldset ': {
                borderRadius: '15px',
                border: '1px solid #F3F3F3',
              },
            }}
          />
        </Stack>
        <Typography
          variant="h6"
          sx={{
            fontSize: '15px',
            fontWeight: '600',
            color: 'rgba(0, 0, 0, 0.5)',
            padding: '0.4rem 0.5rem',
          }}
        >
          Completion Due Date
        </Typography>
        <Stack>
          <TextField
            id="date"
            label="Date"
            type="date"
            name="date"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            onChange={handleChange}
            sx={{
              '& fieldset ': {
                borderRadius: '15px',
                border: '1px solid #F3F3F3',
              },
            }}
            error={!!Boolean(errors?.date)}
            helperText={Boolean(errors?.date) ? errors.date : null}
            required
          />
        </Stack>
        <Stack>
          <TextField
            id="time"
            label="Time"
            type="time"
            name="time"
            onChange={handleChange}
            defaultValue="07:30"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
            fullWidth
            sx={{
              '& fieldset ': {
                borderRadius: '15px',
                border: '1px solid #F3F3F3',
              },
            }}
          />
        </Stack>
        <PriorityButtons priority={priority} handleChange={handlePriority} />
      </Stack>
      <Button type="submit" color="primary" fullWidth variant="outlined">
        Add To-Do
      </Button>
    </Box>
  );
};

export default Form;
