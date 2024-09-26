// /** @type {import('next').NextConfig} */
import { http, createConfig } from 'wagmi'
import { sepolia, lisk, liskSepolia } from 'wagmi/chains'

export const config = createConfig({
    chains: [ sepolia, lisk, liskSepolia, ],
    transports: {
        [sepolia.id]: http(),
        [liskSepolia.id]: http(),
        [lisk.id]: http(),
    },
});
