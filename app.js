let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}


const fromEuroToJPY = function (valueInEuro) {

    let valueInJPY = valueInEuro * 156.5;

    return valueInJPY;
}


const fromEuroToGBP = function (valueInEuro) {

    let valueInGBP = valueInEuro * 0.87;

    return valueInGBP;
}

// Ejercicio

const fromYanToPound = function (valueInYen) {
    let valueInPound = valueInYen / 156.5 * 0.87;
    return valueInPound;
}

const fromDollarToYen = function (valueInDollar) {
    let valueInYen = valueInDollar * 156.5 / 1.07;
    return valueInYen;
}

// Esta es mi función que suma dos números
const sum = (a, b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7, 3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromEuroToGBP, fromEuroToJPY, fromDollarToYen, fromYanToPound }