import React, { useState, useEffect } from 'react';

export default function Wall() {
  const [users, setUsers] = useState([]);
  
  const fetchUsers = async () => {
    const res = await fetch('https://puppyapi.com/pups');
    const users = await res.json();
    setUsers(users);
  }

  useEffect(() => {
    fetchUsers();
  })

  return (
    <>
      {users.length &&
        users.map((user, idx) => {
          return (
            <div key={idx}>
              <h4>{user.name}</h4>
              <img src={user.img_url} alt=""/>
            </div>
          )
        })
      }
    </>
  )
}