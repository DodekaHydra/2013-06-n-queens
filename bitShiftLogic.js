window.horCon = function(curTotal, c){
  // if col+collision, return false
  if (c && curTotal & (curTotal >> c)) { return false; }
  // else if c-1>0, recurse
  else if (c-1) { horCon(c-1); }
  // else no collision
  else { return true; }
};
var vertCon = function(curTotal, n, r){
  // if row+collision, return false
  if (r && curTotal & (curTotal >> n*r)) { return false; }
  // else if r-1>0, recurse
  else if (r-1) { vertCon(r-1); }
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
  if (c && r && (curTotal & (curTotal >> (n*(r)+(c))))) { return false; }
  // else if r-1>0, c-1>0; recurse
  else if (c-1 && r-1) { diagPCon(curTotal, n, c, r); }
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
  else if (c+1<=n && r-1) { diagNCon(curTotal, n, c-1, r-1); }
  else { return true; }
};

// check +diag conflict: curTotal >> #*3
//       -diag conflict: curTotal >> #*5
//       horiz conflict: curTotal >> #*1
//        vert conflict: curTotal >> #*4
// vert > horiz > -diag > +diag
//if (curTotal & (curTotal >> n) || curTotal & (curTotal >> ((2*n) - 1)) || curTotal & (curTotal >> ((3*n) - 1))) {
  // COLLISION!
//} else if (curTotal & (curTotal >> (c-1)) || curTotal & (curTotal >> (c-2)) || curTotal & (curTotal >> (c-3))){
  // COLLISION!
//} /*else if (curTotal & (curTotal >> (4*(r-1)+(c-1))) || curTotal & (curTotal >> (4*(r-2)+(c-2))) || curTotal & (curTotal >> (4*(r-3)+(c-3)))){
  // COLLISION!
//} else if (curTotal & (curTotal >> (4*(r-1)-(c-1))) || curTotal & (curTotal >> (4*(r-2)-(c-2))) || curTotal & (curTotal >> (4*(r-3)-(c-3)))){
  // COLLISION!