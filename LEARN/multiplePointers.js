function checkUniqueValues(list) {
	if (list.length == 0) return 0;
	
	if (list.length == 1) return 1;

	let left = 0;
	let right = 1;
	while (right < list.length) {
		if (list[left] == list[right]) {
			right++;
		}
		else {
			left++;
			list[left] = list[right];
			right++;
		}
	}

	return left + 1
}


console.log(checkUniqueValues([1,1,2,2,2,2,2,3,4,5,5,6]));
console.log(checkUniqueValues([]));