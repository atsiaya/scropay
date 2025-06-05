import React, { useState, useEffect } from "react";
import { useWeb3Auth } from "@web3auth/modal-react-hooks";
import { useWalletServicesPlugin } from "@web3auth/wallet-services-plugin-react-hooks";
import { useNavigate } from "react-router-dom";
import RPC from "./web3RPC";
import "./Dashboard.css"; // Custom CSS
import { IProvider } from "@web3auth/base";

const Dashboard: React.FC = () => {
  const { provider, logout } = useWeb3Auth();
  const { showWalletUI, isPluginConnected } = useWalletServicesPlugin();
  const [walletAddress, setWalletAddress] = useState<string>("");
  

  const navigate = useNavigate();

  // Redirect to Landing Page if not authenticated
useEffect(() => {
  if (!provider) {
    navigate("/"); // Redirects to the landing page if no provider
  }
}, [provider, navigate]);

  // Fetch wallet address on load
  useEffect(() => {
    const fetchAddress = async () => {
      if (!provider) return;
      const rpc = new RPC(provider as IProvider);
      const accounts = await rpc.getAccounts();
      setWalletAddress(accounts[0]);
    };
    fetchAddress();
  }, [provider]);

  const handleLogout = async () => {
    await logout();

    navigate("/"); // Redirect to Landing Page

  };

  return (
    <div className="dashboard-container">
  {/* Header */}
  <header className="app-bar header-responsive">
    <div className="app-title">ScroPay</div>

    {walletAddress && (
      <div className="wallet-controls">
        <button
          onClick={() => showWalletUI()}
          disabled={!isPluginConnected}
          className="wallet-ui-button"
        >
          Wallet
        </button>
      </div>
    )}

    <button onClick={handleLogout} className="logout-button" aria-label="Logout">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="logout-icon"
        viewBox="0 0 24 24"
        fill="currentColor"
        width="20"
        height="20"
      >
        <path d="M16 13v-2H7V8l-5 4 5 4v-3h9zM20 3H12a1 1 0 0 0-1 1v4h2V5h6v14h-6v-3h-2v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"/>
      </svg>
    </button>
  </header>

  {/* Main Content */}
  <main className="dashboard-content">{/* content goes here */}
  <div className="dashboard-content">
  {/* Header */}
  <header className="dashboard-header">
    <div className="logo-section">
      {/* <img
        src="/public/logo192.png"
        alt="logo"
        className="logo-image"
      /> */}
      <span className="logo-text">NFTS</span>
    </div>

    {/* Search Form */}
    <form className="search-form">
      <label htmlFor="search" className="visually-hidden">Search</label>
      <input
        type="search"
        id="search"
        className="search-input"
        placeholder="Search tokenized asset"
      />
      <span className="search-placeholder">Search</span>
    </form>
  </header>

  {/* Category Navigation (placeholder for scrollable nav bar) */}
  <nav className="category-nav">
    {/* Add your nav items here */}
    <span className="category-item">All</span>
    <span className="category-item">Real Estate</span>
    <span className="category-item">Insurance policy</span>
    <span className="category-item">Renewable energy</span>
    <span className="category-item">zkVM</span>
  </nav>
</div>

  </main>

  {/* Footer */}
  <footer className="footer">
    <p>© {new Date().getFullYear()} ScroPay. All Rights Reserved.</p>
  </footer>
</div>

  );
  
};

export default Dashboard;
