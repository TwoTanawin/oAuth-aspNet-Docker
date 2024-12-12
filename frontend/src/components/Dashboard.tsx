// import React from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const Dashboard = () => {
  const location = useLocation();
  const { userId, name, email } = queryString.parse(location.search);

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>User ID: {userId}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default Dashboard;
