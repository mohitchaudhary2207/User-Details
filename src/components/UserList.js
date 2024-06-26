/* eslint-disable react-hooks/exhaustive-deps */
import '../App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Pagination } from '@mui/material';
import placeholderImage from './placeholderImage.jpg';

const UserList = ({ setSelectedUser }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalUsers, setTotalUsers] = useState(0);
  const [page, setPage] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    fetchUserData();
    fetchTotalUsers();
  }, [page]);

  const fetchUserData = () => {
    setLoading(true);
    axios.get(`https://602e7c2c4410730017c50b9d.mockapi.io/users?page=${page}&limit=${usersPerPage}`)
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      });
  };

  const fetchTotalUsers = () => {
    axios.get(`https://602e7c2c4410730017c50b9d.mockapi.io/users`)
      .then((response) => {
        setTotalUsers(response.data.length);
      })
      .catch((error) => {
        console.error('Error fetching total users count:', error);
      });
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      {loading ? (
Array.from({ length: 8 }).map((_, index) => (
    <div key={index} className="relative flex w-full animate-pulse gap-2 p-4 mb-4">
      <div className="h-12 w-12 rounded-full bg-slate-400"></div>
      <div className="flex-1">
        <div className="mb-1 h-5 w-3/5 rounded-lg bg-slate-400"></div>
        <div className="h-5 w-[90%] rounded-lg bg-slate-400"></div>
      </div>
      <div className="absolute bottom-5 right-0 h-4 w-4 rounded-full bg-slate-400"></div>
    </div>
  ))

      ) : users.length > 0 ? (
        <div >
          <List className="listContainer">
            {users.map((user) => (
              <ListItem key={user.id} button onClick={() => handleUserClick(user)} className="listItem">
                <ListItemAvatar>
                  <Avatar alt={user.profile.username} src={user.avatar ? user.avatar : placeholderImage} />
                </ListItemAvatar>
                <ListItemText primary={`${user.profile.firstName} ${user.profile.lastName}`} secondary={user.jobTitle}    secondaryTypographyProps={{ style: { color: 'White' } }} />
              </ListItem>
            ))}
          </List>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2px', marginBottom: '2px', }}>
          <Pagination
            count={Math.ceil(totalUsers / usersPerPage)}
            page={page}
            onChange={handleChangePage}
            color="primary"
          />
          </div>
        </div>
      ) : (
        <h2>No data to show</h2>
      )}
    </div>
  );
};

export default UserList;
