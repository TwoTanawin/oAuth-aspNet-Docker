import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GoogleLogin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(true);

  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5104/auth/google";
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://localhost:5104/auth/success", {
          withCredentials: true,
        });

        if (response.data.authenticated) {
          navigate("/dashboard");
        }
      } catch (error) {
        console.error("Authentication failed:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [navigate]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Login with Google</h1>
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
    </div>
  );
};

export default GoogleLogin;
