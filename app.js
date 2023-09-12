// this is my function that sums two numbers
const sum = (a,b) => {
	return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum };

// one euro is:
let oneEuroIs = {
	"JPY": 127.9, // japan yen
	"USD": 1.2, // us dollar
	"GBP": 0.8, // british pound
}

console.log(oneEuroIs["JPY"])
console.log(oneEuroIs["USD"])
console.log(oneEuroIs["GBP"])

function fromDollarToYen(Dollar){
	yen = oneEuroIs["JPY"];
	usd = oneEuroIs["USD"];
	conversion = Dollar*(yen/usd);
	return conversion;
}

function fromEuroToDollar(Euro){
	usd = oneEuroIs["USD"];
	return Euro*usd;
}

function fromYenToPound(Yen){
	gbp = oneEuroIs["GBP"];
	jpy = oneEuroIs["JPY"];
	return Yen*(gbp/jpy);
}
