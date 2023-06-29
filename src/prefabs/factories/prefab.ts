import { ActionVariable } from '../types/ActionVariable';
import {
  PrefabComponent,
  PrefabReference,
  PrefabWrapper,
} from '../types/component';
import { Model } from '../types/model';
import { Prefab } from '../types/prefabs';
import { Property, PropertyKind, ModelPropertyInput } from '../types/property';
import { BettyPrefabs } from '../types/constants/BettyPrefabs';
import {
  PreparedAction,
  PreparedInput,
  LinkOptionProps,
} from '../types/helpers';
import {
  PrefabComponentOption,
  ActionVariableKind,
  LinkedOptionProducer,
  MakePrepareActionArgs,
} from '../types';
import { SchemaModel } from '../types/schemaModel';
import { WrapperAttrs } from './wrapper';

type Attributes = Omit<Prefab, 'name' | 'structure' | 'beforeCreate'>;

export type BeforeCreateArgs = {
  modelId: string;
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
    usePropertyQuery: (propertyId: string) => {
      loading: boolean;
      data: Record<string, any> | null;
      error: Record<string, any> | null;
    };
    useModelRelationQuery: (propertyModelId: string) => {
      loading: boolean;
      data: Record<string, any> | null;
      error: Record<string, any> | null;
    };
    useModelIdSelector: () => string | null;
    useActionIdSelector: () => string | null;
    usePrefabSelector: () => { name: string; id: string } | null;
    cloneStructure: (prefabName: string) => PrefabReference;
    addActionVariable: (
      actionId: string,
      name: string,
      kind: ActionVariableKind,
      options: object,
    ) => Promise<ActionVariable>;
    addSchemaModel: (name: string, jsonSchema: string) => Promise<SchemaModel>;
    addModelAndProperties: (
      modelName: string,
      properties: ModelPropertyInput[],
    ) => Promise<Model>;
    prepareAction: (...args: MakePrepareActionArgs) => Promise<PreparedAction>;
    prepareInput: (
      actionId: string | null,
      variableName: string | undefined,
      kind: PropertyKind,
      propertyKind: PropertyKind,
      permissions?: 'public' | 'private' | 'inherit',
      getPageAuthenticationProfileId?: string,
    ) => Promise<PreparedInput>;
    getPageAuthenticationProfileId: () => string;
    getPageName: () => string;
    makeBettyInput: (
      prefabName: string,
      model: Model,
      property: Property,
      variable: ActionVariable,
      relatedIdProperties?: string[][],
      relatedModelIds?: Record<string, string>,
    ) => PrefabReference;
    makeBettyUpdateInput: (
      prefabName: string,
      model: Model,
      property: Property,
      variable: ActionVariable,
      relatedIdProperties?: string[][],
      relatedModelIds?: Record<string, string>,
    ) => PrefabReference;
    BettyPrefabs: typeof BettyPrefabs;
    PropertyKind: typeof PropertyKind;
    createUuid: () => string;
    setOption: (
      structure: PrefabComponent,
      key: string,
      transform: (option: PrefabComponentOption) => PrefabComponentOption,
    ) => void;
    createBlacklist: (whiteList: PropertyKind[]) => PropertyKind[];
    createWrapper: (
      attrs: WrapperAttrs,
      descendants: PrefabReference[],
    ) => PrefabWrapper;
    linkOption: (attrs: LinkOptionProps) => LinkedOptionProducer;
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
