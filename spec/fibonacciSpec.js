describe('fibonacci', function() {

   it('should return 0 when given 0 as an argument', function() {
      expect(fibonacci(0)).to.equal(0);
   });

   it('should return 1 when given 1 as an argument', function() {
      expect(fibonacci(1)).to.equal(1);
   });

   var fn_2 = 0
   var fn_1 = 1;
   for (var i = 2; i < 89; i++) {
     var fn = fn_1 + fn_2;
     it('should return ' + fn + ' when given ' + i + ' as an argument',
       function() {
         var _fn = fn
         var _i = i;
         return function() {
           expect(fibonacci(_i)).to.equal(_fn);
         };
       }()
     );
     fn_2 = fn_1;
     fn_1 = fn;
   }
});
