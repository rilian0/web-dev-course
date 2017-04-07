var numbers = [1, 2, 3, 4];

var letters = ["a", "b", "c", "d"];

//printReverse - Ryan's answer
function printReverse(array){
	for (var x = array.length; x >= 0; x--) {
		console.log(array[x]);
	}
}

//////printReverse - Colt's answer
function printReverse(array){
	for (var x = array.length-1; x >= 0; x--) {
		console.log(array[x]);
	}
}

//////isUniform - Ryan's answer

function isUniform(array) {
	for (var x = 1; x < array.length; x++) {
		if(array[x] !== array[0]) {
			return false;
		}	
	} return true;
}

//////isUniform - Colt's answer

function isUniform(array){
	var first = array[0];
	for (var i = 1; i < array.length; i++){
		if (array[i] !== first) {
			return false;
		}
	}return true;
}

//sumArray - Ryan's answer

function sumArray(array) {
	var total = 0
	for (var x = 0; x < array.length; x++){
		total += array[x];
	}
	console.log(total);
}

//////sumArray - Colt's answer

function sumArray(array) {
	var total = 0
	array.forEach(function(element) {
		total += element;
	});
	return total;
}

//////max - Ryan's answers

function max(array) {
	for (var x = 0; x < array.length; x++){
		return Math.max(array)
	}

}
//////OR THIS TOO:

function max(array) {
	var y = 0
	for (var x = 0; x < array.length; x++){
		if (y < array[x]){
			y = array[x];
		}
	}
	console.log(y);
}

//////max - Colt's answer

function max(arr){
	var max = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}