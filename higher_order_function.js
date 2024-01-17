         // Higher order function 
                    // when a function return a another from a function 
                    // function x(fn) {
                    //     fn();
                    // }
                    // function y() {
                    //     console.log("hey you called from y");
                    // }
                    // x(y);
                    // x is a higher order function
                    // y is a callback function

                    // let data = [10,20,30,40]
                    // const calsqare = function (d) {
                    //     let sqare = [];
                    //     for (let i = 0; i < d.length; i++) {
                    //         sqare.push(d[i]*2)
                    //     }
                    //     return sqare;
                    // }
                    // const calAddone = function(d) {
                    //     let addone = [];
                    //     for (let i = 0; i < d.length; i++) {
                    //         addone.push(d[i]+1)
                    //     }
                    //     return addone;
                    // }

                    // console.log(calsqare(data));
                    // console.log(calAddone(data));

                    // now with higher order function 

                    // let data = [10,20,30,40];

                    // function higherSquare(x) {
                    //     return x*2;
                    // }
                    // function higherSum(x) {
                    //     return x+1;
                    // }

                    // const calsqare = function (d,ca) {
                    //     let sqare = [];
                    //     for (let i = 0; i < d.length; i++) {
                    //         sqare.push(ca(d[i]))
                    //     }
                    //     return sqare;
                    // }
                        // prototype is global 
                    // Array.prototype.calsqare = function (ca) {
                    //     let sqare = [];
                    //     for (let i = 0; i < this.length; i++) {
                    //         sqare.push(ca(this[i]))
                    //     }
                    //     return sqare;
                    // }
                    // console.log(data.calsqare( higherSquare));
                    // console.log(calsqare(data, higherSquare));
                    // console.log(calsqare(data, higherSum));
                    // console.log(data.map(higherSquare));