type Format = 'propertyLabel' | 'propertyValue' | 'static';

type SetVariableOptionProps = { target: string; format: Format };

type SetModelOptionProps = {
  target: string;
};

type SetPropertyOptionProps = {
  target: string;
};

export function setVariableOption({ target, format }: SetVariableOptionProps) {
  return { action: 'setVariable', format, target };
}

export function setModelOption({ target }: SetModelOptionProps) {
  return { action: 'setModel', target };
}

export function setPropertyOption({ target }: SetPropertyOptionProps) {
  return { action: 'setProperty', target };
}
