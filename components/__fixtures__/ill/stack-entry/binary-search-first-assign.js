import binarySearch from '../../../../algorithms/binary-search';
import BinarySearch from '../../../../components/ill/binary-search/binary-search';

const { code } = binarySearch;

export default {
  _layoutFor: 'binarySearch',
  code,
  illustration: BinarySearch,
  prevStep: {
    bindings: {
      list: ['bear', 'cat', 'dog', 'lion', 'panda', 'snail'],
      item: 'panda',
    },
    highlight: {
      start: 9,
      end: 33,
    },
  },
  nextStep: {
    bindings: {
      list: ['bear', 'cat', 'dog', 'lion', 'panda', 'snail'],
      item: 'panda',
      low: 0,
    },
    highlight: {
      start: 38,
      end: 50,
    },
  },
  stepProgress: 0.5,
  actions: {
    generateSteps: steps => console.log('steps', steps),
  },
};
