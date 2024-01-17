 //ES6
                 //  in map filter reduce use only reduce function to sum all 
                //  let employee1 = [
                //         {id:1, name:'raja', profile:'A',rt:5, rt2:9},
                //         {id:2, name:'singham', profile:'B',rt:5, rt2:9},
                //         {id:3, name:'raghav', profile:'A',rt:2, rt2:8},
                //         {id:4, name:'pawan', profile:'B',rt:3, rt2:4},
                //         {id:5, name:'karan', profile:'A',rt:7, rt2:6}, 
                //     ]
                //     let seniorDev = employee1.reduce((acc,val) => val.profile==="A" ?
                //     acc += val.rt + val.rt2 : acc,0)
                //     console.log(seniorDev);

                //     let seniorDev2 = employee1.reduce((acc,val) => {
                //         if (val.profile === "A") {
                //             let sum = val.rt + val.rt2;
                //             acc += sum; 
                //             // acc = acc + sum;
                //         }
                //         return acc;
                //     },0)
                //     console.log(seniorDev2);