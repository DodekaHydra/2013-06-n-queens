window.bitShiftedNQueens = function(n){
  var output = 0;
  var demo = [];
  // n-dim array construction for visualization
  for (var x = 0; x < n; x++){
    demo.push([]);
  }
  var temp = 0;
  // row
  for (var r = 0; r < n; r++){
    // col
    for (var c = 0; c < n; c++){
      // if on diag . . . . . bin -> dec = 2^(array position)
      if (c === r) {
        temp = Math.pow(2, (4 * r) + c);
        output += temp;
        demo[r][c] = temp;
      } else {
        demo[r][c] = 'x';
      }
    }
  }
  console.log(output, "demo!\n", _.flatten(demo));
};

var factorial = function(n){
  if (n === 0 || n === 1) { return 1; }
  else {
    return factorial(n-1) * n;
  }
};

bitShiftedNQueens(4);