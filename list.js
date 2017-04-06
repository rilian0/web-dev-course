var todos = [];

var input = prompt("Four choices - new, list, delete or quit");

while(input !== "quit") {
	if (input === "list") {
		listTodos();
	} if(input === "delete") {	
		deleteItem();
	} else if(input === "new") {
		addNew();
	}	
	//ask again for new input (new, list or quit)
	input = prompt("Four choices - new, list, delete or quit");
}

console.log("Thanks for using the app. Good night, sweet prince.")

function printContents(value, index) {
	console.log(index + ": " + value)
}

function listTodos(){
	console.log("**********");
		todos.forEach(printContents);
		console.log("**********");
}

function addNew(){
	var newTodo = prompt("Enter new to do item");
		todos.push(newTodo);
		console.log("Added item")
}

function deleteItem(){
	var deleteX = prompt("Enter the index of the item you'd like to remove");
		todos.splice(deleteX, 1)
}