import React, { useState } from 'react';
import { Grid, Avatar, Stack, Typography, Icon } from '@mui/material';
import IconButton from '@mui/material/IconButton';

import { ModeEdit } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from 'react-redux';
import { IToDo } from '../../interfaces/Interfaces';
import { useTodosSelector } from 'components/customhooks/useSelector';
import { deleteTodosAsync } from 'reducers/todos/actions';

type Props = {
  todos: {
    list: IToDo[];
  };
};

const Header = ({ focus, setFocus, inpref, setActionFilter }: any) => {
  const dispatch = useDispatch();
  const [list, active, completed, completedIds] = useTodosSelector();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Stack direction="row" spacing={2} justifyContent="space-between" m={5}>
        <Avatar alt="Remy Sharp" src="/images/domo-logo.png" variant="square" />

        <Avatar alt="Remy Sharp" src="/images/user.png" />
      </Stack>
      <Stack spacing={2} justifyContent="flex-start" m={5} mt={7} mb={0.6}>
        <Typography
          align="left"
          variant="h4"
          fontSize={'2.1875rem'}
          fontWeight="bold"
        >
          My Tasks{' '}
          <Icon color="disabled">
            <ModeEdit />
          </Icon>{' '}
        </Typography>
      </Stack>
      <Stack
        mx={5}
        mr={4}
        justifyContent="space-between"
        direction="row"
        alignItems="center"
      >
        <Typography align="left" variant="body2" color="grey">
          {completed?.length} of {list?.length} Tasks Completed
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Icon
            color="disabled"
            fontSize="small"
            style={{ marginRight: '0.75rem' }}
            onClick={() =>
              setTimeout(() => {
                inpref.current.focus();
              }, 100)
            }
          >
            <SearchIcon sx={{ fontSize: '1.3rem' }} />
          </Icon>
          <IconButton color="default" onClick={handleClick}>
            <MoreHorizIcon sx={{ fontSize: '1.3rem' }} />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            sx={{
              padding: '0px',
              '& .MuiList-root': {
                backgroundColor: 'rgba(242, 242, 242, 0.8)',
              },
              '& .MuiButtonBase-root': {
                minHeight: '43px',
              },
            }}
          >
            <MenuItem
              divider
              sx={{ paddingY: 0 }}
              onClick={() => (setActionFilter('all'), handleClose())}
            >
              Show All
            </MenuItem>

            <MenuItem
              divider
              sx={{ paddingY: 0 }}
              onClick={() => (setActionFilter('active'), handleClose())}
            >
              Show Active
            </MenuItem>

            <MenuItem
              divider
              sx={{ paddingY: 0 }}
              onClick={() => (setActionFilter('completed'), handleClose())}
            >
              Show Completed
            </MenuItem>
            <MenuItem
              sx={{
                paddingY: 0,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingRight: '0px',
              }}
              onClick={() => (
                completedIds?.length > 0 &&
                  dispatch(deleteTodosAsync(completedIds)),
                handleClose()
              )}
            >
              Delete
              <Avatar
                alt="Remy Sharp"
                src="/images/Symbol.png"
                variant="square"
                sx={{
                  '& .MuiAvatar-img': {
                    objectFit: 'contain',
                    height: '17px',
                    width: '33px ',
                  },
                }}
              />
            </MenuItem>
          </Menu>
        </Stack>
      </Stack>
    </>
  );
};

export default Header;
