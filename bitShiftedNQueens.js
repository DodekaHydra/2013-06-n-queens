window.bitShiftedNQueens = function(n){
  var curTotal = 0;
  var demo = [];
  var column = 0, backward = 0, forward = 0, queenArray = [];

  //debugger;
  for (var r = 0; r < n; r++){
    // if not first row, shift \ & /

    for (var c = 0; c < n; c++){
      // if col, \, / are all not blacklisted
      if ( !(column & Math.pow(2, c)) && !(backward & Math.pow(2, c)) && !(forward & Math.pow(2, c))){
        queenArray[c] = r+1;
        column += Math.pow(2,c); // add column
        backward += Math.pow(2,c);
        forward += Math.pow(2,c);
        console.log("R:",r,"\tQ:",queenArray,"\tC:",column,"\tB:",backward,"\tF:",forward);
        break;
      }
    }
    if (_.contains(queenArray,r)){
      backward >>= 1;
      forward <<= 1;
    } else {
      // Swapping happens here.
    }
  }
  console.log("queen", queenArray, "\nbackward", backward, "\nforward", forward, "\ndemo", _.flatten(demo));
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

bitShiftedNQueens(4);