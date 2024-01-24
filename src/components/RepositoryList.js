// RepositoryList.js

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getUserRepositories, getUserInfo } from "../api/github";

const RepositoryList = () => {
  const { username } = useParams();
  const [repositories, setRepositories] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    getUserRepositories(username).then((data) => setRepositories(data));
    getUserInfo(username).then((data) => setUserInfo(data));
  }, [username]);

  return (
    <div className="repository-list">
      <div className="user-info">
        <h2>User Info</h2>
        <p>Username: {userInfo.login}</p>
        <Link to={`/followers/${username}`} className="followers-link">
          View Followers
        </Link>
      </div>
      <div className="repositories">
        <h2>Repositories</h2>
        <ul>
          {repositories.map((repo) => (
            <li key={repo.id}>
              <Link to={`/repositories/${username}/${repo.name}`}>
                {repo.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RepositoryList;
