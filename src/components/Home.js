// Home.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/repositories/${username}`);
  };

  return (
    <div className="input-container">
      <h1>Accepts a GitHub username</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSubmit} className="button">
        Search
      </button>
    </div>
  );
};

export default Home;
