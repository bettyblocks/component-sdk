type Format = 'propertyLabel' | 'propertyValue' | 'static';

export function optionActionSetVariable(target: string, format: Format) {
  return { action: 'setVariable', format, target };
}

export function optionActionSetModel(target: string) {
  return { action: 'setModel', target };
}

export function optionActionSetProperty(target: string) {
  return { action: 'setProperty', target };
}
