const UserProfile = (props) => {
  return(
    <div style={{ border: '1px solid #e2e2e2', padding: '10px', margin: '10px' }}>
      <h2 style={{ color: 'blue' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p>Bio: <span style={{ fontStyle: 'italic' }}>{props.bio}</span></p>
    </div>
  );
};
export default UserProfile;