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

const fromEuroToDollar = function(valueInEuro){
	let valueInDollar = valueInEuro * 1.2;
	return valueInDollar;
}
console.log("Euro to Dollar: ",fromEuroToDollar(1));


const fromDollarToYen= function(valueInDollar){
	let valueInYen=valueInDollar*(127.9/1.2);
	return valueInYen;
}
console.log("Dollar to Yen :", fromDollarToYen(1));


const fromYenToPound= function(valueInYen){
	let valueInPound=valueInYen*(0.8/127.9);
	return valueInPound;
}
console.log("Yen to Pound :",fromYenToPound(1));
