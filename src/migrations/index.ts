import * as migration_20260212_180110 from './20260212_180110';

export const migrations = [
  {
    up: migration_20260212_180110.up,
    down: migration_20260212_180110.down,
    name: '20260212_180110'
  },
];
