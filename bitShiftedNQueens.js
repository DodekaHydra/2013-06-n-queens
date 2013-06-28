window.bitShiftedNQueens = function(n){
  var solutions = 0;
  var rowSpace = function(r, backward, column, forward){
    for (var c = 0; c < n; c++){
      var placement = Math.pow(2,c);
      var conflicts = (column | backward | forward);
      if (!(conflicts & placement)) {
        if (r+1 < n){
          rowSpace(r+1, (backward + placement) >> 1, column + placement, (forward + placement) << 1);
        } else {
          solutions++;
        }
      }
    }
  };
  rowSpace(0, 0, 0, 0);
  console.log(solutions);
};



// // window.depthSearch = function(){
// //   var rootNode = structure.getRoot();
// //   var preOrder = new Array();
// //   var postOrder = new Array();
// //   function DepthFirst( rootNode ){
// //     preOrder[ preOrder.length ] = rootNode;

// //     for( var child in rootNode ){
// //       DepthFirst( child );
// //     }

// //     postOrder[ postOrder.length ] = rootNode;
// //   }
// // };

// var factorial = function(n){
//   if (n === 0 || n === 1) { return 1; }
//   else {
//     return factorial(n-1) * n;
//   }
// };
