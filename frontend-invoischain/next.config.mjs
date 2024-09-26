// /** @type {import('next').NextConfig} */
import { http, createConfig } from 'wagmi'
import { mainnet, sepolia, arbitrumSepolia, lisk, liskSepolia, base } from 'wagmi/chains'

export const config = createConfig({
  chains: [mainnet, sepolia, arbitrumSepolia, lisk, liskSepolia, base ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [liskSepolia.id]: http(),
    [arbitrumSepolia.id]: http(),
    [lisk.id]: http(),
    [base.id]: http(),
  },
})
