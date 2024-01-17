// control flow

let temprature = 20;

if (temprature < 30) {
    // console.log('temprature is ok');
}else{
    // console.log('tempertaure is too high');
}
// console.log(`code executed`);

let balance = 1000;
if (balance < 500) {
    console.log(`the balance is less than 500`);
}else if (balance < 750) {
    console.log(`the balance is less than 750`);
}else if (balance < 1000) {
    console.log(`the balance is less than 1000`);    
}else{
    // console.log(`the balance is 1000`);
}

let userloggedIn = true
let debitcard = true

if (userloggedIn && debitcard && 2==2) {
    // console.log('you are allow to purchase anything');
}

let userloggedfromGoogle = false
let userloggedfromGamil = true;

if (userloggedfromGoogle || userloggedfromGamil) {
    // console.log('you can access from here');
}
