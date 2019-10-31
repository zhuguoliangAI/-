// 给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
//
// 你可以假设数组是非空的，并且给定的数组总是存在众数。
//
// 示例 1:
//
// 输入: [3,2,3]
// 输出: 3
// 示例 2:
//
// 输入: [2,2,1,1,1,2,2]
// 输出: 2



/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let obj = {};
  let res = -1;
  let resIndex;
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]]++;
    } else {
      obj[nums[i]] = 1;
    }
  }
  Object.keys(obj).forEach(key => {
    if (obj[key] > res) {
      res = obj[key];
      resIndex = key;
    }
  });
  return resIndex;
};

majorityElement([3, 3, 4]);
