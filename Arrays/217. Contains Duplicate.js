const containsDuplicate = (nums) => {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (!obj[nums[i]]) {
            obj[nums[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
};