import { sum, mult } from './math';

describe('Test math functions', () => {

  describe('Test sum function', () => {
    it('sum with correctly values', () => {
      expect(sum(1,2)).toEqual(3);
      expect(sum(3,4)).toEqual(7);
    });

    it('sum with incorrectly values', () => {
      expect(sum(1,'asd')).toEqual(null);
      expect(sum(false,'asd')).toEqual(null);
    });
  });


  describe('Test mult functions', () =>{
    it('mult with correctly values', () =>{
      expect(mult(2,3)).toEqual(6);
      expect(mult(4,4)).toEqual(16);
    });
    it('mult with incorrectly values', ()=>{
      expect(mult(2,'awd')).toEqual(null);
      expect(mult('asd', true)).toEqual(null);
    });
  })
})



