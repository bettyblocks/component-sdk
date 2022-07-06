import { PrefabReference } from '../types/component';
import { Prefab } from '../types/prefabs';

type Attributes = Omit<Prefab, 'name' | 'structure' | 'beforeCreate'>;

export type BeforeCreateArgs = {
  close: () => void;
  save: (prefab: Prefab) => void;
  prefab: Prefab;
  prefabs: Prefab[];
  components: {
    [name: string]: any;
  };
  helpers: {
    camelToSnakeCase: (str: string) => string;
    useCurrentPageId: () => string;
    useCurrentPartialId: () => string;
    useModelQuery: (options: Record<string, any>) => {
      loading: boolean;
      data: Record<string, any> | null;
      error: Record<string, any> | null;
    };
  };
};

type BeforeCreate = (args: BeforeCreateArgs) => any;

export const prefab = (
  name: string,
  attr: Attributes,
  beforeCreate: BeforeCreate | undefined,
  structure: PrefabReference[],
): Prefab => ({
  name,
  ...attr,
  beforeCreate: beforeCreate?.toString(),
  structure,
});
