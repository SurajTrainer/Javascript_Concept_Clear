         // optional chaining  ? .
                    // The optional Chaining ?. is a safe way to  access nested object
                        // properties , even if an intermediate property does not exist.

                        // The optionsl chaining ?. stop the evalution if the value before ? .
                        // is undefined or null or return undefined.

                        let user = {
                            name :" kamal",
                            // address: {
                            //     city : 'kerla'
                            // }
                        }
                        // console.log(user.name);
                        // console.log(user.address.city);
                        // here are so many types methods to define it.
                        // console.log(user.address ? user.address.city : undefined);
                        // console.log( user.address?.city );
                        // console.log(user.address && user.address.city);
    
                        let key = 'accountToken';
                        const customerdetail = {
                            userid : "12",
                            account: {
                                // accountToken : "ABCd1234",
                                holder : {
                                    profile : {
                                            firstName: "nidhi",
                                            lastName : "Rawat",
                                            // age : 23,
                                    }
                                },
                                contacts : {
                                    mobile : "564545464",
                                    landline : "3434223423",
                                    office : "121212122",
                                }
                            }
                        }
    
                        // console.log(customerdetail.account && 
                        //         customerdetail.account.holder && 
                        //         customerdetail.account.holder.profile &&
                        //         customerdetail.account.holder.profile && age);
    
                        // console.log(customerdetail.account.holder.profile?.age);
                        // console.log(customerdetail.account?.[key]);
    
                        /*
                        Do not over use the optional chaining
                        We should use ?. only where it is ok that something does not exist.
    
                        for example :-- if accordding to our coding logic user object must exist, but address is 
                        optional, then we should write user.address?.street, but not user?.address?.street.
                        
                        So , if user    happens to be ubdefined   due to a mistake , we will see a programming error 
                        about it and fix it. Otherwise, coding errors can be silenced where not approriate,
                        and become more difficult to debug.
                        */
    
    