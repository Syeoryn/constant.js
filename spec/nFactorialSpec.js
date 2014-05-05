describe('nFactorial', function() {

   it('should return 1 when given 0 as an argument', function() {
      expect(nFactorial(0)).to.equal(1);
   });

   it('should return 1 when given 1 as an argument', function() {
      expect(nFactorial(1)).to.equal(1);
   });

   it('should return 2 when given 2 as an argument', function() {
      expect(nFactorial(2)).to.equal(2);
   });

   it('should return 6 when given 3 as an argument', function() {
      expect(nFactorial(3)).to.equal(6);
   });

   it('should return 24 when given 4 as an argument', function() {
      expect(nFactorial(4)).to.equal(24);
   });

   it('should return 120 when given 5 as an argument', function() {
      expect(nFactorial(5)).to.equal(120);
   });

   it('should return 720 when given 6 as an argument', function() {
      expect(nFactorial(6)).to.equal(720);
   });

   it('should return 4032 when given 8 as an argument', function() {
      expect(nFactorial(8)).to.equal(4032);
   });

   it('should return 362880 when given 9 as an argument', function() {
      expect(nFactorial(9)).to.equal(362880);
   });

   it('should return 3628800 when given 10 as an argument', function() {
      expect(nFactorial(10)).to.equal(3628800);
   });

   it('should return 39916800 when given 11 as an argument', function() {
      expect(nFactorial(11)).to.equal(39916800);
   });

   it('should return 479001600 when given 12 as an argument', function() {
      expect(nFactorial(12)).to.equal(479001600);
   });

   it('should return 6227020800 when given 13 as an argument', function() {
      expect(nFactorial(13)).to.equal(6227020800);
   });

   it('should return 87178291200 when given 14 as an argument', function() {
      expect(nFactorial(14)).to.equal(87178291200);
   });

   it('should return 1307674368000 when given 15 as an argument', function() {
      expect(nFactorial(15)).to.equal(1307674368000);
   });

   it('should return 20922789888000 when given 16 as an argument', function() {
      expect(nFactorial(16)).to.equal(20922789888000);
   });

   it('should return 355687428096000 when given 17 as an argument', function() {
      expect(nFactorial(17)).to.equal(355687428096000);
   });

   it('should return 6402373705728000 when given 18 as an argument', function() {
      expect(nFactorial(18)).to.equal(6402373705728000);
   });

   it('should return 121645100408832000 when given 19 as an argument', function() {
      expect(nFactorial(19)).to.equal(121645100408832000);
   });

   it('should return 2432902008176640000 when given 20 as an argument', function() {
      expect(nFactorial(20)).to.equal(2432902008176640000);
   });

});

describe('nFactorials', function() {
});