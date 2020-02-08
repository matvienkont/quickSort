//Quick sort

const quickSort = (array: number[]): number[] => {
	console.log(array);
	divisionAlgorithm(array, 0, array.length - 1);

	console.log(array);
	return array;
};

const divisionAlgorithm = (array: number[], left: number, right: number): number[] => {
	var pivot: number = Math.floor((left + right) / 2);
	var arrayLength: number = right;

	swap(array, pivot, arrayLength);
	pivot = arrayLength;

	let i: number = left;
	let k: number = right - 1;
	let leftBoundaryIndex: number = 0;
	let rightBoundaryIndex: number = 0;

	while (i <= k) {
		for (i; i <= pivot; i++) {
			if (array[i] >= array[pivot]) {
				leftBoundaryIndex = i;
				break;
			}
		}
		for (k; k >= 0; k--) {
			if (k < i) {
				if (left == 2 && right == 5) {
				}
				rightBoundaryIndex = i;
				break;
			} else if (array[k] < array[pivot]) {
				rightBoundaryIndex = k;
				break;
			}
		}

		if (leftBoundaryIndex == rightBoundaryIndex) {
			swap(array, leftBoundaryIndex, pivot);
			pivot = leftBoundaryIndex;
		} else if (array[leftBoundaryIndex] > array[rightBoundaryIndex]) {
			swap(array, leftBoundaryIndex, rightBoundaryIndex);
		}
	}

	if (pivot - 1 > left) divisionAlgorithm(array, left, pivot - 1);
	if (pivot < right) divisionAlgorithm(array, pivot + 1, right);

	return array;
};

const swap = (array: number[], i: number, j: number): void => {
	var temp = array[i];
	array[i] = array[j];
	array[j] = temp;
};

var arr = [];
for (let i = 0; i < 2; i++) {
	arr[i] = Math.floor(Math.random() * 42);
}

quickSort(arr);
