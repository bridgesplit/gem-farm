import { PublicKey } from '@solana/web3.js';

export * from './gem-bank';
export * from './gem-farm';
export * from './gem-common';

export const GEM_BANK_PROG_ID = new PublicKey(
  'cjq4HMs9E8kiHcjwVk7ZT4SnGHLftrkSRhZDTZW423b'
);
export const GEM_FARM_PROG_ID = new PublicKey(
  '8T5XXbVjjor6uFymtvKUhnNyM2wRfty1pQMNRrGzLxKr'
);
