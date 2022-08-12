import { ActionVariable } from '../types/ActionVariable';
import { PrefabComponent, PrefabReference } from '../types/component';
import { Model } from '../types/model';
import { Prefab } from '../types/prefabs';
import { Property, PropertyKind } from '../types/property';
import { BettyPrefabs } from '../types/constants/BettyPrefabs';
import { PreparedAction } from '../types/helpers';
import { PrefabComponentOption } from '../types';
import { AuthenticationProfile } from '../types/authenticationProfile';

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
    cloneStructure: (prefabName: string) => PrefabReference;
    prepareAction: (
      componentId: string,
      idProperty: Property,
      properties: Property[],
      actionTemplate: 'create' | 'update' | 'delete' | 'login',
      authenticationProfile?: AuthenticationProfile,
    ) => Promise<PreparedAction>;
    makeBettyInput: (
      prefabName: string,
      model: Model,
      property: Property,
      variable: ActionVariable,
      relatedIdProperties?: Record<string, string>,
    ) => PrefabReference;
    BettyPrefabs: typeof BettyPrefabs;
    PropertyKind: PropertyKind;
    createUuid: () => string;
    setOption: (
      structure: PrefabComponent,
      key: string,
      transform: (option: PrefabComponentOption) => PrefabComponentOption,
    ) => void;
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
