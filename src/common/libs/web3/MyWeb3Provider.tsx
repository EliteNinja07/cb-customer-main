import {
  connectorsForWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import {
  argentWallet,
  braveWallet,
  coinbaseWallet,
  imTokenWallet,
  injectedWallet,
  metaMaskWallet,
  omniWallet,
  rainbowWallet,
  trustWallet,
  walletConnectWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

export function MyWeb3Provider({ children }: any) {
  const { chains, provider } = configureChains(
    [mainnet],
    [
      // infuraProvider({ apiKey: process.env.INFURA_KEY as string }),
      publicProvider(),
    ]
  );

  const connectors = connectorsForWallets([
    {
      groupName: "Suggested",
      wallets: [
        injectedWallet({ chains }),
        coinbaseWallet({ chains, appName: "Coinbase" }),
        metaMaskWallet({ chains }),
        trustWallet({ chains }),
        imTokenWallet({ chains }),
        walletConnectWallet({ chains }),
      ],
    },
    {
      groupName: "More",
      wallets: [
        rainbowWallet({ chains }),
        argentWallet({ chains }),
        braveWallet({ chains }),
        omniWallet({ chains }),
      ],
    },
  ]);

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} coolMode>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
