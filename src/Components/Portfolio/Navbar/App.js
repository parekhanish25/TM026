import React, { useState } from 'react';
import { AppBar, Toolbar, Grid, Button, Drawer, List, ListItem, IconButton, Typography } from '@mui/material';
import { MdOutlineFileDownload, MdMenu } from 'react-icons/md';
import '../../../../src/index.css';
import Logo from '../../../images/Logo.jpg';
function Navbar({ ScrollAbout, scrollSkill, ScrollProject, ScrollExperience }) {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 600);
  };

  React.useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <AppBar elevation={0} position="sticky" style={{ backgroundColor: 'white' }}>
        <Toolbar>
          <Grid container justifyContent="space-between" alignItems="center">
            <Grid xs={1} sm={1} md={1} lg={2}>
              {/* Space at the start */}
            </Grid>
            <Grid item xs={6} sm={1} md={2} lg={2}>
              {/* Logo */}
              <img src={Logo} alt="Logo" style={{ height: 100, }} />
            </Grid>
            <Grid item xs={2} sm={7} md={6} lg={4}>
              {/* Links */}
              {!isMobileView ? (
                <Grid container justifyContent="center">
                  <Grid item>
                    <Button
                      onClick={ScrollAbout}
                      ><Typography fontFamily={'Sora'} fontWeight={'bold'} >About me</Typography> </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={scrollSkill}
                      ><Typography fontFamily={'Sora'} fontWeight={'bold'} >Skills</Typography></Button>
                  </Grid>
                  <Grid item>
                    <Typography fontFamily={'Sora'} ></Typography>
                    <Button
                      onClick={ScrollProject}
                      > <Typography fontFamily={'Sora'} fontWeight={'bold'} >Projects</Typography></Button>
                  </Grid>
                  <Grid item>
                    <Button
                      onClick={ScrollExperience}
                      ><Typography fontFamily={'Sora'} fontWeight={'bold'} >Experience</Typography></Button>
                  </Grid>
                </Grid>
              ) : null}
            </Grid>
            <Grid item xs={2} sm={1} md={1} lg={1}>
              {/* Space at the end */}
            </Grid>
            {!isMobileView && <Grid item xs={2} sm={2} md={2} lg={3}>
              {/* Button */}
              <Button
                style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                variant="contained"
                onClick={() => window.open('link_to_resume')}
              >
                <Typography fontFamily={'Sora'} color={'white'}> Resume <MdOutlineFileDownload size={20} color="white" /></Typography>
              </Button>
            </Grid>}
            {isMobileView && (
              <IconButton
                edge="end"
                
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MdMenu />
              </IconButton>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer sx={{
        width: '200px', // Adjust the width as needed
        '& .MuiDrawer-paper': {
          width: '200px' // Adjust the width as needed
        }
      }} anchor="right" open={isDrawerOpen} onClose={handleDrawerToggle}>
        <List >
          {['About me', 'Skills', 'Projects', 'Experience'].map((text, index) => (
            <ListItem button key={text} onClick={handleDrawerToggle}>
              <Typography fontFamily={'Sora'} fontWeight={'bold'}>{text}</Typography>
            </ListItem>
          ))}
          <ListItem >
            <Button
              style={{ backgroundColor: 'black' }}
              variant="contained"
              onClick={() => window.open('link_to_resume')}
            >
              <Typography fontFamily={'Sora'} color={'white'}> Resume <MdOutlineFileDownload size={20} color="white" /></Typography>
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
