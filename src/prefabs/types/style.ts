export interface ThemeColorReference {
  type: 'THEME_COLOR';
  value: string;
}

export interface StaticValue {
  type: 'STATIC';
  value: string;
}

export type  RefOrValue = ThemeColorReference | StaticValue;

export interface StyleDefinitionContentObject {
  backgroundColor?: RefOrValue;
  borderColor?: RefOrValue;
  borderRadius?: string[];
  borderStyle?: string;
  borderWidth?: string[];
  boxShadow?: string;
  color?: RefOrValue;
  fontFamily?: string;
  fontSize?: string;
  fontStyle?: string;
  fontWeight?: string;
  letterSpacing?: string;
  lineHeight?: string;
  padding?: string[];
  textDecoration?: string;
  textTransform?: string;
}
export interface StyleDefinitionState {
  name: string;
  content: StyleDefinitionContentObject;
}

export interface StyleDefinition {
  type: string;
  name: string;
  basis: StyleDefinitionContentObject;
  states: StyleDefinitionState[];
}

export interface StyleReference {
  name: string,
  overwrite?: StyleDefinitionState[],
}

export enum AllowedStateKeys {
  SELECTED = 'selected',
  HOVER = 'hover',
  FOCUS = 'focus',
  DISABLED = 'disabled',
  VALID = 'valid',
  INVALID = 'invalid',
  READONLY = 'readOnly',
}

export type StyleStateKeys =
  | AllowedStateKeys.SELECTED
  | AllowedStateKeys.HOVER
  | AllowedStateKeys.FOCUS
  | AllowedStateKeys.DISABLED
  | AllowedStateKeys.VALID
  | AllowedStateKeys.INVALID
  | AllowedStateKeys.READONLY;

export type StyleDefinitionContentBase = {
  [key in StyleStateKeys | 'basis']: StyleDefinitionContentObject;
};

export type StyleDefinitionContent = Partial<StyleDefinitionContentBase> &
  Pick<StyleDefinitionContentBase, 'basis'>;

export interface BuildStyleDefinition
  extends Omit<StyleDefinition, 'states' | 'basis'> {
  content: StyleDefinitionContent;
}