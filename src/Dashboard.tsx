import React, { useState, useEffect } from "react";
import { useWeb3Auth } from "@web3auth/modal-react-hooks";
import { useWalletServicesPlugin } from "@web3auth/wallet-services-plugin-react-hooks";
import RPC from "./web3RPC";
import "./Dashboard.css"; // Custom CSS
import { IProvider } from "@web3auth/base";

const Dashboard: React.FC = () => {
  const { provider, logout, userInfo } = useWeb3Auth();
  const { showWalletUI, isPluginConnected } = useWalletServicesPlugin();
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [swapInput, setSwapInput] = useState<string>("");
  const [consoleMessage, setConsoleMessage] = useState<string>("");

  const uiConsole = (...args: any[]) => setConsoleMessage(JSON.stringify(args, null, 2));

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
    window.location.href = "/"; // Redirect to Landing Page
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

      {/* Console */}
      <div className="console-output">
        <h3>Console</h3>
        <pre>{consoleMessage}</pre>
      </div>
    </div>
  );
};

export default Dashboard;
