// function getNumbers(a,b) {
//     return parseInt(a)+parseInt(b);
//     }

// function subtractNumbers(a,b) {
//     console.log( (parseInt(a)-parseInt(b)))
//         return  (parseInt(a)-parseInt(b));
//         }
// module.exports= { method:getNumbers() ,
// othermethod: subtractNumbers() ,
//  };
export function getNumbers(a, b) {
    return parseInt(a) + parseInt(b);
}

export function subtractNumbers(a, b) {
    console.log(parseInt(a) - parseInt(b));
    return parseInt(a) - parseInt(b);
}

// module.exports = {
//     method: getNumbers,
//     othermethod: subtractNumbers
// };