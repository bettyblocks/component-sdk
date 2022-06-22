export enum InteractionOptionType {
  Boolean = 'Boolean',
  Number = 'Number',
  String = 'String',
  Event = 'Event',
  Void = 'Void',
  Page = 'Page',
  Locale = 'Locale',
}

// TODO: Add support
export enum InteractionOptionTypeToDo {
  Color = 'Color',
  Endpoint = 'Endpoint',
  Filter = 'Filter',
  Font = 'Font',
  Properties = 'Properties',
  Property = 'Property',
  Size = 'Size',
  Unit = 'Unit',
}

export interface InteractionCompatibility {
  name: string;
  parameters: Record<string, InteractionOptionType>;
  type: InteractionOptionType;
}

export interface Interaction extends InteractionCompatibility {
  function: string;
}

export enum InteractionType {
  Custom = 'Custom',
  Global = 'Global',
}

export interface BasePrefabInteraction {
  name: string;
  ref: {
    sourceComponentId: string;
    targetComponentId?: string;
  };
  targetOptionName?: string;
  sourceEvent: string;
}

export interface ParameterOptionWithId {
  parameter: string;
  id: string[];
}

export interface ParameterOptionWithPath {
  path: string[];
  parameter: string;
}

export interface ParameterOptionWithComponentRef {
  name: string;
  parameter: string;
  ref: {
    componentId: string;
  };
}

export interface ParameterOptionWithPageId {
  name: string,
  pageId: string,
  id: string,
  paramters?: Record<string, string>
}

export type PrefabInteractionParameter =
  | ParameterOptionWithId
  | ParameterOptionWithPath
  | ParameterOptionWithComponentRef
  | ParameterOptionWithPageId;

export interface PrefabCustomInteraction extends BasePrefabInteraction {
  type: InteractionType.Custom
}

export interface PrefabGlobalInteraction extends BasePrefabInteraction {
  type: InteractionType.Global,
  parameters: PrefabInteractionParameter[];
}

export type PrefabInteraction =
  | PrefabCustomInteraction
  | PrefabGlobalInteraction;

export interface PrefabVariable {
  kind: PrefabVariableKind;
  name: string;
  ref: {
    actionId?: string;
    endpointId?: string;
    id: string;
  };
  options?: unknown;
}

export type PrefabVariableKind = 'construct' | 'object' | 'string';
