// var numbers = [1, 2, 3, 4];

// var letters = ["a", "b", "c", "d"];

// function printReverse(array){
// 	for (var x = array.length; x >= 0; i--) {
// 		console.log(array[x];)
// 	}
// }

//////

function sameValues(array) {
	for (var x = 1; x < array.length; x++) {
		if(array[x] !== array[0]) {
			return false;
		}	
	}return true;
}