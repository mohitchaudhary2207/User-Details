import '../App.css';
import React from 'react';
import { Card, CardContent, Typography, Grid, Avatar } from '@mui/material';
import { AccountCircle, Email, Work, Description, AccessTime } from '@mui/icons-material';

const UserDetails = ({ user }) => {
  if (!user) {
    return <div style={{ textAlign: 'center', fontSize: '1.5rem' }}>Select a user to see details</div>;
  }

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={12} >
        <Card >
          <CardContent className="bg">
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <Avatar alt={user.profile.username} src={user.avatar} sx={{ width: 100, height: 100 }} />
              </Grid>
              <Grid item>
                <Typography variant="h4">{`${user.profile.firstName} ${user.profile.lastName}`}</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6}>
                <Typography variant="body1"><AccountCircle /> Username: {user.profile.username}</Typography>
                <Typography variant="body1"><Email /> Email: {user.profile.email}</Typography>
                <Typography variant="body1"><Work /> Job Title: {user.jobTitle}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1"><Description /> Bio: {user.Bio}</Typography>
                <Typography variant="body1"><AccessTime /> Created At: {new Date(user.createdAt).toLocaleString()}</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default UserDetails;
