function max_sub_arr(k,array) {
	
	let we = 0
	let ws = 0
	let sum = 0
	let maxSum = 0
		
	for(we=0;we<array.length;we++) {

		sum += array[we]

		if(we >= k-1) {
			
			maxSum = Math.max(maxSum, sum)

			sum -= array[ws]

			ws++

		}

	}

	console.log(maxSum)

	return maxSum 

}

max_sub_arr(3, [2,1,5,1,1,2])