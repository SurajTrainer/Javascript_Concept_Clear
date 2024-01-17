
        // //Spread Operator
        // // Spread operator is introduced in ES6 and its syntax is quite simple,
        // // 3 dots followed by iterable/Array
        //     // Syntax ...  ITERABLE
        //     // Used With -- Array, Object, functions

        //         let users = ['user1', 'user2'];
        //         console.log(users);
        //         //using spread operator
        //         console.log(...users);

        //         let team1 = ['rahul','suraj','ritesh'];
        //         let team2 = ['krishna','ankit','joshi']
                
        //         let team3 = team1.concat(team2);
        //         console.log(team3);
        //         let team4 = [...team1,...team2];
        //         console.log(team4);

        //         //another example 

        //         let team5 = "newMember";
        //         console.log(team1.concat(team5));
        //         //good use
        //         console.log(...team1,...team5);
        //         //bad use


        //         // not sure !
        //         // let product = ['mobile','laptop']
        //         // let shop = product;
        //         //  console.log(product);
        //         // shop.push('camera')
        //         // console.log(shop);

        //         // // using spread operator
        //         // let shop1 = [...product];
        //         // console.log(shop1);

        //         // now using with object

        //         let emp = {
        //             name:'radha',
        //             city: "delhi"
        //         }

        //         let personalDetails = {
        //             age : 34
        //         }
        //         let data = emp;
        //         console.log(emp);
        //         console.log(data);

        //         let data2 = {
        //             ...emp, ...personalDetails
        //         }
        //         console.log(emp);
        //         console.log(data2);
                
        //         let scorelist = [21,45,45,78,65,12,45,78,9];
        //         console.log(Math.min(scorelist));
        //         //using spread operator
        //         console.log(Math.min(...scorelist));

        //         //immutability with spread operator
        //         const todos = [
        //             { task: 'reading', status: 'false' },
        //             { task: 'writing', status: 'true' },
        //         ];

        //         // function addToDo(newTodo) {
        //         //     todos.push(newTodo);
        //         // }
        //         function addToDo(newTodo) {
        //                 return [
        //                     ...todos, 
        //                     {...newTodo}
        //                 ];
        //         }
        //          let newList = addToDo({
        //             task:'sleeping', status: 'false'
        //          });
        //          console.log(todos);
        //          console.log(newList);