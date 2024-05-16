import '../App.css';
import React, { useState, useEffect } from 'react';
import { CardContent, Typography, Grid, Avatar,createTheme,ThemeProvider  } from '@mui/material';
import { AccountCircle, Email, Work, Description, AccessTime } from '@mui/icons-material';
import placeholderImage from './placeholderImage.jpg'; 
const UserDetails = ({ user }) => {

  const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.6rem',
  '@media (min-width:600px)': {
    fontSize: '2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};

  const [imageSrc, setImageSrc] = useState(placeholderImage);

  useEffect(() => {
    if (user) {
      setImageSrc(placeholderImage);

      const img = new Image();
      img.src = user.avatar;
      img.onload = () => {
        setImageSrc(user.avatar);

      };
    }
  }, [user]);

  if (!user) {
    return <div style={{ textAlign: 'center', fontSize: '1.5rem' }}>Select a user to see details</div>;
    
  }

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={12} className="bg card">
          <CardContent className="bg">
            <Grid container spacing={2} alignItems="center" marginBottom={2}>
              <Grid item  sm={2}>
              <Avatar
                  alt={user.profile.username}
                  src={imageSrc}
                  sx={{ width: 80, height: 80}}
                />
              </Grid>
              <Grid item sm={10}>
              <ThemeProvider theme={theme}>
              <Typography variant="h3">{`${user.profile.firstName} ${user.profile.lastName}`}</Typography>
    </ThemeProvider>
               
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6}>
                <Typography marginBottom={1} variant="body1"><AccountCircle /> Username: {user.profile.username}</Typography>
                <Typography marginBottom={1} variant="body1"><Email /> Email: {user.profile.email}</Typography>
                <Typography marginBottom={1} variant="body1"><Work /> Job Title: {user.jobTitle}</Typography>
              </Grid>
              <Grid item xs={12} sm={6} padding={0}>
                <Typography marginBottom={1} variant="body1"><Description /> Bio: {user.Bio}</Typography>
                <Typography marginBottom={1} variant="body1"><AccessTime /> Created At: {new Date(user.createdAt).toLocaleString()}</Typography>
              </Grid>
            </Grid>
          </CardContent>
      </Grid>
    </Grid>
  );
};
export default UserDetails;
