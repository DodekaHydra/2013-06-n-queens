window.bitShiftedNQueens = function(n){
  var curTotal = 0;
  var flag = [], r = 1;
  var column = 0, backward = 0, forward = 0, qArray = [], solutions = 0;
  // set up collision space
  for (var x = 0; x < n; x++){
    //flag.push([]);
    qArray[x]=0;
  }
  //debugger;
  var rowSpace = function(r, backward, forward, column){
  //debugger;
    // if not first row, shift \ & /
    for (var c = 1; c <= n; c++){
      // if col, \, / are all not blacklisted
      var binIndex = Math.pow(2, c);
      if (!(column & binIndex) && !(backward & binIndex) && !(forward & binIndex)){
        qArray[r] = c;
        column += binIndex; // add column
        backward += binIndex;
        forward += binIndex;
        console.log("R:",r,"\tQ:",qArray,"\tC:",column,"\tB:",backward,"\tF:",forward);
        r++;
        if (_.contains(qArray, 0)){
          var newBackward = (backward >> 1);
          var newForward = (forward << 1);
          var newColumn = column;
          rowSpace(r, newBackward, newForward, newColumn);
        } else {
          solutions++;
        }
        // if row was assigned, shift bits
        // if (_.contains(qArray, r)){
        //   backward >>= 1;
        //   forward <<= 1;
        // // else if row not assigned, swap
        // } else if (r > 1){
          //console.log("R:",r,"\tF:",flag);
        qArray[r] = 0;
        r--;
        //backward <<= 1;
        //forward >>= 1;
        backward -= binIndex; // unshift
        forward -= binIndex; // unshift
        column -= binIndex;
        //rowSpace(r);
      }
    }
    //console.log("solutions", solutions,"\tqueen", qArray, "\tback", backward, "\tfor", forward);
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