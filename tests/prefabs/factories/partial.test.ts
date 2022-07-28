import test from 'tape';

import { partial } from '../../../src/prefabs/factories/partial';

test('partial builds empty partial', (t) => {
  const result = partial();
  const expected = {
    type: 'PARTIAL',
    partialId: '',
  };

  t.deepEqual(result, expected);
  t.end();
});
