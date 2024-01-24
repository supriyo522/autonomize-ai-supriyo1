// api/github.js

// This file should contain functions to make API requests to GitHub

const API_URL = "https://api.github.com";

export const getUserRepositories = async (username) => {
  const response = await fetch(`${API_URL}/users/${username}/repos`);
  const data = await response.json();
  return data;
};

export const getUserInfo = async (username) => {
  const response = await fetch(`${API_URL}/users/${username}`);
  const data = await response.json();
  return data;
};

export const getRepositoryDetails = async (username, repoName) => {
  const response = await fetch(`${API_URL}/repos/${username}/${repoName}`);
  const data = await response.json();
  return data;
};

export const getUserFollowers = async (username) => {
  const response = await fetch(`${API_URL}/users/${username}/followers`);
  const data = await response.json();
  return data;
};
