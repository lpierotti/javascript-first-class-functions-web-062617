function receivesAFunction(callback) {
	callback();
}

function returnsANamedFunction() {
	return function hi(){console.log("hi")};
}

function returnsAnAnonymousFunction() {
	return function(){ console.log("hi")};
}