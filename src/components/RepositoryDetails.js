// RepositoryDetails.js

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRepositoryDetails } from "../api/github";

const RepositoryDetails = () => {
  const { username, repoName } = useParams();
  const [repository, setRepository] = useState({});

  useEffect(() => {
    getRepositoryDetails(username, repoName).then((data) =>
      setRepository(data)
    );
  }, [username, repoName]);

  return (
    <div className="repository-details">
      <h2>Repository Details</h2>
      <p>Repository Name: {repository.name}</p>
    </div>
  );
};

export default RepositoryDetails;
