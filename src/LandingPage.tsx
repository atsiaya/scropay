import React, { useEffect, useState } from "react";
import { useWeb3Auth } from "@web3auth/modal-react-hooks";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css"; // Custom CSS file

const LandingPage: React.FC = () => {
  const { initModal, connect, web3Auth, status, isConnected } = useWeb3Auth();
  const navigate = useNavigate();
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize Web3Auth
  useEffect(() => {
    const init = async () => {
      try {
        if (web3Auth) {
          await initModal();
          setIsInitialized(true);
        }
      } catch (error) {
        console.error("Initialization Error:", error);
      }
    };
    init();
  }, [web3Auth, initModal]);

  // Redirect to Dashboard if already connected
  useEffect(() => {
    if (isConnected) {
      navigate("/dashboard");
    }
  }, [isConnected, navigate]);

  const handleLogin = async () => {
    try {
      await connect();
      navigate("/dashboard");
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };

  return (
    <div className="landing-container">
      {/* App Bar */}
      <header className="app-bar">
        <div className="app-title">ScroPay</div>
        <div className="app-status">Status: {isInitialized ? status : "Initializing..."}</div>
      </header>

      {/* Landing Content */}
      <main className="landing-content">
        <h1>Welcome to ScroPay</h1>
        <p>
          ScroPay is a cutting-edge Web3 platform enabling decentralized
          payments and secure connections with blockchain technology. Connect your wallet and get started!
        </p>
        <button className="login-button" onClick={handleLogin}>
          Connect Wallet
        </button>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} ScroPay. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
