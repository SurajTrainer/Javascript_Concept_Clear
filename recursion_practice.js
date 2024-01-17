// Recursion Practice

    // Recursion in javascript
// what is recursion
// recursion is a process of calling itself.
// a function that calls itself called a recursive function.

// what is base case?
// The base case is the what stop the recursion 
// from continuing on forever
// it act like a terminating condition


// why recursion?
//how to write recursive function?


// example of calling itself
// function test() {
//     test();
// }
// test();

// another example
function countDown(n){
for(let i = n; i> 0; i--){
    console.log(i);
}
}
// countDown(3);

// recursion
function recursionCountDown(n){
    if(n === 0){
        return ;
        
    }console.log(n);
    recursionCountDown(n-1);
}
// recursionCountDown(4);


function totalcount(n){
let total = 0;
for( let i = 0; i<=n; i++){
    total += i;
}return total;
}
// console.log(totalcount(4));


// using recursion
function recursiontotalcount(n,total = 0){
    //base case
    if(n ===0)
    return total;
return recursiontotalcount(n-1, total += n)
}
// console.log(recursiontotalcount(4));

// another example with nested function
const teamstructire = {
name : 'kunal',
    teams:[{
        name : 'raghav',
        team : []
    },
{
    name : 'pawan',
    team: [],
}]
}

function getteamDetail(t){
    // console.log(t);
// base case
if(t.teams.length === 0)
return ;
t.teams.forEach(team => {
    // console.log(team);
    // getteamDetail(team);
});
}
getteamDetail(teamstructire);


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
