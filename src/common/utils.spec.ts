import {
  canonicalizeUrl,
  toInteger,
  toObjectId,
  toStringSafe,
  typeFn,
} from './utils';
import { ObjectID } from 'mongodb';

describe('utils', () => {
  describe('toStringSafe', () => {
    it('should handle null', () => {
      expect(toStringSafe(null)).toBe(null);
    });

    it('should handle undefined', () => {
      expect(toStringSafe(undefined)).toBe(null);
    });

    it('should handle number', () => {
      expect(toStringSafe(100)).toBe('100');
    });

    it('should handle ObjectID', () => {
      expect(toStringSafe(ObjectID.createFromTime(0))).toBe(
        '000000000000000000000000',
      );
    });
  });

  describe('toObjectId', () => {
    it('should handle null', () => {
      expect(toObjectId(null)).toBe(null);
    });

    it('should handle undefined', () => {
      expect(toObjectId(undefined)).toBe(undefined);
    });

    it('should handle number', () => {
      expect(toObjectId(100)).toBe(100);
    });

    it('should handle ObjectID', () => {
      expect(toObjectId('000000000000000000000000')).toEqual(
        ObjectID.createFromTime(0),
      );
    });
  });

  describe('canonicalizeUrl', () => {
    it('should handle null', () => {
      expect(canonicalizeUrl(null)).toBe(null);
    });

    it('should handle undefined', () => {
      expect(canonicalizeUrl(undefined)).toBe(undefined);
    });

    it('should prepend url', () => {
      expect(canonicalizeUrl('www.text')).toBe('https://www.text');
    });

    it('should not change url', () => {
      expect(canonicalizeUrl('http://www.text')).toBe('http://www.text');
    });
  });

  describe('typeFn', () => {
    it('should return an identity function', () => {
      const symbol = Symbol.for('identity');
      expect(typeFn(symbol)()).toEqual(symbol);
    });
  });

  describe('toInteger', () => {
    it('should return a parsed number', () => {
      expect(toInteger('123')).toBe(123);
    });
  });
});
