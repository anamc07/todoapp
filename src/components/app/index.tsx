import React from 'react';
import logo from './AdvancedAppPlatform.png';

import styles from './index.module.scss';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { Route, Routes } from 'react-router-dom';
import Main from './Main';
import CreateTask from './CreateTask';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const App = () => (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/createtask" element={<CreateTask />} />
      </Routes>
    </div>
  </LocalizationProvider>
);

export default App;
