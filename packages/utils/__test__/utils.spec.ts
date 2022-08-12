import { convertHex } from "../convert-hex";
import { expect, test, describe } from 'vitest'

describe('Color Utilities', () => {
  describe('convertHex function', () => {
    test("Should alpha channels from hex", () => {
      expect(convertHex("#FF0000").rgba).toBe('rgba(255,0,0,255)');
    });
    test("Should assume alpha is 100%", () => {
      expect(convertHex('#000').a).toEqual(255)
    })
    test("Should convert to 16-bit from shorthand hex", () => {
      expect(convertHex('#f00').rgba).toEqual('rgba(255,0,0,255)')
    })
    test('Should pad #FFF to #FFFFFF', () => {
      expect(convertHex('#fff').hex).toEqual('#ffffffff')
    })
  })
})
