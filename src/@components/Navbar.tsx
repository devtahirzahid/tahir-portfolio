import React, { useEffect } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Grid } from '@mui/material';

const pages = [
  { title: 'Home', route: '/' },
  { title: 'About', route: '/about' },
  { title: 'Projects', route: '/projects' },
];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function Navbar() {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (route: string) => {
    setAnchorElNav(null);
    router.push(`${route}`);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    localStorage.setItem('theme', currentTheme ?? 'system');
  }, [currentTheme]);

  const savedTheme = localStorage.getItem('theme') || 'system';

  useEffect(() => {
    setTheme(savedTheme);
  }, [savedTheme, setTheme]);

  return (
    <AppBar position='static' sx={{ backgroundColor: 'black' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            component='a'
            href='/'
            sx={{
              mr: 5,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Tahir
          </Typography>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                onClick={() => handleCloseNavMenu(page.route)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
          <Grid
            container
            spacing={4}
            display={'flex'}
            justifyContent={'end'}
            alignItems={'center'}
          >
            <Grid item>
              {currentTheme === 'dark' ? (
                <Tooltip title='Switch Mode'>
                  <IconButton onClick={() => setTheme('light')} sx={{ p: 0 }}>
                    <RiSunLine size={25} color='white' />
                  </IconButton>
                </Tooltip>
              ) : (
                <Tooltip title='Switch Mode'>
                  <IconButton onClick={() => setTheme('dark')} sx={{ p: 0 }}>
                    <RiMoonFill size={25} color='white' />
                  </IconButton>
                </Tooltip>
              )}{' '}
            </Grid>
            <Grid item>
              <Tooltip title='Open settings'>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt='Remy Sharp' src='/static/images/avatar/2.jpg' />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id='menu-appbar'
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign='center'>{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
