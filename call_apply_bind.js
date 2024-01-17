        // call, apply, bind
                    // let employee = {
                    //     firstName : 'Surya',
                    //     lastName : 'Singh',
                    //     getfullName: function(){
                    //         console.log(`${this.firstName} ${this.lastName}`);
                    //     }
                    // }
                    // let customer = {
                    //     firstName : 'Karan',
                    //     lastName : 'Rajput',
                    //     getfullName: function(){
                    //         console.log(`${this.firstName} ${this.lastName}`);
                    //     }
                    // }
                    // employee.getfullName();
                    // customer.getfullName();

                    // function borrowing  now using
                    // let employee = {
                    //     firstName : 'Surya',
                    //     lastName : 'Singh',
                    //     getfullName: function(city,profile){
                    //         // console.log(this);
                    //         console.log(`${this.firstName} ${this.lastName}
                    //         the city is ${city} and profile is ${profile}`);
                    //     }
                    // }
                    // let customer = {
                    //     firstName : 'Karan',
                    //     lastName : 'Rajput',
                    // }
                    // employee.getfullName.call(customer,'DElhi','singer');
                    // employee.getfullName.apply(customer,['uk','coder']);


                    let getfullName =  function(city,profile){
                        // console.log(this);
                        console.log(`${this.firstName} ${this.lastName}
                        the city is ${city} and profile is ${profile}`);
                    }
                let employee = {
                    firstName : 'Surya',
                    lastName : 'Singh',
                   
                }
                let customer = {
                    firstName : 'Karan',
                    lastName : 'Rajput',
                }
                // getfullName.call(customer,'DElhi','singer');
                // getfullName.apply(employee,['uk','coder']);

                // bind => we can execute it and whenever want to call can do call later
                // let handler = getfullName.bind(customer)
                // handler('delhi','coder');

                    let obj = document.getElementById('btn');
                    obj.addEventListener('click',getfullName.bind(customer,"delhi","coder"));