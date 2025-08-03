import './Search.css';
import React, { useState } from 'react';
import { fetchAdvancedUserData } from '../services/githubService';

const PER_PAGE = 10;

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [lastQuery, setLastQuery] = useState({ query: '', location: '', minRepos: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]);
    setPage(1);

    const query = username;

    try {
      const data = await fetchAdvancedUserData(query, location, minRepos, 1, PER_PAGE);
      setUsers(data.items || []);
      setHasMore(data.total_count > PER_PAGE);
      setLastQuery({ query, location, minRepos });
    } catch (err) {
      setError("Looks like we can't find users matching the criteria.");
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    setLoading(true);
    const nextPage = page + 1;

    try {
      const data = await fetchAdvancedUserData(
        lastQuery.query,
        lastQuery.location,
        lastQuery.minRepos,
        nextPage,
        PER_PAGE
      );

      setUsers(prevUsers => [...prevUsers, ...data.items]);
      setPage(nextPage);
      setHasMore(data.total_count > nextPage * PER_PAGE);
    } catch (err) {
      setError("Couldn't load more users.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-ctn px-4 py-6 max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold mb-4">Enter a GitHub username or use the filters below</h3>
      <form className="form-fill space-y-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Filter by Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Minimum Repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow-sm flex items-center space-x-4">
            <img src={user.avatar_url} alt="Avatar" className="w-16 h-16 rounded-full" />
            <div>
              <h4 className="font-semibold">{user.login}</h4>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View GitHub Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {hasMore && !loading && (
        <button
          onClick={handleLoadMore}
          className="mt-6 w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default Search;
