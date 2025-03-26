export const nonEVMNetworks = [
  'eos',
  'jungle4',
  'kylin',
  'telos-testnet',
  'telos',
  'wax-testnet',
  'wax',
  'arweave-mainnet',
  'gnosis-chiado-cl',
  'gnosis-cl',
  'holesky-cl',
  'mainnet-cl',
  'sepolia-cl',
  'btc',
  'litecoin',
  'injective-mainnet',
  'injective-testnet',
  'mantra-mainnet',
  'mantra-testnet',
  'near-mainnet',
  'near-testnet',
  'solana-accounts',
  'solana-devnet',
  'solana-mainnet',
  'solana-mainnet-beta',
  'solana-testnet',
  'starknet-mainnet',
  'starknet-testnet',
]

export function isNonEVMNetwork(networkId: string): boolean {
  return nonEVMNetworks.includes(networkId)
}
