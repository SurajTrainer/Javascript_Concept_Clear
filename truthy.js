// truthy value

// let userEmail = "@hsurya";
// let userEmail = "";
// let userEmail = []

// if (userEmail) {
//     console.log('you got email');
// }else{
//     console.log(`you don't have any gmail`);
// }

let userEmail = []

if (userEmail.length === 0) {
    // console.log('arr is empty');
}

let emptyObj = {}

// first we change object into array
if (Object.keys(emptyObj).length === 0) {
    // console.log('object is empty');
}

// falsy values
// false, 0 , -0,  BigInt 0n, "", null ,  undefined , NaN

// truthy values
// "0", "false", " " ,  [], {}, function(){}    


// Nullish coalescing  Operator (??) : null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15   
// val1 = null ?? 12 ?? 20

// Terniary operator

// condition ? true : false;
let icecreaprice = 100
// icecreaprice <= 50 ? console.log('under 50 price') : console.log('over 50 ');

