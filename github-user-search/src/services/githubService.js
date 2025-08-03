import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchAdvancedUserData = async (query, location = '', minRepos = '', page = 1, perPage = 10) => {
  try {
    let searchQuery = query.trim();

    if (location) {
      searchQuery += ` location:${location}`;
    }

    if (minRepos) {
      searchQuery += ` repos:>=${minRepos}`; 
    }

    const url = `https://api.github.com/search/users?q=${searchQuery}`;

    const response = await axios.get(url, {
      params: {
        q: searchQuery,
        page,
        per_page: perPage,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Advanced search failed');
  }
};
