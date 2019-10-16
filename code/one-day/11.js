// 已知如下数组：
// var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

// 最简单
// Array.from(new Set([[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10].flat(100))).sort((a,b) => {
//   return a-b;
// });


// 另外一种
var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
while (arr.some(item => Array.isArray(item))) {
  arr = [].concat(...arr);
}
var result = Array.from(new Set(arr)).sort((a, b) => a-b);
console.log(result);
