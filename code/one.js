// for(var i = 0; i < 10; i++){
//     // print4(i)
//     // console.log(Math.floor(Math.random()+1))
// }
function print2(n){
    setTimeout((() => {
        console.log(n);
        return ()=>{}
    }).apply(n), Math.floor(Math.random() * 1000));
}

function print_y(n){
    setTimeout(() => {
        console.log(n);
    }, Math.floor(Math.random() * 1000));
}
//
// function print1(n) {
//     setTimeout((() => {
//         console.log(n)
//     }).apply(this), Math.floor(Math.random() * 1000))
// }




function print(n){
    setTimeout((() => {
        console.log(n)
        return ()=>{}
    }).call(n,[]), Math.floor(Math.random() * 1000));
}


function print4(n) {
    setTimeout( (() => {
        console.log(n);
        return ()=>{
            console.log(n)
        }
    })(), Math.floor(Math.random() * 1000));
}
//

// function aaa(i) {
//     // i--
//     // console.log(23, i)
//     setTimeout(() => {
//         console.log(i)
//     }, 1000)
// }
// for (var i = 0; i < 10; i++) {
//     // aaa(i)
//     // console.log(2345, i)
//     setTimeout(() => {
//         console.log(i)
//     }, 1000)
// }
// // console.log(i)

// for (var i = 1; i <= 5; i++) {
//     setTimeout((function timer() {
//         console.log(i)
//         return () => {};
//     })(), 1000*i)
// }

for (var i = 1; i <= 5; i++) {
    (function () {
        setTimeout(function timer() {
            console.log(i)
        }, 1000*i)
    })()
}


// console.log(Math.floor(Math.random() * 1000))


// let b = 10;
// (function b(){
//     let b = 20;
//     console.log(b);
// })();

//
// let arr = [1, 2, [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]] ]
// arr = [...arr]
// console.log(arr)

// const flatten = function (arr) {
//     while (arr.some(item => Array.isArray(item))) {
//         console.log(arr,  1)
//         arr = [].concat(...arr)
//         console.log(arr,   2)
//     }
//     // return arr
// }

// flatten(arr)

// console.log(flatten(arr))



