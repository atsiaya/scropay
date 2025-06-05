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
  const [swapInput, setSwapInput] = useState<string>("");

  const navigate = useNavigate();

  // Redirect to Landing Page if not authenticated
  useEffect(() => {
    if (!provider) {
      navigate("/");
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
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="app-bar">
        <div className="app-title">ScroPay</div>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="dashboard-content">
        {/* Profile Section */}
        <section className="profile-section">
          <h2>Wallet Address</h2>
          <p className="wallet-address">{walletAddress || "Loading..."}</p>
          <button
            onClick={() => showWalletUI()}
            disabled={!isPluginConnected}
            className="wallet-ui-button"
          >
            View Wallet
          </button>
        </section>

        {/* Swap Section */}
        <section className="swap-section">
          <h2>Swap Cryptocurrencies</h2>
          <div className="swap-form">
            <input
              type="text"
              placeholder="Amount to Swap"
              value={swapInput}
              onChange={(e) => setSwapInput(e.target.value)}
              className="swap-input"
            />
            <select className="crypto-select">
              <option value="ETH">ETH</option>
              <option value="MATIC">MATIC</option>
              <option value="DAI">DAI</option>
            </select>
            <span className="arrow">⇄</span>
            <select className="crypto-select">
              <option value="MATIC">MATIC</option>
              <option value="ETH">ETH</option>
              <option value="USDC">USDC</option>
            </select>
          </div>
          <button className="swap-button">Swap</button>
        </section>

        {/* Send/Receive Section */}
        <section className="send-receive-section">
          <h2>Send / Receive Assets</h2>
          <button className="send-button">Send Assets</button>
          <button className="receive-button">Receive Assets</button>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} ScroPay. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
