     // Deep and Shallow copy
                            // Shallow copy =>  Mutable object
                            // Deep copy => immutable object

                            // shallow copy => original object + clone object = Reference object
                            // shallow copy mainly make with non primitive types 

                            // primitve type =>  number , boolean , string , null , undifined   
                            // non- primitve => array , object

                            // Deep copy  => original object = reference object
                                        //  clone object  = reference object

                            // Deep copy only change on self value
                            // in shallow copy it change all value from other varable
                            // with primitive and non primitive

                            // Deep copy 
                            // in primitive it is not changing the other variable value
                            // let a= 12;
                            // let b = a;
                            // console.log(a); 
                            // console.log(b);
                            //  b = 34;
                            //  console.log(a); 
                            // console.log(b);

                            //here it is doing shallow copy

                            // let c = {
                            //     name : "raja",
                            //     age : 23
                            // }
                            // let d = c;
                            // console.log(c);
                            // console.log(d);

                            // d.name = "singham";
                            // console.log(c);
                            // console.log(d);


                            //JSON Stringify 
                            // let c = {
                            //     name : "raja",
                            //     age : 23,
                            //     getfun: function(){
                            //         this.name;
                            //     }
                            // }
                            // let d = JSON.parse(
                            //     JSON.stringify(c)
                            // );
                            // // ! JSON atringify method do not work with function 
                            // console.log(c);
                            // console.log(d);

                            // d.name = "karan";
                            // console.log(c);
                            // console.log(d);

                                // with es6 before method with object.assign({} , variable)
                            // let c = {
                            //     name : "raja",
                            //     age : 23,
                            //     getfun: function(){
                            //         this.name;
                            //     },
                            //     address: {
                            //         city : "rajasthan",
                            //         country : " india" 
                            //     }
                            // }
                            // let d = Object.assign({}, c);
                            // console.log(c);
                            // console.log(d);

                            
                            // d.name = "karan";
                            // console.log(c);
                            // console.log(d);


                            // now using spread operator
                            // let c = {
                            //     name : "raja",
                            //     age : 23,
                            //     getfun: function(){
                            //         this.name;
                            //     },
                            //     address: {
                            //         city : "rajasthan",
                            //         country : " india" 
                            //     }
                            // }
                            // // let d = {...c}
                            // // console.log(c);
                            // // console.log(d);

                            // let d = {...c};
                            // d = {
                            //     ...d,
                            //     name: "radha",
                            //     address : {
                            //         ...d.address,
                            //         city:"banglore"
                            //     }
                            // }
                            
                            // // d.name = "karan";
                            // // c.address.city = "punjab"
                            // console.log(c);
                            // console.log(d);
