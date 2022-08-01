import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { Chip, Stack } from '@mui/material';
import { toggleToDo } from '../../reducers/todos/reducer';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { toggleTodosAsync } from 'reducers/todos/actions';

const TasksList = ({ list, searchTerm, filter, sort }: any) => {
  const dispatch = useDispatch();

  const handleToggle = (id: number, checked: boolean) => () => {
    dispatch(toggleToDo({ id, checked: !checked }));
    dispatch(toggleTodosAsync({ id, checked: !checked }));
  };

  return (
    <List sx={{ width: '100%' }}>
      {[...list]
        ?.sort((a: any, b: any) => {
          if (sort === true) {
            return a.priority.localeCompare(b.priority);
          }
        })
        ?.filter((val: any) => {
          if (searchTerm === '') {
            return val;
          } else if (
            Boolean(val.title.toLowerCase().includes(searchTerm.toLowerCase()))
          ) {
            return val;
          }
        })
        ?.map((value: any) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value.id}
              id={value.id}
              secondaryAction={
                <Chip
                  label={value?.priority}
                  size="small"
                  sx={{
                    backgroundColor:
                      value?.priority === 'High'
                        ? '#FBAD56'
                        : value?.priority === 'Low'
                        ? '#FDECAD'
                        : '#FD9A93',
                  }}
                />
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={handleToggle(value.id, value.checked)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={value.checked}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  sx={{
                    '& .MuiListItemText-primary': {
                      textDecoration: `${
                        Boolean(value.checked)
                          ? 'line-through !important'
                          : 'none'
                      } `,
                    },
                  }}
                  primary={value.title}
                  secondary={
                    <Stack component="span">
                      {value.date !== '' && (
                        <span>
                          {moment(value.date).format('dddd, MMMM Do YYYY')}
                        </span>
                      )}

                      <span>{value.notes}</span>
                    </Stack>
                  }
                  primaryTypographyProps={{
                    fontSize: '17px',
                    color: 'secondary',
                    fontWeight: '600',
                  }}
                  secondaryTypographyProps={{
                    fontSize: '12px',
                    color: 'grey',
                    fontWeight: '600',
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
    </List>
  );
};

export default TasksList;
