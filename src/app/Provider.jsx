"use client";

import {ModeToggle} from "@/components/Toggletheme";
import {
  ConnectWallet,
  ThirdwebProvider,
  coinbaseWallet,
  metamaskWallet,
  phantomWallet,
  rainbowWallet,
  safeWallet,
  walletConnect,
} from "@thirdweb-dev/react";
// import * as React from "react";
import {ThemeProvider as NextThemesProvider} from "next-themes";

export function ThemeProvider({children, ...props}) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
      activeChain="mumbai"
      supportedWallets={[
        metamaskWallet({recommended: true}),
        coinbaseWallet(),
        walletConnect(),
        safeWallet({
          personalWallets: [
            metamaskWallet(),
            coinbaseWallet(),
            walletConnect(),
          ],
        }),
        rainbowWallet(),
        phantomWallet(),
      ]}
    >
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </ThirdwebProvider>
  );
}
