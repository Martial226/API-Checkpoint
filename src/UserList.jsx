import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css';

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setListOfUser(response.data);
      })
      .catch(error => {
        console.error("Erreur lors du chargement des utilisateurs :", error);
      });
  }, []);
  
  return (
  <div className="user-list">
    <h2>Liste des utilisateurs</h2>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {listOfUser.map((user) => (
        <li key={user.id} className="user-card">
          <strong>{user.name}</strong><br />
           {user.email}<br />
           {user.address.city}
        </li>
      ))}
    </ul>
  </div>
);

};

export default UserList;
