// FollowersList.js

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getUserFollowers } from "../api/github";

const FollowersList = () => {
  const { username } = useParams();
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    getUserFollowers(username).then((data) => setFollowers(data));
  }, [username]);

  return (
    <div>
      <h2>Followers</h2>
      <ul>
        {followers.map((follower) => (
          <li key={follower.id}>
            <Link to={`/repositories/${follower.login}`}>{follower.login}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowersList;
