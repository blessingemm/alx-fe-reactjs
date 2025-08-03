import axios from 'axios';

const BASE_URL = import.meta.env.VITE_APP_GITHUB_API_URL || 'https://api.github.com';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchAdvancedUserData = async (query, page = 1, perPage = 10) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/users`, {
      params: {
        q: query.trim(),
        page,
        per_page: perPage,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Advanced search failed');
  }
};

