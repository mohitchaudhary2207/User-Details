import React, { useState } from 'react';
import { Container, Grid, Typography, CssBaseline } from '@mui/material'; 
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';

function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <><div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline />
      <Container style={{ flexGrow: 1}}>
        <Grid container  marginTop={2}  spacing={5}>
          <Grid item xs={12} md={4} order={{ xs: 2, md: 1 }}>
            <UserList setSelectedUser={setSelectedUser} />
          </Grid>
          <Grid item xs={12} md={8} order={{ xs: 1, md: 2 }}>
            <UserDetails user={selectedUser} />
          </Grid>
        </Grid>
      </Container>
      <footer style={{ marginTop: 'auto', textAlign: 'center', padding: '10px', borderTop: '1px solid #ccc' }}>
        <Typography variant="body2" color="white">
          Copyright &copy; Mohit Chaudhary
        </Typography>
      </footer>
    </div></>
  );
}

export default App;
