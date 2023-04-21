// 四个地方出错，
// 1、l和r是索引
// 2、while条件循环是true <= 是考虑到只有单个的情况
// 3、mid = Math.floor(向下取整)l + (r - l)/2 === l + r/2.不是减法
// left = mid + 1;right - 1
function search(nums, target) {
    // 二分查找 左右指针(题目已经是一个升序) 
    let l = 0
    let r = nums.length - 1
    while(l <= r){
        let mid = Math.floor((r + l)/2)
        if(nums[mid] > target){
            r = mid - 1
        }else if(nums[mid] < target){
            l = mid + 1
        }else {
            return mid
        }
    }
    return -1
};