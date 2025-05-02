let ran=Math.random();
let first,second,third;
if(ran<0.33){
     first="crazy";
}
else if(ran<0.66 && ran>=0.33){
     first="amazing";
}
else{
     first="fire";
}
 ran=Math.random();
if(ran<0.33){
     second="engine";
}
else if(ran<0.66 && ran>=0.33){
     second="food";
}
else{
     second="garment";
}
 ran=Math.random();
if(ran<0.33){
     third="bros";
}
else if(ran<0.66 && ran>=0.33){
     third="limited";
}
else{
     third="hub";
}
console.log(`${first} ${second} ${third}`);