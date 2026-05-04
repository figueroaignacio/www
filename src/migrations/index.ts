import * as migration_20260212_180110 from './20260212_180110';
import * as migration_20260417_234024_add_project_icon from './20260417_234024_add_project_icon';
import * as migration_20260504_002553 from './20260504_002553';
import * as migration_20260504_003516 from './20260504_003516';
import * as migration_20260504_004150 from './20260504_004150';
import * as migration_20260504_213034 from './20260504_213034';

export const migrations = [
  {
    up: migration_20260212_180110.up,
    down: migration_20260212_180110.down,
    name: '20260212_180110',
  },
  {
    up: migration_20260417_234024_add_project_icon.up,
    down: migration_20260417_234024_add_project_icon.down,
    name: '20260417_234024_add_project_icon',
  },
  {
    up: migration_20260504_002553.up,
    down: migration_20260504_002553.down,
    name: '20260504_002553',
  },
  {
    up: migration_20260504_003516.up,
    down: migration_20260504_003516.down,
    name: '20260504_003516',
  },
  {
    up: migration_20260504_004150.up,
    down: migration_20260504_004150.down,
    name: '20260504_004150',
  },
  {
    up: migration_20260504_213034.up,
    down: migration_20260504_213034.down,
    name: '20260504_213034',
  },
];
