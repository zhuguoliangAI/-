console.log(add(1,2));
console.log(sub(5,3));
function add(a1,a2){
    return a1+a2;
}
var sub = function(a1,a2){
    return a1-a2;
}




var a = 2;
(function foo() {
    // console.log(foo())
    var a = 3;
    console.log( a );
})();
console.log( a );
