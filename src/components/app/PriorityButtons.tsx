import * as React from 'react';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Typography } from '@mui/material';

type Props = {
  priority: string;
  handleChange: (event: React.MouseEvent<HTMLElement>, value: string) => any;
};

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

const StyledToggleButton = styled(ToggleButton)({
  '&.Mui-selected, &.Mui-selected:hover': {
    color: 'rgba(0, 0, 0, 1)',
    fontWeight: '600',
    backgroundColor: '#ffffff',
    textTransform: 'capitalize',
  },
});

const PriorityButtons = ({ priority, handleChange }: Props) => (
  <div className="white-container" style={{ marginBottom: '1rem' }}>
    <Typography
      variant="subtitle1"
      align="left"
      color="rgba(0, 0, 0, 0.5)"
      sx={{ fontSize: '15px', fontWeight: 'bold' }}
    >
      Set Priority
    </Typography>
    <Paper
      elevation={0}
      sx={{
        display: 'flex',
        border: (theme) => `1px solid ${theme.palette.divider}`,

        backgroundColor: '#efeff0',
      }}
    >
      <StyledToggleButtonGroup
        size="small"
        value={priority}
        exclusive
        onChange={handleChange}
        aria-label="text alignment"
        sx={{
          backgroundColor: '#efeff0',
          '& .Mui-selected': {
            backgroundColor: 'white',
          },
        }}
        fullWidth
      >
        <StyledToggleButton value="Low" aria-label="left aligned">
          Low
        </StyledToggleButton>
        <Divider
          flexItem
          orientation="vertical"
          sx={{
            mx: 0.5,
            my: 1,
            width: '1px',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          }}
        />
        <StyledToggleButton value="High" aria-label="centered">
          High
        </StyledToggleButton>
        <Divider
          flexItem
          orientation="vertical"
          sx={{
            mx: 0.5,
            my: 1,
            width: '1px',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          }}
        />
        <StyledToggleButton value="Urgent" aria-label="right aligned">
          Urgent
        </StyledToggleButton>
      </StyledToggleButtonGroup>
    </Paper>
  </div>
);

export default PriorityButtons;
