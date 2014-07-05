describe('google', function() {

   it('should return top search result for "MINIMUM K-SPANNING TREE"', function() {
      expect(google('MINIMUM K-SPANNING TREE')).to.equal('http://en.wikipedia.org/wiki/K-minimum_spanning_tree');
   });
});
