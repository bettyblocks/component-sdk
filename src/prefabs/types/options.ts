export type ValueConfig = Record<string, unknown>;

export interface PrefabComponentOptionBase {
  label: string;
  key: string;
  type: string;
  configuration?: unknown;
}

export interface ValueDefault extends PrefabComponentOptionBase {
  value: boolean | string[] | string | number | ValueConfig;
  ref?: {
    id?: string;
  };
}

export interface ValueRef extends PrefabComponentOptionBase {
  ref: {
    id?: string;
    value: string | string[];
  };
}

export type PrefabComponentOption = ValueDefault | ValueRef;
export interface PrefabWrapperLinkedOption extends PrefabComponentOptionBase {
  value?: {
    ref: {
      componentId: string;
      optionId: string;
    };
  };
}

export type PrefabComponentStyle = {
  name?: string;
  overwrite?: {
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
  };
};

export interface PrefabConfiguration {
  options?: Record<string, OptionProducer>;
  style?: PrefabComponentStyle;
  ref?: { id: string };
}

export type OptionProducer = (key: string) => PrefabComponentOption;
export type LinkedOptionProducer = (key: string) => PrefabWrapperLinkedOption;

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
