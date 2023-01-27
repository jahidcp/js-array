var myList = ['token', 'Coin', 'contract', 'ethereum', 'Bitcoin'];
console.log(myList)
// Length Of Array
console.log(myList.length)

var myFavoriteCoin = ['Polkadot', 'Ethereum', 'Binance', 'Doge'];
console.log(myFavoriteCoin)
console.log(myFavoriteCoin.length)
// Length Of Array

var myFavoriteExchange = ["Binance", "Kucoin", "Gate.io", "Bybit"];
console.log(myFavoriteExchange)
console.log(myFavoriteExchange.length)
// Length Of Array

var MyFavoriteToken = ["Safepal", "Polygon", "BUSD", "USDT", "USDC"];
console.log(MyFavoriteToken)
console.log(MyFavoriteToken.length)
// Length Of Array

// Indexing Of Array

var numberList = [56, 47, 329, 80, 156, 94, 37];
console.log(numberList[0]);
console.log(numberList[4]);

// manually Access of index with Store
var elementList = numberList[2];
console.log(elementList);

// Changing Index Value manually
numberList[3] = 576;
console.log(numberList)

// Find Index of an Element
var numberListFind = numberList.indexOf(1560)
console.log(numberListFind)

// Add index Value
numberList.push(1001)
console.log(numberList)

numberList.push(2001)
console.log(numberList)

console.log(numberList.indexOf(2001))
console.log(numberList.length)

// Index Value remove from pop Function
// Current Value
console.log(numberList)

// Updated Value when use pop function
numberList.pop();
console.log(numberList)

var numberElement = numberList.pop();
console.log(numberElement)