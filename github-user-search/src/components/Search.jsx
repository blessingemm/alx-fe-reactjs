import './Search.css'
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return(
    <div className='search-ctn'>
      <h3>Enter a GitHub username below to get started</h3>
      <form action="" className='form-fill' onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Github username" value={username} onChange={(e) => setUsername(e.target.value)}  />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {user && (
        <div style={{ marginTop: '1rem' }}>
          <img src={user.avatar_url} alt="Avatar" width="100" />
          <h3>{user.name || user.login}</h3>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  )
};

export default Search;