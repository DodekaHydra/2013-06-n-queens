window.bitShiftedNQueens = function(n){
  var curTotal = 0;
  var flag = [], r = 1;
  var column = 0, backward = 0, forward = 0, qArray = [], solutions=0;
  // set up collision space
  for (var x = 0; x < n; x++){
    flag.push([]);
    qArray[x]=0;
  }
  //debugger;
  var rowSpace = function(r){
    //debugger;
    if (r<1){r=1;}
    for (r; r <= n; r++){
      // if not first row, shift \ & /
      for (var c = 0; c < n; c++){
        // if col, \, / are all not blacklisted
        if (!(_.contains(flag[r], c)) && !(column & Math.pow(2, c)) && !(backward & Math.pow(2, c)) && !(forward & Math.pow(2, c))){
          qArray[c] = r;
          column += Math.pow(2,c); // add column
          backward += Math.pow(2,c);
          forward += Math.pow(2,c);
          console.log("R:",r,"\tF:",flag,"\tQ:",qArray,"\tC:",column,"\tB:",backward,"\tF:",forward);
          break;
        }
      }
      // if row was assigned, shift bits
      if (_.contains(qArray, r)){
        backward >>= 1;
        forward <<= 1;
        //flag = -1;
      // else if row not assigned, swap
      } else if (r > 1){
        console.log("R:",r,"\tF:",flag);
        flag[r] = []; // destroy broken descendants
        r--; // reduce row
        var temp = _.indexOf(qArray, r);
        flag[[r][temp]] = temp; // find index of queen in previous row
        qArray[ temp ] = 0; // reset queen
        backward <<= 1; // unshift
        forward >>= 1; // unshift
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