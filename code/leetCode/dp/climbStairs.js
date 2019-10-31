// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
//
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
//
// 注意：给定 n 是一个正整数。
//
// 示例 1：
//
// 输入： 2
// 输出： 2
// 解释： 有两种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶
// 2.  2 阶
// 示例 2：
//
// 输入： 3
// 输出： 3
// 解释： 有三种方法可以爬到楼顶。
// 1.  1 阶 + 1 阶 + 1 阶
// 2.  1 阶 + 2 阶
// 3.  2 阶 + 1 阶


// 局部最优解的方法思考
// 考虑n阶的方式共有：
// 1、n-1的方式 在向上爬一阶
// 2、n-2的方式 在向上爬2步
// 也就是 sum(n) = sum(n-1) + sum(n-2);


/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n === 1) {
    return 1;
  }
  let first = 1;
  let second = 2;
  let third;
  for (let i = 3; i <= n; i++) {
    third = first + second;
    first = second;
    second = third;
  }
  return second
};

climbStairs(5);
