window.bitShiftedNQueens = function(n){
  var curTotal = 0;
  var flag = [], r = 1;
  var column = 0, backward = 0, forward = 0, qArray = [], solutions=0;

  //debugger;
  var rowSpace = function(r){
    //debugger;
    for (r; r <= n; r++){
      // if not first row, shift \ & /
      var c = 0;
      for (c; c < n; c++){
        // if col, \, / are all not blacklisted
        if ((flag !== c) && !(column & Math.pow(2, c)) && !(backward & Math.pow(2, c)) && !(forward & Math.pow(2, c))){
          qArray[c] = r;
          column += Math.pow(2,c); // add column
          backward += Math.pow(2,c);
          forward += Math.pow(2,c);
          console.log("R:",r,"\tQ:",qArray,"\tC:",column,"\tB:",backward,"\tF:",forward);
          break;
        }
      }
      // if row was assigned, shift bits
      if (_.contains(qArray, r)){
        backward >>= 1;
        forward <<= 1;
        flag = -1;
      // else if row not assigned, swap
      } else {
        //debugger;
        r--;
        flag = _.indexOf(qArray, r); // find wrong index of previous row
        qArray[flag] = 0;
        backward <<= 1;
        forward >>= 1;
        rowSpace(r);
      }
      //flag = [];
    }
    console.log("queen", qArray, "\nbackward", backward, "\nforward", forward);
  };
  rowSpace(r);
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