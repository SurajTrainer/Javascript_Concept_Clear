// Recursion Practice

function suraj() {
    return neha()
}
function neha() {
    return anil()
}
function anil() {
    return ankita()
}
function ankita() {
    return ravi()
}
function ravi() { // base case
    return true;
}
// console.log(suraj());

function gotoshop(bat) {
    // console.log('heeeee');
    if (bat === 1000) {
        return true;
    }
    // console.log(bat);
    return gotoshop(bat+200)
}
// console.log('finally' , gotoshop(200));

// another example 
// function processWalk(shooes) {
//     // 1) base case
//     if (fount the good shooes) {
//         return 'ye ye '
//     }
//     // 2) Recursive call to itself
//     else if(there are not other shoes)
//     return 'no shooes here';
//     else 
//     processWalk('will manage with it');
// }

// factorial 
// 4!
// 4 * 3 * 2 * 1
// 24

function factorial(n) {
    if (n == 1) {
        return 1;
    }else{
        return n * factorial(n-1);
    }
}
console.log(factorial(6));

// n * factorial(n-1); in details
// factorial(4)
//     4 * factorial(3)  // 12
//         12 * factorial(2)  // 24
//             24 * factorial(1)  // 24  ans is 24 
            // 4 * 3 * 2 * 1 