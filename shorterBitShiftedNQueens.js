NQ = function(n, r, backward, column, forward){
  var solutions = 0;
    for (var c = 1; c < 1 << n; c*=2){
      if (!((column | backward | forward) & c))
        return r+1 < n ? NQ(n, r+1, backward + c >> 1, column + c, forward + c << 1) : 1
    }
  return solutions
}
for (var i = 0; i < 18; i++){
  var before = new Date();
  NQ(i);
  var after = new Date();
  console.log(i,": ",after-before,"ms");
}