'use client';

import React, { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';

// import theme toggle context
import { ThemeToggleContext } from './ThemeToogleContext';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';

export function ThemeToggle() {
  // check theme is dark or light
  const theme = useTheme();

  // useContect Hook get value https://react.dev/reference/react/useContext
  const themeToggle = useContext(ThemeToggleContext);

  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={themeToggle.toggleColorMode}
      color='inherit'
    >
      {theme.palette.mode === 'dark' ? (
        <RiSunLine size={25} />
      ) : (
        <RiMoonFill size={25} />
      )}
    </IconButton>
  );
}
