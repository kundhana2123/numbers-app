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
function getNumbers(a, b) {
    return parseInt(a) + parseInt(b);
}

function subtractNumbers(a, b) {
    console.log(parseInt(a) - parseInt(b));
    return parseInt(a) - parseInt(b);
}

module.exports = {
    getNumbers: getNumbers,
    subtractNumbers: subtractNumbers
};
