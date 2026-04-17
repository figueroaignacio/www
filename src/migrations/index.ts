import * as migration_20260212_180110 from './20260212_180110';
import * as migration_20260417_234024_add_project_icon from './20260417_234024_add_project_icon';

export const migrations = [
  {
    up: migration_20260212_180110.up,
    down: migration_20260212_180110.down,
    name: '20260212_180110',
  },
  {
    up: migration_20260417_234024_add_project_icon.up,
    down: migration_20260417_234024_add_project_icon.down,
    name: '20260417_234024_add_project_icon'
  },
];
