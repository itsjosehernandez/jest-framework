const {fromDollarToYen,fromEuroToDollar, fromYenToPound} = require("./app");

 console.log(fromDollarToYen, fromEuroToDollar, fromYenToPound)

 test("Dolar a Yenes", () => {
  expect(fromDollarToYen(3.5)).toBe(370.4166666666667)});


test("Euro a dolar", () => {
  expect(fromEuroToDollar(3.5)).toBe(4.2) });



  test("Yenes a Libras esterlinas", () => {
// //       //   hago mi comparacion (la prueba)
    expect(fromYenToPound(3.5)).toBe( 0.0218921032056294) });

