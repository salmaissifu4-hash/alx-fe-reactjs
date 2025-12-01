import React, { useContext } from 'react';
import UserContext from './UserContext';
const UserProfile = (props) => {
  const userData = useContext(UserContext);
    return (
      <div>
        <h2> Hi! Welcome{props.name}</h2>
        <p> Your Age: {props.age}</p>
        <p> Your Bio: {props.bio}</p>
      </div>
    );
  };
  export default UserProfile