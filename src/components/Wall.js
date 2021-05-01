import React, { useState, useEffect } from 'react';

export default function Wall() {
  const [users, setUsers] = useState([]);
  
  const fetchUsers = async () => {
    const res = await fetch('https://puppyapi.com/pups', { mode: "no-cors" });
    console.log(res.json());
    // const usersArr = await res.json();
    // setUsers(usersArr);
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