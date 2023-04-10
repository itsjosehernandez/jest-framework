// const {fromDollarToYen,fromEuroToDollar,fromYenToPound} = require("./app");


// test('adds 14 + 9 to equal 23', () => {
//     let total = sum(14, 9);
//     expect(total).toBe(23);
//     });


// console.log(fromDollarToYen, fromEuroToDollar, fromYenToPound)

test("One euro should be 1.206 dollars", function(){
     //importo la funcion desde app.js
    const {fromEuroToDollar} = require('./app.js')
        
    //   hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2) })


