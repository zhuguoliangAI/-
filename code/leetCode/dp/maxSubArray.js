/**
 * @param {number[]} nums
 * @return {number}
 * [-2,1,-3,4,-1,2,1,-5,4]
 */
function getMax (arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

// var maxSubArray = function(nums) {
//   let sumAllArr = [];
//   let tempSum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     tempSum = 0;
//     for (let j = i; j < nums.length; j++) {
//       tempSum += nums[j];
//       sumAllArr.push(tempSum);
//     }
//   }
// };

/**
 * @param {number[]} nums
 * @return {number}
 * [1, -1, 2]
 */
// var maxSubArray = function(nums) {
//   let tempSum = nums[0];
//   let resSum = tempSum;
//   for (let i = 1; i < nums.length; i++) {
//     if (tempSum + nums[i] > nums[i]) {
//       resSum = Math.max(resSum, tempSum + nums[i]);
//       tempSum += nums[i];
//     } else {
//       resSum = Math.max(resSum, tempSum, nums[i], tempSum + nums[i]);
//       tempSum = nums[i];
//     }
//   }
//   console.log(resSum);
// };

// Kadane算法扫描一次整个数列的所有数值，
// 在每一个扫描点计算以该点数值为结束点的子数列的最大和（正数和）。
// 该子数列由两部分组成：以前一个位置为结束点的最大子数列、该位置的数值。
// 因为该算法用到了“最佳子结构”（以每个位置为终点的最大子数列都是基于其前一位置的最大子数列计算得出,
// 该算法可看成动态规划的一个例子。
// 状态转移方程：sum[i] = max{sum[i-1]+a[i],a[i]}
// 其中(sum[i]记录以a[i]为子序列末端的最大序子列连续和)

function  maxSubArray2  ( nums ) {
  // 在每一个扫描点计算以该点数值为结束点的子数列的最大和（正数和）。
  let max_ending_here = nums[0];
  let max_so_far = nums[0];

  for (let i = 1; i < nums.length; i++ ) {
    // 以每个位置为终点的最大子数列 都是基于其前一位置的最大子数列计算得出,
    max_ending_here = Math.max ( nums[i], max_ending_here + nums[i]);
    max_so_far = Math.max ( max_so_far, max_ending_here);
  }
  console.log(max_so_far);
  return max_so_far;
}


maxSubArray2([4, -1, 2, 1]);

