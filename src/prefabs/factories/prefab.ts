import { ActionVariable } from '../types/ActionVariable';
import { PrefabReference } from '../types/component';
import { Model } from '../types/model';
import { Prefab } from '../types/prefabs';
import { Property, PropertyKind } from '../types/property';
import { BettyPrefabs } from '../types/constants/BettyPrefabs';

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
    cloneStructure: (prefabs: Prefab[], prefabName: string) => PrefabReference;
    makeBettyInput: (
      prefabName: string,
      model: Model,
      property: Property,
      variable: ActionVariable,
      relatedIdProperties: Record<string, string>,
    ) => PrefabReference;
    BettyPrefabs: typeof BettyPrefabs;
    PropertyKind: PropertyKind;
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
