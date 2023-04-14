import { StyleDefinitionState } from './style';

export type ValueConfig = Record<string, unknown>;

export enum ActionVariableKind {
  ARRAY = 'ARRAY',
  BOOLEAN = 'BOOLEAN',
  COLLECTION = 'COLLECTION',
  DATE = 'DATE',
  DATE_TIME = 'DATE_TIME',
  DECIMAL = 'DECIMAL',
  INTEGER = 'INTEGER',
  JSON = 'JSON',
  OBJECT = 'OBJECT',
  RECORD = 'RECORD',
  STRING = 'STRING',
  TEXT = 'TEXT',
}

export type ActionVariableType =
  | 'ARRAY'
  | 'BOOLEAN'
  | 'COLLECTION'
  | 'DATE'
  | 'DATE_TIME'
  | 'DECIMAL'
  | 'INTEGER'
  | 'JSON'
  | 'OBJECT'
  | 'RECORD'
  | 'STRING'
  | 'TEXT';

export type OptionCategory = {
  label: string;
  expanded?: boolean;
  members: string[];
  condition?: {
    type: string;
    option: string;
    comparator: string;
    value: string | boolean | number;
  };
};

export type RowItem = string | number | boolean;
export type AllowedValue = Record<string | 'uuid', RowItem>;

export interface PrefabComponentOptionBase {
  label: string;
  key: string;
  type: string;
  optionRef?: {
    id?: string;
    sourceId?: string;
    inherit?: 'label' | 'name';
  };
  configuration?: {
    allowedKinds?: string[];
    allowRelations?: boolean;
    allowFormatting?: boolean;
    allowPropertyName?: boolean;
    allowedExtensions?: string[];
    allowedInput?: {
      name: string;
      value: boolean | string | number;
    }[];
    allowedTypes?: string[];
    apiVersion?: string;
    as?: 'BUTTONGROUP' | 'DROPDOWN' | 'MULTILINE' | 'UNIT' | 'VISIBILITY';
    component?: string;
    condition?: {
      type: 'SHOW' | 'HIDE';
      option: string;
      comparator: 'EQ';
      value: string | boolean | number;
    };
    createProperty?: {
      type: ActionVariableType;
      value?: string;
    };
    createAction?: {
      template: string;
      name?: string;
      permissions?: string;
      value?: string;
    };
    dataType?: string;
    dependsOn?: string;
    disabled?: boolean;
    mediaType?: 'IMAGE' | 'VIDEO';
    modal?: {
      type: 'MODEL_AND_PROPERTIES';
      generateCustomModel: boolean;
      modelRequired: boolean;
    };
    placeholder?: string;
    showOnDrop?: boolean;
    showTextStyleColor?: boolean;
    manageObjectValues?: {
      value: AllowedValue[];
    };
  };
}

export interface PrefabLinkedOptionBase {
  label: string;
  key: string;
}

export interface ValueDefault extends PrefabComponentOptionBase {
  value: boolean | string[] | string | number | ValueConfig;
  ref?: {
    id?: string;
  };
  showInReconfigure?: boolean;
  showInAddChild?: boolean;
}

export interface ValueRef extends PrefabComponentOptionBase {
  ref: {
    id?: string;
    value: string | string[];
  };
  showInReconfigure?: boolean;
  showInAddChild?: boolean;
}

export type PrefabComponentOption = ValueDefault | ValueRef;
export type PrefabWrapperLinkedOptionConfiguration = {
  as?: string;
  dataType?: string;
  allowedInput?: { name: string; value: string | boolean | number }[];
  condition?: {
    type: 'SHOW' | 'HIDE';
    option: string;
    comparator: 'EQ';
    value: string | boolean | number;
  };
  showOnDrop?: boolean;
};

export interface PrefabWrapperLinkedOption extends PrefabLinkedOptionBase {
  configuration?: PrefabWrapperLinkedOptionConfiguration;
  type: 'LINKED_OPTION';
  value?: {
    ref: {
      componentId: string;
      optionId: string;
    };
  };
  optionRef?: {
    id?: string;
    sourceId?: string;
    inherit?: 'label' | 'name';
  };
  showInReconfigure?: boolean;
  showInAddChild?: boolean;
}

export interface PrefabWrapperLinkedPartialOption
  extends PrefabLinkedOptionBase {
  configuration?: PrefabWrapperLinkedOptionConfiguration;
  type: 'LINKED_PARTIAL';
  value?: {
    ref: {
      componentId: string;
    };
  };
  optionRef?: {
    id?: string;
    sourceId?: string;
    inherit?: 'label' | 'name';
  };
  showInReconfigure?: boolean;
  showInAddChild?: boolean;
}

export type PrefabComponentStyle = {
  name?: string;
  overwrite?:
    | {
        backgroundColor?: {
          value: string;
          type: string;
        };
        borderColor?: {
          value: string;
          type: string;
        };
        borderRadius?: string | string[];
        borderStyle?: string;
        borderWidth?: string | string[];
        boxShadow?: string;
        color?: {
          value: string;
          type: string;
        };
        fontFamily?: string;
        fontSize?: string;
        fontStyle?: string;
        fontWeight?: string;
        letterSpacing?: string;
        lineHeight?: string;
        padding?: string | string[];
        textDecoration?: string;
        textTransform?: string;
      }
    | StyleDefinitionState[];
};

export type OptionProducer = (key: string) => PrefabComponentOption;
export type LinkedOptionProducer = (key: string) => PrefabWrapperLinkedOption;
export type LinkedPartialOptionProducer = (
  key: string,
) => PrefabWrapperLinkedPartialOption;

export type StyleProducer = (key: string) => PrefabComponentStyle;

export interface BaseConfiguration {
  condition?: {
    type: 'SHOW' | 'HIDE';
    option: string;
    comparator: 'EQ';
    value: string | boolean;
  };
}

interface VariableConfiguration extends BaseConfiguration {
  placeholder: string;
}

interface ButtonGroupConfiguration extends BaseConfiguration {
  as: 'BUTTONGROUP';
  dataType: 'string';
  allowedInput: { name: string; value: string }[];
}

interface DropdownConfiguration extends BaseConfiguration {
  as: 'DROPDOWN';
  dataType: 'string';
  allowedInput: { name: string; value: string }[];
}

export type Configuration =
  | VariableConfiguration
  | ButtonGroupConfiguration
  | DropdownConfiguration;
