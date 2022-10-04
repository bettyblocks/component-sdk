import {
  StyleDefinition,
  StyleDefinitionCssObject,
  StyleDefinitionContentBase,
  StaticValue,
  ThemeColorReference,
  StyleReference,
} from '../types';

interface RequiredStyleAttrs {
  name: string;
  basis: StyleDefinitionCssObject;
  states: Partial<Omit<StyleDefinitionContentBase, 'basis'>>;
}

export const style = (
  type: string,
  { name, basis, states }: RequiredStyleAttrs,
): StyleDefinition => ({
  name,
  type,
  basis,
  states: Object.entries(states).map(([stateKey, cssObject]) => ({
    name: stateKey,
    cssObject,
  })),
});

interface StyleReferenceAttrs {
  overwrite?: Partial<StyleDefinitionContentBase>;
}

export const styleReference = (
  name: string,
  attrs: StyleReferenceAttrs,
): StyleReference => {
  const overwrite = attrs.overwrite
    ? {
        overwrite: Object.entries(attrs.overwrite).map(
          ([stateName, cssObject]) => ({ name: stateName, cssObject }),
        ),
      }
    : {};
  return { name, ...overwrite };
};

export const staticColor = (value: string): StaticValue => ({
  type: 'STATIC',
  value,
});

export const themeColor = (value: string): ThemeColorReference => ({
  type: 'THEME_COLOR',
  value,
});
