// global and local scope
// CURLY BRACES ARE SCOPES
// var b = 400
 const c = 900
let a = 400
if(true){
    let a = 100
     b = 30
    const c = 50
    console.log("INNER: ",c);
    // local scope hay ye
    console.log("INNER: ",a);
}



console.log(a);
// console.log(b);
console.log(c);
// var wla  show hoga, thats y ppl avoid var as it creates confusion jo b ap var within curly braces declare karo gay wo same rahay ga chaahay bahr ap jo b value do to creates debugging impossible
