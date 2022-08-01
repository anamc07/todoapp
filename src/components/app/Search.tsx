import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { FilledInput, Icon, Stack } from '@mui/material';

type Props = {
  setSearchTerm: any;
  inpref: any;
  sort: any;
  setSort: any;
};

const Search = ({ setSearchTerm, inpref, sort, setSort }: Props) => {
  const handleChange = (e: any) => {
    setSearchTerm(e.target.value);
  };
  return (
    <Stack
      mx={2}
      mt={0.2}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <FormControl variant="filled" fullWidth>
        <FilledInput
          onChange={handleChange}
          inputRef={inpref}
          sx={{
            paddingRight: '0px',
            marginRight: '13px',
            borderRadius: '10px',
            height: '32px',
            '& .MuiInputAdornment-root': {
              marginTop: '0px !important',
              height: '0.8em',
            },

            '& .MuiFilledInput-input': {
              padding: '0.75rem',
              height: '15px',
              paddingLeft: '0px !important',
            },
            '& .MuiInputBase-root .MuiFilledInput-root:after,:before': {
              borderBottom: 'none',
            },
          }}
          placeholder="Search"
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon
                sx={{
                  fontSize: '1.2rem',
                }}
              />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="start">
              <MicIcon
                sx={{
                  fontSize: '1.2rem',
                }}
              />
            </InputAdornment>
          }
          size="small"
        />
      </FormControl>
      <Icon color={Boolean(sort) ? 'info' : 'action'}>
        <SwapVertIcon
          sx={{ fontSize: '1.4rem' }}
          onClick={() => setSort(!Boolean(sort))}
        />
      </Icon>
    </Stack>
  );
};

export default Search;
