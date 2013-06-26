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
      // check +diag conflict: output >> #*3
      //       -diag conflict: output >> #*5
      //       horiz conflict: output >> #*1
      //        vert conflict: output >> #*4
      // vert > horiz > -diag > +diag
      if (output & output >> n || output & output >> ((2*n) - 1) || output & output >> ((3*n) - 1)) {
        // COLLISION!
      } else if (output & output >> c-1 || output & output >> c-2 || output & output >> c-3){
        // COLLISION!
      } /*else if (output & output >> (4*(r-1)+(c-1)) || output & output >> (4*(r-2)+(c-2)) || output & output >> (4*(r-3)+(c-3))){
        // COLLISION!
      } else if (output & output >> (4*(r-1)-(c-1)) || output & output >> (4*(r-2)-(c-2)) || output & output >> (4*(r-3)-(c-3))){
        // COLLISION!
      } */else {
        // assign bin val of cur pos
        // bin -> dec = 2^(array position)
        temp = Math.pow(2, (4 * r) + c);
        output += temp;
        demo[r][c] = temp;
      }
      if (!temp) {
        demo[r][c] = 'x';
      }
      temp = 0;
    }
  }
  console.log(output, "demo!\n", _.flatten(demo));
};

// window.depthSearch = function(){
//   var rootNode = structure.getRoot();
//   var preOrder = new Array();
//   var postOrder = new Array();
//   function DepthFirst( rootNode ){
//     preOrder[ preOrder.length ] = rootNode;

//     for( var child in rootNode ){
//       DepthFirst( child );
//     }

//     postOrder[ postOrder.length ] = rootNode;
//   }
// };

var factorial = function(n){
  if (n === 0 || n === 1) { return 1; }
  else {
    return factorial(n-1) * n;
  }
};

bitShiftedNQueens(4);