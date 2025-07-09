import React, { useState } from "react";
import TravelFintechHome from "./components/TravelFintechHome";
import LoginPage from "./components/auth/LoginPage";
import SignupPage from "./components/auth/SignupPage";

function App() {
  const [isLogin, setIsLogin] = useState(true); // true = show login page
  const [isAuthenticated, setIsAuthenticated] = useState(false); // after login/signup

  // Fake auth handler for now
  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return isLogin ? (
      <LoginPage
        onSwitch={() => setIsLogin(false)}
        onLoginSuccess={handleAuthSuccess}
      />
    ) : (
      <SignupPage
        onSwitch={() => setIsLogin(true)}
        onSignupSuccess={handleAuthSuccess}
      />
    );
  }

  return <TravelFintechHome />;
}

export default App;
