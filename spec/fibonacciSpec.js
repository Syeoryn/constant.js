describe('fibonacci', function() {

   it('should return 0 when given 0 as an argument', function() {
      expect(fibonacci(0)).to.equal(0);
   });

   it('should return 1 when given 1 as an argument', function() {
      expect(fibonacci(1)).to.equal(1);
   });
});
