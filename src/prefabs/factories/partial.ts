import type { PrefabReference } from '../types/component';

/**
 * Create a partial prefab
 *
 * @returns
 */
export const partial = (): PrefabReference => ({
  type: 'PARTIAL',
  partialId: '',
});
