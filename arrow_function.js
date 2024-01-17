 // Arrow Function
        
//         an arrow funtion expression is a compact alternative to a traditional function 
//         expression
//         () =>
//         const sum = (a,b) => a+b;
//         // arrow function can't be used in any situation
                         
//     // ES5
//     function add(x,y) {
//         return x+y;
//     }
//     console.log('ES5 function',add(3,5));

//     //ES6
//     let sum = (a,b) => a+b;
//     console.log('ES6 arrow function',sum(3,6));

//     // arrow function withg no arguments
//     let sum = () => 8+5;

//     // arrow function with single arguments
//     let sum = x => x+8;

//     const sum1 = (x,y) => {
//             return x+y;
//     }

//     // we need to wrap arrow function in object with paranthese 
//     const getuser = () => ({name : 'radha' , city:'vrindawan'})
//         console.log(getuser());

//         //ES5 example
//     function addTocard() {
//         this.producutName = "mobile";
//         this.getProduct = function () {
//             console.log(this);
//             const that = this;
//             setTimeout(function() {
//                 console.log(that);
//             }, 1000);
//         }
//     }
//     let obj = new addTocard();
//     obj.getProduct();

//             // ES6 example
//             function addTocard() {
//         this.producutName = "mobile";
//         this.getProduct = function () {
//             console.log(this);
//             setTimeout(() => {
//                 console.log(this.producutName);
//             }, 1000);
//         }
//     }
//     let obj = new addTocard();
//     obj.getProduct();
     
//         let names = ["raja","raghav","rama"];
//         let results = names.map(n => n.toUpperCase())
//         console.log(results);

//         function surya() {
//             console.log(this); 
//         }
//         surya();

//         var person = {
//            name: 'John',
//          sayHello: function() {
//         console.log('Hello, ' + this.name + '!');
//     }
// };
//       person.sayHello();

//         function person(name) {
//             this.name = name;
//         }
//         let john = new person("radha");
//         console.log(john.name);