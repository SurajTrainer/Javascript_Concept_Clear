        // Prototype 
        let user2 = {
            name :"rsadha",
            age : 23
        }
        // object prototype  <= Array Prototype    <= array type
                        //  <= Function prototpye    function type
        // in console we can use user2.__proto__
        // learn about
        // what is prototype?
        //what is  _proto__?
        // Prototype chaining ... ? 



        // prototype use
        // function user3(name) {
        //     this.name = name;
        //     // this.getDetails = function () {
        //     //     console.log(this.name);
        //     // }
        // }
        // user3.prototype.getDetails = function(){
        //     console.log(this.name);
        // }
        // let user4 = new user3('nitin');
        // let user5 = new user3('singh');

        // user4.getDetails();
        // user5.getDetails();

        function User(name){
        }

        User.prototype.name = "kamal";


        let a1 = new User()
        let a2 = new User();
        // the problem with it 
        // a1.name = "kushum";

        // console.log(a1.name);
        // console.log(a2.name);


        // for always best way is 
        function User(name){
            this.name = name;
        }

        User.prototype.getDetails = function(){
                // console.log(this.name);
        }
        let user4 = new User('nitin');
        let user5 = new User('singh');
        // console.log(user4.name);
        // console.log(user5.name);
        // user4.getDetails();
        // user5.getDetails();


        // another example is 

        let exp = ["simran",'nisha'];

        Array.prototype.testMehod = function () {
            console.log('the random example is..');
        }


        // now example is a google game which will never get finish.
        // using this code in console.
        // requestAnimationFrame.prototype.gameOver = () => {}
        // () => {}

        // Prototypical Inheritence
        //prototype based inheritance
        // its quiet different way it works in other 
        // languages.

        function phone() {
            this.modelNumber = " ";
            this.getModelNumber = function(){
                return this.modelNumber;
            }  
        }
        function samsung() {
            this.modelNumber = "RRR-WWW";
            this.latestFEature = function(){
                console.log(`samsung have a great flexsip phone`);
            }
        }

        samsung.prototype = new phone();
        let obj2 = new samsung();
        console.log(obj2.getModelNumber());
        obj2.latestFEature();