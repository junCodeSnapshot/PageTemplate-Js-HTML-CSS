nums = [-1,0,3,5,9,12]
target = 9

function search(nums, target) {
    let left = 0,
        right = nums.length,
        middle = 0
    console.log(middle, left, right, target) // Verification
    while(left <= right){
        middle = parseInt(left + (right - left) /2)
        console.log(middle)
        if(nums[middle] == target){
            return middle
        }
        if(nums[middle] > target){
            right = middle -1
        }
        else left = middle +1
    }
    return -1

}
console.log(search(nums, target))