type Format = 'propertyLabel' | 'propertyValue' | 'static';

interface SetBaseOptionProps {
  target: string;
}

interface SetVariableOptionProps extends SetBaseOptionProps {
  format: Format;
}

interface SetModelOptionProps extends SetBaseOptionProps {
  type?: 'referencedModel' | 'parent';
}

export function setVariableOption({ target, format }: SetVariableOptionProps) {
  return { action: 'setVariable', format, target };
}

export function setModelOption({ target, type }: SetModelOptionProps) {
  return { action: 'setModel', target, type: type || 'parent' };
}

export function setOptionToDefaultValue({ target }: SetBaseOptionProps) {
  return { action: 'setToDefault', target };
}

export function setActionJSInputVariableOption({ target }: SetBaseOptionProps) {
  return { action: 'setActionJSInputVariable', target };
}

export function setPropertyOption({ target }: SetBaseOptionProps) {
  return { action: 'setProperty', target };
}
