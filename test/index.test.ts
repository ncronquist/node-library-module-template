import { assert } from 'chai';
import { helloWorld } from '../src/index';

describe('Index', () => {
  describe('HelloWorld Function', () => {
    it('should return "Hello World" when called with no arguments', () => {
      const res = helloWorld();
      assert.equal(res, 'Hello World!');
    });

    it('should return "Hello {arg}" when called with a string argument', () => {
      const res = helloWorld('Nick');
      assert.equal(res, 'Hello Nick!');
    });
  });
});
