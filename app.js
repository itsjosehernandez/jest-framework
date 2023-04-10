


function fromDollarToYen(dollars) {

    return (dollars/1.2)*127

}


function fromEuroToDollar (Euro) {
    
    return Euro*1.2
    
}


function fromYenToPound(Yenes) {

    return (Yenes/127.9)*0.8
    
}
 

// let oneEuroIs = {
//     "JPY": 127.9, // japan yen
//     "USD": 1.2, // us dollar
//     "GBP": 0.8, // british pound
// }


module.exports = { 
    
    fromDollarToYen: fromDollarToYen, 
    fromEuroToDollar: fromEuroToDollar,
    fromYenToPound: fromYenToPound

};


