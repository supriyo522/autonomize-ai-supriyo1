import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import RepositoryList from "./components/RepositoryList";
import RepositoryDetails from "./components/RepositoryDetails";
import FollowersList from "./components/FollowersList";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/repositories/:username" element={<RepositoryList />} />
          <Route
            path="/repositories/:username/:repoName"
            element={<RepositoryDetails />}
          />
          <Route path="/followers/:username" element={<FollowersList />} />
        </Routes>
      </Router>
    </div>
  );
}
