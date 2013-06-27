window.bitShiftedNQueens = function(n){
  var curTotal = 0;
  var demo = [];
  var column = 1, backSlash = 1, frontSlash = 1, queenArray = [];
  // n-dim array construction for visualization
  // CAN DELETE
  for (var x = 0; x < n; x++){
    demo.push([]);
  }
  // placeholder
  var temp = 0;
  // column
  //debugger;
  for (var r = 0; r < n; r++){
    for (var c = 0; c < n; c++){
      // if col, \, / are all not blacklisted
      if ( !(column & Math.pow(2, c)) && !(backSlash & Math.pow(2, c)) && !(frontSlash & Math.pow(2, c))){
        queenArray[c] = r+1;
        column = column | c; // add column
        backSlash >>= 1;
        frontSlash <<= 1;
        break;
        // CAN DELETE
        // temp = Math.pow(2, (4 * r) + c);
        // curTotal += temp;
        // demo[r][c] = temp;
      } else {
        demo[r][c] = 'x';
      }
    }
    // backSlash = \
    backSlash >>= 1;
    // frontSlash = /
    frontSlash <<= 1;
  }
  console.log("queen", queenArray, "\nbackSlash", backSlash, "\nfrontSlash", frontSlash, "\ndemo", _.flatten(demo));
};
// var  = function(curTotal, n, r){
//   // if row+collision, return false
//   if ((r>0) && (curTotal & (curTotal >> n*r))) { return false; }
//   // else if r-1>0, recurse
//   else if ((r-1) > 0) { this.vertCon(curTotal, n, r-1); }
//   // else no collision
//   else { return true; }
// };
// /*
// c = cur val
// o = past val
// x = collision!
//  _ _ _ O
//  O _ _ _
//  _ _ _ X
//  _ _ N _
// */
// var diagPCon = function(curTotal, n, c, r){
//   // if c+r+positively-directed collision, return false
//   if (c>0 && r && (curTotal & (curTotal >> (n*(r)+(c))))) { return false; }
//   // else if r-1>0, c-1>0; recurse
//   else if (c-1 && r-1) { this.diagPCon(curTotal, n, c, r); }
//   // else no collision
//   else { return true; }
// };
// /*
// c = cur val
// o = past val
// x = collision!
//  _ _ _ O
//  X _ _ _
//  _ _ _ O
//  _ _ N _
// */
// var diagNCon = function(curTotal, n, c, r){
//   // if c <= n; r; negatively-directed collision, return false
//   if (c <= n && r && (curTotal & (curTotal >> (n*(r)-(c))))) { return false; }
//   // else if r-1>0, c+1<=n; recurse
//   else if (c+1<=n && r-1) { this.diagNCon(curTotal, n, c-1, r-1); }
//   else { return true; }
// };


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