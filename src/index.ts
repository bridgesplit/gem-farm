import { PublicKey } from '@solana/web3.js';

export * from './gem-bank';
export * from './gem-farm';
export * from './gem-common';

export const GEM_BANK_PROG_ID = new PublicKey(
  'BNKhzisNn4EhRiGGfskmxWWrQv3zMdSqVgeAyPanaTBg'
);
export const GEM_FARM_PROG_ID = new PublicKey(
  'STk5QbGw6H373geifnB84qSGyYud7VcLSgdY9k33Fe1'
);
