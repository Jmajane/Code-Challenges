nums = [1,2,3,1]

var containsDuplicate = function(nums) {
    let newHash = new Map()
// create instance of a map
    for ( let i = 0; i < nums.length; i++) {
        // check if there is already a hashmap present for this key
        if (newHash.has(nums[i])) {
            return true
        } else {
            newHash.set(nums[i],i)
        }
    }
    return false
};