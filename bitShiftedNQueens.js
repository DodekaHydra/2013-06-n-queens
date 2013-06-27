window.bitShiftedNQueens = function(n){
  var curTotal = 0;
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
      debugger;
      if (horCon(curTotal, c) && vertCon(curTotal, n, r) /*&& diagPCon(curTotal, n, c, r) && diagNCon(curTotal, n, c, r)*/){
        // assign bin val of cur pos
        // bin -> dec = 2^(array position)
        temp = Math.pow(2, (4 * r) + c);
        curTotal += temp;
        demo[r][c] = temp;
      } else {
        demo[r][c] = 'x';
      }
    }
  }
  console.log(curTotal, "demo!\n", _.flatten(demo));
};
var horCon = function(curTotal, c){
  // debugger;
  // if col+collision, return false
  if (c>0 && (curTotal & (curTotal >> c))) { return false; }
  // else if c-1>0, recurse
  else if ((c-1) > 0) { this.horCon(curTotal, c-1); }
  // else no collision
  else { return true; }
};
var vertCon = function(curTotal, n, r){
  // if row+collision, return false
  if ((r>0) && (curTotal & (curTotal >> n*r))) { return false; }
  // else if r-1>0, recurse
  else if ((r-1) > 0) { this.vertCon(curTotal, n, r-1); }
  // else no collision
  else { return true; }
};
/*
c = cur val
o = past val
x = collision!
 _ _ _ O
 O _ _ _
 _ _ _ X
 _ _ N _
*/
var diagPCon = function(curTotal, n, c, r){
  // if c+r+positively-directed collision, return false
  if (c>0 && r && (curTotal & (curTotal >> (n*(r)+(c))))) { return false; }
  // else if r-1>0, c-1>0; recurse
  else if (c-1 && r-1) { this.diagPCon(curTotal, n, c, r); }
  // else no collision
  else { return true; }
};
/*
c = cur val
o = past val
x = collision!
 _ _ _ O
 X _ _ _
 _ _ _ O
 _ _ N _
*/
var diagNCon = function(curTotal, n, c, r){
  // if c <= n; r; negatively-directed collision, return false
  if (c <= n && r && (curTotal & (curTotal >> (n*(r)-(c))))) { return false; }
  // else if r-1>0, c+1<=n; recurse
  else if (c+1<=n && r-1) { this.diagNCon(curTotal, n, c-1, r-1); }
  else { return true; }
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