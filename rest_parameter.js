 //Rest parameter
                // function(ar1,arg2, ...rest) 
                // the rest parameter syntqax allows a function to accept an  indifinite
                // number of arguments as  an array
                
                // function sum(a,b){
                // console.log( a+b);
                // }
                // sum(4,5);
                // sum(4,5,6,8);
                // sum(7,8,5,56,3,3);

                // function sum(...value){
                //     let sum = 0;
                //     value.map(d => sum+=d)
                //     console.log('sum ',sum);
                // }

                // sum(4,5);
                // sum(4,5,6,8);
                // sum(7,8,5,56,3,3);

                // function divide(...value){
                //     let divide = 1;
                //     value.map(w => divide /= w)
                //     console.log('divide ' , divide);
                // }

                // function multiply(...value){
                //     let multiply = 1;
                //     value.map(w => multiply *= w)
                //     console.log('multiply ' , multiply);
                // }

                // function calculate(type,...value){
                //         type(...value)
                // }
                // calculate(sum,45,85,45)
                // calculate(sum,34,67,34)
                // calculate(divide,20,20)
                // calculate(multiply,20,20)