import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  sepolia,
  liskSepolia,
  lisk,
} from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'RainbowKit demo',
  projectId: 'YOUR_PROJECT_ID',
  chains: [
 
    sepolia,
    lisk,
    liskSepolia,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: true,
});
