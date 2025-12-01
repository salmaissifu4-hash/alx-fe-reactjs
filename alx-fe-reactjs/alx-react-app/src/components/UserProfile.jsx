const UserProfile = (props) => {
    return (
      <div>
        <h2> Hi! Welcome{props.name}</h2>
        <p> Your Age: {props.age}</p>
        <p> Your Bio: {props.bio}</p>
      </div>
    );
  };
  export default UserProfile