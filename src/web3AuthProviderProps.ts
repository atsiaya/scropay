import { Web3AuthContextConfig } from "@web3auth/modal-react-hooks";
import { Web3AuthOptions } from "@web3auth/modal";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { CHAIN_NAMESPACES, WEB3AUTH_NETWORK } from "@web3auth/base";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { WalletServicesPlugin } from "@web3auth/wallet-services-plugin";

const chainConfig = {
    chainId: "0xaa36a7", // for wallet connect make sure to pass in this chain in the loginSettings of the adapter.
    displayName: "Ethereum Sepolia",
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    tickerName: "Ethereum Sepolia",
    ticker: "ETH",
    rpcTarget: "https://1rpc.io/sepolia",
    blockExplorerUrl: "https://sepolia.etherscan.io",
    logo: "https://coincub.com/wp-content/uploads/2022/06/blockchain.com-logo-removebg-preview.png",
};


const privateKeyProvider = new EthereumPrivateKeyProvider({
    config: {
        chainConfig,
    },
});

const web3AuthOptions: Web3AuthOptions = {
    clientId: "BFWMC-6QA-XDjBUyYBNO-_wJGwbeRPPwuPzH6vChaMs18YcWTNbx364nNdUKbXj6L9tWu7aTxuRPdoa1LIY51ac",
    web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
    uiConfig: {
      uxMode: "redirect",
      appName: "scro.pay",
      appUrl: "https://web3auth.io/",
      theme: {
        primary: "#4eabb5",
      },
      logoLight: "http://safepal.co.ke/wp-content/uploads/2025/05/logo-removebg.png",
      logoDark: "http://safepal.co.ke/wp-content/uploads/2025/05/logo-removebg.png",
      defaultLanguage: "en", // en, de, ja, ko, zh, es, fr, pt, nl, tr
      mode: "auto", // whether to enable dark mode. defaultValue: auto
      useLogoLoader: false,
    },
    privateKeyProvider: privateKeyProvider,
    sessionTime: 86400, // 1 day
    // useCoreKitKey: true,
  };

  const openloginAdapter = new OpenloginAdapter({
    loginSettings: {
      mfaLevel: "optional",
    },
    adapterSettings: {
      uxMode: "redirect", // "redirect" | "popup"
      whiteLabel: {
        logoLight: "http://safepal.co.ke/wp-content/uploads/2025/05/logo-removebg.png",
        logoDark: "http://safepal.co.ke/wp-content/uploads/2025/05/logo-removebg.png",
        defaultLanguage: "en", // en, de, ja, ko, zh, es, fr, pt, nl, tr
        mode: "dark", // whether to enable dark, light or auto mode. defaultValue: auto [ system theme]
      },
      mfaSettings: {
        deviceShareFactor: {
          enable: true,
          priority: 1,
          mandatory: true,
        },
        backUpShareFactor: {
          enable: true,
          priority: 2,
          mandatory: false,
        },
        socialBackupFactor: {
          enable: true,
          priority: 3,
          mandatory: false,
        },
        passwordFactor: {
          enable: true,
          priority: 4,
          mandatory: true,
        },
      },
    },
  });

  const walletServicesPlugin = new WalletServicesPlugin({
    wsEmbedOpts: {},
    walletInitOptions: { whiteLabel: { showWidgetButton: false } },
  });


export const web3AuthContextConfig: Web3AuthContextConfig = {
    web3AuthOptions,
    adapters: [openloginAdapter],
    plugins: [walletServicesPlugin],
    //plugins: [],
};

