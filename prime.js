// // prime number

// function primeNumber(n) {
//     if (n < 2) {
//         return false;
//     }
//     for (let i = 2; i < n; i++) {
//         if (n % i === 0) {
//             return false;
//         }
//         return true;        
//     }
// }
//  console.log(primeNumber(1));
//  console.log(primeNumber(5));
//  console.log(primeNumber(4));
//  console.log(primeNumber(7));

function makeFunc() {
    const name = 'Mozilla';
    function displayName(){
        console.log(name);
    }
    return displayName;
}
const myFunc = makeFunc();
        myFunc()
