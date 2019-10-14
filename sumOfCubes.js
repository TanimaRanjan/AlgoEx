function sumOfCubes(nums) {
	return nums.reduce((p,c) => p + Math.pow(c, 3), 0);
}

function sumOfCubes(nums) {
	let total = 0
	for(let i=0;i<nums.length;i++) {
		total += Math.pow(nums[i], 3)
	}
	return total
}

function sumOfCubes(nums) {
	return (nums.length == 0) ? 0 : nums.map(x => Math.pow(x,3)).reduce((acc, cur) => acc + cur)
}