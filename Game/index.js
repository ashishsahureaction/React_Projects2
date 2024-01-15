//javascript adds behaviour to the web page(web pages intreactive and dynamic),html-hpper text markup lanaguge(structure),css-cascading style sheets(displayed).
//Synchronys Single threaded language

//ways to print in js
// alert("me");
// console.warn("warning")
// console.error("error")

//console.log("mera world");

// document.write("this is to be written")
// document.write("pad lo", 4 + 6, )

// 3. javascript variables
// containers to *store data in the form of var,let,and const.
// var number1 = 34;
// var number2 = 56;
// console.log(number1 + number2);

//data type in js-store data
//1-strings,2-Number,3-boolean,4-undefined,5-null,6-symbol,7-biginteger
// var str1 = "This string";
// console.log("str1");
// console.log(3 + 5);
// console.log(3 - 5);
// console.log(3 * 5);

// Increment and Decrement operator
//operator: x++ or ++x or --x or x--

// var num = 15;
// var newnum = num++;
// console.log(num);
// console.log(newnum);

// // ashish SharedArrayBuffer
// var myName = 'ashish sahu';
// var myAge = 26;
// console.log(myName);

//OBJECTS-is a list of properties with their corresponding values.
//ex car is an object proporties-car.comapny-maruti,car.model-petrol,car.year-2000,car.weight-150kg and methods are car.start/car.end..
//can access(like delete) any property inside the object.
//can assigned to anyother object

// var car = {company:"maruti",year:"2000",color:"black"};
// console.log(car);
// delete car.year// detele the property but the total value of the object will be the same even after deletion ex object count 6.
// console.log(car);
// console.log(car.color);// invoke only one property
// var newcar = car;
// console.log(newcar);
// newcar.year="3020"
// console.log(newcar);//year updated as 3020 and initial object too.
// console.log(car);
// if we cahnge the proprerty in new assigned object property then it will get changed in preious or fisrt object too.

//OBJECT CONSTRUCTION-
// function phone (make,model,warranty,color)//("this" known as the ownwer of the function)
// { this.make= make;
//     this.model=model;
//     this.warranty=warranty;
//     this.color=color;
//     this.extendwarranty=function (x){this.warranty +  x;}

// }
// var myPhone= new phone ("apple","iphone 5","12","white");
// // console.log(myPhone);
// myPhone.extendwarranty(12)
// console.log(myPhone.warranty);

//DATA TYPES IN JS
//SIX DATA TYPES PRIMITIVES 1-undefined(var x,),2-Boolean means ture or false ,3-Number(var x=4,),4-String(var x="ram"),5-Bigint,6-Symbol,7=null(var x=null)
//THREE Refrence type 1-Object (var x={value:prporety}),2-Array(var x=["list1","list2"]),3-Dates, 4-Maps, 5-Set
//.............................................................................................

//Symbol-help to creat unique values
//It was important to maintain unique object keys to prevent the overwriting of values having similar object key as this could result in loss of data.
//symbol-new data types gives unique value start with Symbol iteself (S in capital letter) and both hello are unique not same
// const x=Symbol("hello")
// console.log(x);
// const y= Symbol("hello")
// console.log(y);
// console.log(x==y);

//but it count print directly from the variables need to add toString or description method
// const x=Symbol("hello")
// alert(x);// error comes Cannot convert a Symbol value to a string
// console.log(x); //showing symbol(hello)
// const x=Symbol("hello")
// console.log(x.toString());
// console.log(x.description);

//symbol value comes in sqaure bracket [] in case of object below age showing symbol

// let age=Symbol();
// let user={
//     name:"ram",
//     education:"mba",
//     [age]:28,
// }
// console.log(user);


//if wish to put description to get print while using symbol along with object
// let age=Symbol("rohit");
// let user={
//     name:"ram",
//     education:"mba",
//     [age]:28,
// }
// console.log(user);

//or
// let age=Symbol("rohit");
// let user={
//     name:"ram",
//     education:"mba",
// }
// user[age]=25;
// console.log(user);
// console.log(user.name);//object
// console.log(user.age);//undefined bcz its a symbol n we cant get the value
// console.log(user[age]);//symbol vale have to be []

//not print symbol value in for loop-not print age
// let age=Symbol("rohit");
// let user={
//     name:"ram",
//     education:"mba",
//     [age]:25,
//     gender:"Male",
// }
// for(value in user){console.log(value);}
// console.log(user);

//.............................................................
//API-refer notes-Api-application programming interface

//JSON.stringify is method function change any object into json format
//Input HTTP and out in JSON from rest api architecture
//JSON=JavaScript Object Notation-is a lightweight format for storing and transporting data-is often used when data is sent from a server to a web page
// console.log(JSON.stringify(user));//even JSON will skip to print symbol

//ITERATOR..NEXT()..GENERATOR
//loops
////while(),do..while(),for(),for..of(),for..in(),foreach(),map(),iterators(to control the loops)
//ITERATOR..NEXT()..GENERATOR
//ITERATOR-is an object which defines a sequence and potentially a return value upon its termination.
//is any object which implements the Iterator protocol by having a next() method that returns an object with two properties: next value and done(sequence).
//syntax-[Symbol.iterator]();
//let y = [Symbol.iterator]();

// var x = ["Apple","Mango","Peach"];
// let y = x[Symbol.iterator]();
// console.log(y.next()); //print apple
// console.log(y.next().value);//print only value
// console.log(y.next().done);
// console.log(y.next());// next value in array mango
// console.log(y.next());//showing sencond value false as iteration not completed.
// // y.next();
// // y.next();
// // y.next();
// console.log(y.next().value);//wiil show only last loop

//Generator is the factory of iterator who make iterator and is a process that can be paused and resumed and can yield multiple values.
//Generator (or Generator function) is the new concept introduced in ES6
//A generator in JavaScript consists of a generator function, which returns an iterable Generator object.
//its defined by yield which control the flow and need to put only * star before any function name.

//in below function if we call test function then all the value comes like first,second,third means no controll over this print.
//with the help of generator function we can controll this flow.
// function test()
// {console.log("First");
// console.log("Second");
// console.log("Third");
// }
// test();

//* star before any function name for generator function and will not show any value now bcz converted into generator function even if assign new valriable and call
// function *test()
// {console.log("First");
// console.log("Second");
// console.log("Third");
// }
// test();
// let fun = test();
// console.log(fun);

// function *test()
// {console.log("First");
// console.log("Second");
// console.log("Third");
// }
// test();
// let fun = test();
// console.log(fun);
// console.log(fun.next());// showing value by using next method

// function *test()
// {console.log("First");
// yield 'Yield No 1'// mandatory we have to put some values in yield ''.
// console.log("Second");
// yield 'Yield No 2'
// console.log("Third");
// yield 'Yield No 3'
// }
// test();
// let fun = test();
// //console.log(fun);
// console.log(fun.next());//will print only first yeild and stop untill will call for next in next.
// console.log(fun.next());
// console.log(fun.next());
// console.log(fun.next());// having only 3 values that why showing undefined and true.
// //so we can control the function flow by next and yield(put yield to stop and next to print, any yield or next)

//generator with the help of loop
// function *test()
// {console.log("First");
// yield 'Yield No 1'// mandatory we have to put some values in yield ''.
// console.log("Second");
// yield 'Yield No 2'
// console.log("Third");
// yield 'Yield No 3'}
// test();
// let fun = test();
// //console.log(fun);
// // console.log(fun.next());//will print only first yeild and stop untill will call for next in next.
// // console.log(fun.next());
// // console.log(fun.next());
// // console.log(fun.next());
// for(check of fun){console.log(check);}// for all value of next come in one step for more next if in case

// making a function to increse by one whenever call by sequence..
// function *genrateit(){
//     let nextNum=300;
//     while(true){yield(nextNum++);} }
// let g = genrateit();
// console.log(g.next().value);
// console.log(g.next().value);
// console.log(g.next().value);// can call n numbers will get the plus value

// making a function to increse by one number whenever call by sequence..with stop at particular time like 305 below
//made one generator function name genrateit and given variable name nextNum and value 300,we used while loop bcz it required condition and control by
//controll by yiled.
// function *genrateit(){
//     let nextNum=300;
//     while(true){yield(nextNum++);} }
// let g = genrateit();
// for(value of g){if (value > 305) break; console.log(value);}

//..............................................................................
//MAP.......................................................................
//Map data type-advance or alternative form of object,its a kind of object only.
//but why map bcz object's data type key always be a string while map key can be any data type.
//object={value:property} {name:ruhi} name is the key in object and has to be a string.
//Map=2 types 1-Class Map a data type 2-Functional Map mostly used for array.
//map required syntax of new with Map with space in between(new Map)3 barckets     ([[ 'value' ,'property' ]]) or ([[ 'Key' ,'value' ]]).

// let obj= {name:"anil",
// age:30}
// console.log(obj);

// let data = new Map ([['name','peter']])
// console.log(data);

// let obj= {name:"anil",
// 10:'is the number key'}
// console.log(obj.10);//if we assigne value to the 10 as we do in object then syntax error came.bcz cant use number as value in object.

// let data = new Map ([['name','peter'],[10,'is the map number key']])
// console.log(data);
// console.log(data.get(10));

// console.log(data.keys());//get keys in map
// data.set('city','Mumbai');
// //add city in data variable map by use of set.
// data.set('name','joker')//name update
// console.log(data);
// //or
// console.log(data.set('name','jokers'));
// //or
// console.warn(data.set('name','jokers'));
// console.log(data.values());
// console.log(data.keys());
// console.log(data.size);
// console.log(typeof data);
// console.log(data.delete());
// console.log(data.clear());
// console.log(data.has('ashish'));//to check the whether value is present.ture or false
//foreach
// data.forEach((value,key)=>{
//     console.log(key,value);
// })
// //map works in 'Value' ,'Property' conscept use in parameter is v,k and in argument opposite as k,v to get the match value.

//for..of..
// for(x of data){console.log(x);} // showed in paires
// for(x of data){console.log(x[0]);} //0 for keys
// for(x of data){console.log(x[1]);}//for values
// const add = (x,y)=> x+y;
// const str1= "new way of doing";
// let myMap=new Map();
// myMap.set(add,str1);
// console.log(myMap);

//get mostly used for key or values

//............................................................................................................
//SET....................................................................................
//SET data type-is a collection of unique values. Each value can only occur once in a Set,not dulpicate value. A Set can hold any value of any data type.
//set required syntax of new with Set with space in between(new Set)3 barckets.
//Set(collection of unique values) Vs Array (collection of values)-in a arrays we may have duplicate value.
//Set Vs Map(is pair with key n values while set is not).

// let data = new Set([1,4,6,"hello",{},true,1,true,6])
// data.clear()
//not able to find the set length by putting some value.
// console.log(data);// only consider unique values duplicate value removed.
// console.log(data.add("bye"));//to add value
// console.log(data.add({name:'ram'}));//add object value
// console.log(data.delete("hello"));//to delete
//console.log(data.has("ashish"));
//console.log(data.size);
// let myset=new Set("hello");
// console.log(myset);

// //forEach loop
// data.forEach(element => {
//     console.log(element);
// });

//for..of loop
// for(check of data){console.log(check);}

// //convert array into set.....................
// let arr = [10,30,40,"a",'b',10,30,40,"a",'b',20,20,]
// console.log(arr);
// let prr = new Set(arr);
// console.log(prr);//all duplicate value removed and new set ready

//convert Set into array......................

//syntax-const myArray=[...mySet];
//console.log(myArray);

// let data = new Set ([10, 30, 30, 40, 'a', 'b'])
// console.log(data);
// let convert=[...data]//destructuring
// console.log(convert);
// // //or
// data=[...data];
// console.log(data);
// console.log(...data);

// var myName = "ashish sahu";
// console.log(myName);

// //type of operator
// console.log(typeof(myName));

// var myAge = 26;
// console.log(myAge);
// console.log(typeof(myAge));

// var iAmAshish = true;
// console.log(iAmAshish);
// console.log(typeof(iAmAshish));

// console.log(10 + 20);
// console.log(10 + "20");
// console.log(9 - 5);
// console.log(9 - "5"); //its kind of bug
// console.log("Ashish" + "   Deepika");
// console.log("Ashish " + "Deepika");
// console.log(false=="");
// console.log(false=={});
// console.log(false==[]);
// console.log(true==[]);
// console.log(0==null);
// console.log(null==0);
//console.log(NaN==NaN); 



// NAN-by illegal number-NaN is a property of the global object and a veriable of global scope.
//console.log("Ashish" - "Deepika"); //NAN = NOT A NUMBER

// var myPhoneNumber = 9820824498;
// var myName = "Ashish";
// console.log(myPhoneNumber);
// console.log(myName);
// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));
// if (isNaN(myName)) { console.log("pls enter valid phone number"); }

// console.log(Number.isNaN(NaN));
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));

// console.log(" " + " ");
// console.log(" " - " ");
// console.log("1" + "22");
// console.log("111" + "22");
// console.log("" + 0);
// console.log("True" + "True");
// console.log(true + true);
// //true consider as 1 and false consider as 0
// console.log(false + false);
// console.log(false - false);
// console.log(true - false);
// console.log(false - true);

//diffrence between null vs undefined ? bug 2-date type of null is object.
// var Ashish = null
// console.log(Ashish);
// console.log(typeof(Ashish));

// var Ashish;
// console.log(Ashish);
// console.log(typeof(Ashish));

//...................................................................................

//Expression and operators
//console.log(5 + 20);
// 5 and 20 = operand, + = operator, result = expression (expression is somthing that produce some value)


//STRING-SEQUNEC OF CHARACTER

//Types of oprerators= 6 types,1-assignment,2-arithmetic,3-comparison,4-logical,5-string,6-candiotonal(ternary) operator.

// 1-assignment opertor(=)= eual to

// The “=” is an assignment operator is used to assign the value on the right to the variable on the left.
// a = 10;
// b = 20;
// ch = 'y';

//It is used for assigning the value to a variable.
//Constant term cannot be placed on left hand side. Example: 1=x; is invalid
// let 10 = "a";
// console.log(10);//syntax error-unexpected number


// 2-arithmetic = +,-,*,/ and Remainder or Modulas (%) Operator = divide in one shot and the left value, ex.27%4=3 as 4*6=24-27=3,81%8=1,8*10=80-81=1
//console.log("Remainder operator" + 27 % 4);

// Increment x++ or ++x and decrenment --x or x-- operetor
//var num = 15;
// var newnum = num++;
// console.log(num);
// console.log(newnum);


// var num = 15;
// var newnum = num++ + 5;
// // console.log(num);
// console.log(newnum);

//3-Comparisson or relational operator to check ture or false(!= means not equal too)
// var a = 20;
// var b = 50;
// console.log(a == b);
// console.log(a != b);
// console.log(a =! b);
// //Greater than(>) and less than (<)
// console.log(a >= b);
// console.log(a <= b);

//The ‘==’ operator checks whether the two given operands are equal or not. If so, it returns true. Otherwise it returns false.
//5==5
//This will return true.
//It is used for comparing two values. It returns 1 if both the values are equal otherwise returns 0.bcz true=1, and false=0
//Constant term can be placed in the left hand side. Example: 1==1 is valid and returns 1.

//4-logical operator-comes in bolean value means true or false

//1-logical AND(&&) known as logical conjuction use for all true oprend,
// var a = 100;
// var b = 50;  
// console.log(a > b && b > 0 && b < 100);

// var a = 10;i
// var b = 50;
// console.log(a < b && b > 90 && b < 100);

// var firstName="Billy";
// var lastName="Ted"
// if (firstName==="Billy" && lastName==="Ted"){console.log("hieee");}

// var firstName="Billy";
// var lastName="Mac"
// if (firstName==="Billy" && lastName==="Ted"){console.log("hieee");}//undefined


//2-logical OR(||) also know as logical disjunction use for if one or more then ture oprend

// var a = 10;
// var b = 50;
// console.log((a > b) || (b > 0) || (b < 100));

// name="billy"
// if (name=="billy" || name=="susy"){console.log("hi billy or Ann");}

// name="billy"
// name="susy"
// if (name=="billy" || name=="susy"){console.log("hi billy or Ann");}

// name="billy"
// name="susy"
// name="mac"
// if (name=="billy" || name=="susy"){console.log("hi billy or Ann");}

// name="susy"
// if (name=="billy" || name=="susy"){console.log("hi billy or Ann");}

// name="mac"
// if (name=="billy" || name=="susy"){console.log("hi billy or Ann");}//undefined

// name="mac"
// if (name=="billy" || name=="susy"){console.log("hi billy or Ann");}else{console.log("bye");}

//3-Logical NOT operator(!) know as logical complement,negation) change true to false and vice versa,reverse the value,(elsclamation mark showing does not eual to).
// console.log(!(false));

// var a = 10;
// var b = 50;
// console.log(!((a > 0) || (b < 0)));

// var name="Billy"
// console.log(!"Billy");
// if(!(name=="Billy")){console.log("hi billy");}  //undefined
// console.log(name);

// var name="Billy"
// console.log(!"Billy");
// if(!(name=="Bob")){console.log("hi billy");}//hi billy
// console.log(name);

//STRING OR CONCENATENATION OPERTOR TO CONCENATE TWO SRINGS
// console.log("DEEPIKA" + "Ashish");
// var myName = "ashish";
// console.log(myName + "deepika");

// console.log(9 ** 3); //9*9*9 exponetila opretor
// console.log(100 ** -1)
// console.log(5 + "Ashish")
// console.log(5 - "Ashish")//Nan

//Diffrence between == vs ===?
// var num1 = 5;
// var num2 = '5';
// console.log(num1 == num2)//true checked only value
// console.log(5=='5');

// var num1 = 5;
// var num2 = '5';
// console.log(num1 === num2)//false bcz its checked value and data type of value

//CONTROL STATEMENTS AND LOOPS
//1-IF..ELSE 2-SWITCH STATEMENT..3-WHILE LOOP,4-DO-WHILE LOOP,5-FOR IN LOOP,6- FOR OF LOOP,7-CANDITIONAL OE TERNARY 0PERTOR

// var a="billy"
// if (a=="billy"){console.log("hi");}

// var a="susy"
// if (a=="billy"){console.log("hi");}else{console.log("bye susy");}

// var a="billy"
// if (a=="billy"){console.log("hi");}else if(a=="susy"){console.log("hello susy");}
// else{console.log("bye");}

// var a="mohit"
// if (a=="billy"){console.log("hi");}else if(a=="susy"){console.log("hello susy");}
// else{console.log("bye");}



//1-IF..ELSE(if this do that)
// var love = 'deepika';
// if (love == 'ashish') { console.log('life hai..') } else { console.log('no life') }

// var x=9;
// if (x==4){console.log("ram")}else{console.log("sita")}

// var tomr = 'sunny';
// if (tomr == 'rain') {
//     console.log('na');

// } else {
//     console.log('yes')}

// var speed = "30"
// if (speed<"40"){console.log("you are fine") }else{console.log("high speed")};

// var speed = "20"
// if (speed>"40"){console.log("high speed") } else if(speed<20){console.log("low speed")}else{console.log("fine")};


// if given year is a laep year or not
// var year = '2020'
// if (year == '2020' % '4 == 0') {
//     console.log('its a leap year');
//     if (year == '2020' % ' 100 == 0') {
//         console.log('not a leap year')

//     } else { 'its a leap year' } else { 'not a leap year' }
// }
// var year = 2020;
// if (year % 4 == 0) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             console.log('lp');
//         } else { console.log('nlp'); }
//     } else { console.log('lp'); } else { console.log('nlp'); }

//......................
// what is turthy and fasly values:- we have 7 falsy values-
// 0, -0, "blanck  string", undefined, nan, null, false.
//Use the logical NOT (!) operator to check if a value is falsy, e.g. if (!myValue). 
//The logical NOT operator returns true when it precedes falsy values, in all other cases it returns false.
// console.log(!false);
// console.log(!0);
// console.log(!NaN);
// console.log(!null);
// console.log(!undefined);
// console.log(!"");
// console.log(!-0);


// var score="10"
// if (score =="60") { console.log("won"); } else { console.log("loss"); }

//7-conditional ternary opertor-that take three oprends
//variablename=(condition)? value1:value2

// var age = 6;
// console.log((age > 18) ? "vote" : "not vote");


// function user(bool){return bool;}
// var w=user(true)? "call him":"dont call him";
// console.log(w);

// function user(bool){return bool;}
// var w=user(false)? "call him":"dont call him";
// console.log(w);

// var age=60;
// var w=age>=18?"vote":"not vote";
// console.log(w);

// //or

// var age = 10;
// if (age > 18) {
//     console.log("vote");

// } else {
//     console.log("not vote");}

// var area = "triangel";
// var PI = 3.142,
//     L = 5,
//     B = 4,
//     R = 3

// if (area == "circle") { console.log("area of the circle is :" + PI * R ** 2); }
// else if (area == "triangel") { console.log("area of the triangle is :" + (L + B) / 2); }
// else if (area == "rectangle") { console.log("area of the rectangle is :" + (L * B)); }
// else { console.log("NOT VALID"); }

//2-Switch statement(this or that)

// var area = "circle";
// var PI = 3.142,
//     L = 5,
//     B = 4,
//     R = 3
// switch (area) {
//     case "circle":
//         console.log("the area of the circle is :" + PI * R ** 2);

//     case "triangle":
//         console.log("the area of the triangle is: " + (L * B / 2));

//     case "rectangle":
//         console.log("the area of the rectangle is :" + (L * B));

//     default:
//         console.log("not valid data");
// }

//use of 'break' to terminate the loop or cases

// var area = "circle";
// var PI = 3.142,
//     L = 5,
//     B = 4,
//     R = 3
// switch (area) {

//     case "circle":
//         console.log("the area of the circle is :" + PI * R ** 2);

//     case "triangle":
//         console.log("the area of the triangle is: " + (L * B / 2));
//         break

//     case "rectangle":
//         console.log("the area of the rectangle is :" + (L * B));
//         break
//     default:
//         console.log("not valid data");
// }

// function move(direction){
//     var whatHappens;
//     switch(direction){
// case "forward":whatHappens="meet the monster";
// break;
// case "backward" :whatHappens="below the sky";
// break;
// case "left":whatHappens="settle in tree";
// break;
// case "right":whatHappens="find river";
// break;
// default:whatHappens="go to home";};
// return whatHappens;
//     };
// console.log(move("left"));






//........  ..................................................
//3-WHILE LOOP STATEMENT VS DOWHILE LOOP- DO WHILE LOOP GIVE ATLESAT OUTPUT and check condition in last

//3-WHILE LOOP STATEMENT-through a block of code as long as a specified condition is true
// var num = 1;
// while (num <= 10) {
//     console.log(num);
//     num++;
// }

// var num = 1;
// while (num <= 10) {
//     console.log(num++);
// }
// let i=0;
// while(i<10){console.log(i++);}
//....................................................

//4-DO WHILE LOOP
//is a variant of while loop,will execute code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true
// var num = 1;
// do {
//     console.log(num);
//     num++
// }
// while (num <= 10);
//.......................................................

// 5-FOR IN LOOP-we need 3 statement

//for(initializer;condition;iteration){//code to be executed}

//1-(initializer 0r initail expression ex-num),2-(condition-num>10,)3-(iteration-n++ means to run till the aprticiular digit)
//let i=0; is initializer,zero means loop will start from 0 postion if you want can change to 1 or..)
//i<5; condition
//i++ increment or we can take i-- for backward loop.

// for (let i=0; i<5; i++)
// {console.log('hello world', i);}
//print hello world 0,hello world 1,hello world 2,hello world 3,hello world 4,bcz less than 5 and base was 0.

//for (var num = 0; num <= 10; num++) { console.log(num,"tum"); }
//for (var num = 0; num <= 10; num++) { console.log("tum",num); }
//for (var num = 7; num > 0; num--) { console.log(num + Math.pow(num,1)); }

// //for making list and check with [i] in console.
// var shoppingList = ["bread", "milk", "eggs"];
// for(i=0; i<shoppingList.length; i++){console.log(shoppingList[i]);}

//need to add 10 in given var
// var numberList = [1, 2, 3];
// for(i=0; i<numberList.length; i++) {console.log(numberList[i] + 10);}


//play with others will show bufring
// var numberList = [1, 2, 3];
// for(i=0; i<numberList.length; i++) {numberList += 10;}{console.log(numberList[i]);}

//print table for given number 8,

// for (var num = 1; num <= 10; num++) {
//     var tableOf = 8;
//     console.log("8" + "*" + num + "=" + "8" * num);
//     //console.log(tableOf + "*" + num + "=" + tableOf * num);
// }


// var a=8
// for (i=1;i<=10;i++) {console.log("8" * i);}
// var a=8
// for (i=1;i<=10;i++) {console.log("8" + "*" + i + "=" + "8" * i);}


//or

// for (let num = 1; num <= 10; num++) {
//     let tableOf = 12;
//     //console.log(tableOf + "*" + num + "=" + tableOf * num);
//     console.log(` ${tableOf} * ${num}=${tableOf*num}`);
// }

//Template Literals......................................
//Template literals provide an easy way to interpolate variables and expressions into strings. The method is called string interpolation.
//Template literals are a new feature introduced in ECMAScript 2015/ ES6.
//Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, for string interpolation with embedded expressions, and for special constructs called tagged templates
//To create a template literal, instead of single quotes ( ' ) or double quotes ( " ) quotes we use the backtick ( ` ) character.

// const c="ram"+"shayam";
// console.log(c);

// const c=2+4;
// console.log(c);

// const name="silly";
// const age=24;
// const pet="dog";
// //const you=`name ${age-10} ${pet}`;
// //const you=`hi ${name} ${age-10} ${pet}`;
// const you=`${name} ${name} ${age-10} ${pet}`;
// console.log(you);

// console.log(`hello`);
// console.log(`hello + world`);
// console.log(`hello` + `world`);

//console.log(`my name is "khan"`);//With template literals, we can use both single and double quotes inside a string.

// let firstName = "John";
// let lastName = "Doe";
// //console.log(`Welcome ${firstName}, ${lastName}`);
// console.log("welcome"+ firstName + "," + lastName);//Automatic replacing of variables with real values is called string interpolation.

// let price = 10;
// let VAT = 0.25;
// let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;//fixed for place for decimal
// console.log(total);


// for (let num = 0; num <= 15; num++) {
//     let tableOf = 13;
//     //console.log(tableOf + "*" + num + "=" + tableOf * num);
//     console.log(` ${tableOf} * ${num}=${tableOf*num}`);
// }

// function x() {
//     for (let num = 1; num <= 10; num++) {
//         let tableOf = 12;

//         function delay(num)}
//     console.log(tableOf + "*" + num + "=" + tableOf * num);
//     //function delay(num){} { setTimeout(function delay(num) { console.log(` ${tableOf} * ${num}=${tableOf*num}`) }, 1000); }
// }
// x();

// function x() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(function() {
//             console.log(i);
//         }, i * 100);
//     }
//     console.log('ashi');
// }
// x();

// let array = [1, 2, 3, 4, 5, ]
// for (let i = 0; i < array.length; i++) { dealy(i) }

// function dealy(i) {
//     setTimeout(() => {
//         console.log(array[i])
//     }, 4000);
// }

//$=templetes litreals and `=backtick just down to ecs button

//2-Template literals(or template strings) (note-no space in between string literals and value.)
//Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings,
//for string interpolation with embedded expressions, and for special constructs called tagged templates.

//start with abstrack then (`${} ${}!`);

// var firstname = 'Bill';
// var lastname = 'Gates';

// // //ES5
// // console.log('Hello ' + firstname + ' ' + lastname + '!');

// // //ES6
// console.log(`Hello ${firstname} ${lastname}!`);

// //ES5
// var text5 = 'Here is \na new line';
// console.log(text5);

// //ES6
// const text6 = `Here is
// a new line`;
// console.log(text6);

// for (let num = 1; num <= 10; num++) {
//     let tableOf = 12;
//     //console.log(tableOf + "*" + num + "=" + tableOf * num);
//     console.log(` ${tableOf} * ${num}=${tableOf*num}`);
// }
//$=templetes litreals without space and `=backtick just down to ecs button
//.......................................................................................................................

//Regular Expressions-is a sequence of characters that forms a search pattern to describe what you are searching for.
//Regular expressions can be used to perform all types of text search and text replace operations(Serach, match,and replace method).
//Regular expressions Syntax:/pattern/modifiers;
//var x=/abc/i(abc=pattern and i(case insensitive capital or small any/ig(global means search as many /m=modifiers)without inverted coomma or double quotes.
// var a = "every story has his own cost"
// console.log(a.search(/has/i));
// console.log(a.match(/has/i));

// var a = "every story has his own cost"
// console.log(a.search("story"));
// console.log(a.replace("has","have"));





// let text = "Is this all there is? Do a global search for is in a string";
// console.log(text.match(/is/i));
// console.log(text.match(/is/g));
// console.log(text.match(/is/ig));//ig uses all is belongs to sentance(one is in this).
//......................................................................................................................

//ERRORS-There are three main types of errors: syntax errors, runtime errors, and logical errors.

//The most common type of errors are syntax errors, in which something incorrect in the syntax of the program body raises this error.
//Syntax errors - are also known as parsing errors. In JavaScript, they occur at the interpretation time(before run, and only effected will not work)
//Runtime errors -or exception errors occur during the runtime of the program after it's interpreted by the compiler.
//Logical errors are the most difficult to find as they are when the syntax is correct but the logic is not.
//refrence error -engine try to find outspecific value before initilization and not get./sytex-dulicate value /type error--not initilise and declare in the same line.
//we can not catch js syntax errors only catch progrmmer genrated.
////temporal dead zone is the time between from hositing to get initilize or get some value (will get refrence error)
//let-cant be duplicate or redeclare shows syntex error
//const-constant is more strict then let,and it initilize in same line only will get type error. 
//Reference Error when js tires to findout a specific variables inside the memory spcae and you cannot access then this error occured.

//error handling or exception handling

//blla blla bla..//is syntax error

//1-try and catch method
// try{
//     console.log("start of try");

//     console.log("end of error")
// }catch{console.log("Error has occured")};

// try{
//     console.log("start of try");//start of the try
// bllabala
//     console.log("end of error")
// }catch{console.log("Error has occured")};//error has occured



//..............................................................
//try-test,catch=handle,throw=statement,finally=execute result.

// function show(){ var y=20; try{alert("value of x:"+x);}catch(err){alert("something is wrong");}}
// show()
//................................................

//SetTimeout-setTimeout.............................its a web api,call back function 
//SetTimeout-setTimeout() method calls a function after a number of milliseconds. 1 second = 1000 milliseconds and executed only once then after use setInterval
//and then after use clearTimeout to stop setInterval.

// function fn(){console.log("helloo");}
// fn()
// setTimeout(fn,3000);

// setTimeout(function(){
//     console.log("maybe");
// },2000);

// SetInterval

// function fn(){console.log("helloo");}
// fn()
// setInterval(fn,3000);

// setInterval(function(){
//     console.log("maybe");
// },2000);

// setInterval(() => {console.log("maybe");},2000);

//ClearTiemout-to stop the interval-have to assigne store value(var/let/const) for setinterval and then assigne that store value to ClearTimeout.

// let stop= setInterval(() => {console.log("maybe");},2000);
// clearInterval(stop);

//DStop Timer after 5 count-
// function fn(){if (counter==5) {clearTimeout(timer);}
// else{console.log("Hello"); counter++;}}
// let timer=setInterval(fn,2000);
// let counter=0;

//loop will not work with setInterval..
// let stop = setInterval(() => {for (let i=0; i<5; i++)
//      {console.log('hello world', i);};2000});
//     setInterval(console.log(stop),2000);

//..........................................................

//Screen- for analytics how user see the view in respect to browser(window height/width).
//analytical view to get the user information
//screen object contains information about the user's screen.(console.log(window.innerHeight); console.log(window.innerWidth);)

// console.log(screen.width);
// console.log(screen.height);
// console.log(screen.availWidth);//width of the visitor's screen minus interface features like the Windows Taskbar.
// console.log(screen.pixelDepth);
// console.log(screen.availHeight);
// console.log(screen.colorDepth);//The screen.colorDepth property returns the number of bits used to display one color.
//24 bits =      16,777,216 different "True Colors"
//32 bits = 4,294,967,296 different "Deep Colors"
//..............................................................

//BOXESS-three kind of popup boxes: 1-Alert box, 2-Confirm box, and 3-Prompt box.to give out to the user
//1-Alert box,(display msz to user) 2-Confirm box,(display a button which condition ok and cancle) and 3-Prompt box (need to take input details from user).

//1-Alert Box-When an alert box pops up, the user will have to click "OK" to proceed.
//display msz to user
// window.alert("hello");
// alert("hi");

//To display line breaks inside a popup box, use a back-slash followed by the character.
//alert("welcome \             to the sugar beach");

// var a=20;
// var b=30;
// if(a<b){alert("good morning");} else {alert("night");}

//2-Confirm Box-often used if you want the user to verify or accept something will have to click either "OK" or "Cancel" to proceed.
//If the user clicks "OK", the box returns true. If the user clicks "Cancel", the box returns false.

//display a button which condition ok and cancle.

//window.confirm("this is me");

// var txt;
//   if (confirm("Press a button!")) {
//     txt = "You pressed OK!";
//   } else {
//     txt = "You pressed Cancel!";
//   }confirm(txt);

//confirm("pls confirm");

//3-Prompt box-need to take input details from user.
//prompt("my name is");

//..........................................................

//COOKIES-Cookies let you store (upto 4kb) user information in web pages to indentify the user
//Cookies are data, stored in small text files, on your computer.
//When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.
//Cookies were invented to solve the problem "how to remember information about the user":
//When a user visits a web page, his/her name can be stored in a cookie. Next time the user visits the page, the cookie "remembers" his/her name.
//Cookies are saved in name-value pairs like: username = John Doe
//JavaScript can create, read, and delete cookies

// document.cookie="userName=ashish";
//.....................................................

//Brackets
//1-Parentheses()-(singular) and parenthesis(plural)-used for function parameter and arguments.
//2-Square or Box bracket-[]-used to describe objects in array and define index of something.
//3-Curly or Braces bracket-{} -used to define block or statement,loops,if,object

//Function-is a block of code designed to perform a particular task and is executed when "something" invokes it.(call it).
//FUNCTIONS IN JS-to re-use code
//Functions Used as Variable Values
//function = function name + parenthesis () + celebartion{//statment}

// function ruhi() {
//   console.log("put the function first then have to invoke by calling function ruhi below with parentheses");
// }
// ruhi();

// function ruhi(firstName) {
//   console.log("hello" + firstName);
// }
// ruhi("ashish");

//function = function name + parenthesis () + celebartion{//statment}
//  var a = 10;
//  var b = 20;
// var total = a + b;
// console.log(total);

//or

// function sum() {
//      var a = 20; b = 20;
//     var total = a + b;
//     console.log(total);
// }
// sum();
//function parameter like var a 20 and b seprate,and function arguments are value inside the sum barcket below when we called function.

// function sum(a, b) {
//     total = a + b;
//     console.log(total);
// }
// sum();

// sum(10, 70, );
// sum(20, 40);

// function greet(a) {
//   console.log("hello" +a);
// }

// greet("ram");

//function parameter like var a seprate,and function arguments are value inside the greet(ram) barcket ram.

// function sum (a, b) {
//     return  a + b;}
//     var x = sum (3,7);
// console.log(x);

//return- value to get printed (ensure not use =)

//DRY=DO NOT REPEAT YOURSELF


//What is the difference between function declaration?
//A function declaration must have a function name. 
//The main difference between a function expression and a function declaration is the function name, which can be omitted in function expressions to create anonymous functions.
//A function Expression is similar to a function declaration without the function name. 2. Function declaration does not require a variable assignment.
//Difference between Anonymous and Named functions:
//Anonymous functions -When invoking an anonymous function, you can only call it after the declaration line.
//Named Functions-A name function can be invoked before declaration.


// function sum(a, b, ) {
//     var total = a + b;
//     console.log(total);
// }
// sum(5, 10);
// sum;

//OR
//FUNCTION EXPRESSION assigned to varriable


// var a=function(){console.log("hi")}
// a();// we can dirctly call function experssion

//return total use data universally

//FUNCTION WITHOUT NAME CALLED AS ANONYMOUS FUNCTION

// var funExp = function(a, b) { return total = a + b; }
// var sum = funExp(5, 10);
// console.log("the sum of two no is " + sum);

// var funExp = function(a, b) { return total = a + b; }
// var sum = funExp(5, 10);
//console.log(sum);
//console.log("the sum of two no is " + sum);


//ECMA SCRIPT 6-MORDREN JS ALSO K/A ES6 
//bebel is js compiler which convert all old version into new version so that we can run codes.
//let and const came in es6

//most of the features are compatabile with browser.

//Hoisting is (to many developers) an unknown or overlooked behavior of JavaScript.

//scope
// let x = 1;
// function add(y){
//     return y + x;
// }
// console.log(add(3));
//so let variables can be accessed from inside functions if declared in their outer environment just like var

// function add2(y){
//     let x = 2;
//     return y + x;
// }
// console.log(add2(3));
//also let variables can be accessed from outer functions if declared in their inside environment just not like var.

// function add2(y){

//     return y + x;
// }
// console.log(add2(3));
// var x = 2;
//NAN

// console.log(z);
// var z = 3;//check undefined

// console.log(z);
// let z = 3;//refrence error


// var a="gray"
// const b=function() {
//     
//     console.log(a);
//var a="red";
// console.log(a);
// };
// b();

// const a="gray"
// const b=function() {
//     const a="red";
//     console.log(a);

// console.log(a);
// };
// b();
  
// console.log(a);



//hoisting-"we can access variable and function before initilize it or put some value in it."
//its default behavoiur of moving declrations to the top of the current scope.

//var are the part of global object or window object while let is not, it is attched to diffrenrt space.
//while let and const are the part of diffrent memrory zone.(block scope)

// // let a = 10;
// console.log(a);
// var a = 10;

// console.log(b);
// var b = 100;//undefined

// console.log(c);

// console.log(a);undefined
// console.log(c);
// var a = 10
// let b = 5  // Uncaught ReferenceError: Cannot access 'c' before initialization
// const c = 2  //Uncaught ReferenceError: Cannot access 'c' before initialization
// console.log(a,b,c);//10,5,2

//Temporal dead zone is the time between from hositing to get initilize or get some value (will get refrence error)
//The let and const variables are not accessible before they are initialized with some value,
//and the phase between the starting of the execution of block in which the let or const variable is declared till that variable is being initialized is called Temporal Dead Zone for the variable.
//let and const are hoisted  (but hoisting not applied on let and cosnt )but refrence error bcz memory allocated initially in script not in global(not from global/window scope-check in source) to them as undefined initially but after they defined as refrence error
//time between hosted (undefined) and get initilalize or call is called temporal dead zone and we cannot access let n const in tdz
//to avoid tdz we should push all the initilization n declaration of let and const at the top. 

//1-LET AND CONST Vs VAR- important
//var=function scope,hosted as undefined, while LET AND CONST=Block scope and not reassigned and redceclare, means always constant and refrence error if accessing before declartion.
//let vs Const-let can reassigned while cosnt-cant reassigned( must initiliazed on declartion and can not be re-assigned a new value.).
//const is more secure.
// let b=20
// let b=30 // can not redeclare check with both together, syntax error occured
// b=40 // can reassigned value, no error
// console.log(b);

//const b=20
// const b=30 // can not redeclare check with both together, syntax error occured
// b=40 // can not reassigned value also, TypeError
//  console.log(b);

// var myname = "ashish";
// console.log(myname);
// myname = "deepika";
// console.log(myname);

// let myname = "ashissh";
// console.log(myname);
// myname = "deepika";//let reassigned
// console.log(myname);

// const myname = "ashish";
// console.log(myname);
// myname = "deepika";
// console.log(myname);
//.................................

// function biodata() {
//     var myfirstname = "ashish kumar";
//     console.log(myfirstname);
//     if (true)

// {

//         var mylastname = "sahu";
//         console.log(mylastname);
//     }

// }
// biodata()



// function biodata() {
//     var myfirstname = "ashish kumar";
//     console.log(myfirstname);
//     if (true) {

//         var mylastname = "sahu";
//         console.log("inner" + mylastname);
//         console.log("outer" + myfirstname);
//     }
//     console.log("inner&outer " + myfirstname);
//     console.log(mylastname+myfirstname);
// }
// biodata()

// function biodata() {
//     let myfirstname = "ashish kumar";
//     console.log(myfirstname);
//     if (true) {

//         let mylastname = "sahu";
//         console.log("inner" + mylastname);
//         console.log("outer" + myfirstname);
//     }

// }
// console.log("inner&outer " + myfirstname);

//biodata();

// function biodata() {
//     const myfirstname = "ashish kumar";
//     console.log(myfirstname);
//     if (true) {

//         var mylastname = "sahu";
//         console.log("inner" + mylastname);
//         console.log("outer" + myfirstname);
//     }
//     console.log("inner&outer" + myfirstname);
// }
// biodata();


//const effects and assignements

// const MAKE = 'Apple';
// console.log(MAKE);

// MAKE = 'Samsung';

// {
//     const MAKE = 'Apple';
// }

// {
//     const MAKE = 'Samsung';
// }

// console.log(MAKE);

// const LANGUAGE = {
//     name: 'JavaScript',
//     version: 'ES5'
// };
// LANGUAGE.version = 'ES6';
// console.log(LANGUAGE);
// //error only if you do LANGUAGE = something

//2-Template literals(or template strings) (note-no space in between string literals and value.)
//Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings,
//for string interpolation with embedded expressions, and for special constructs called tagged templates.

//start with abstrack then (`${} ${}!`);

// var firstname = 'Bill';
// var lastname = 'Gates';

// // //ES5
// // console.log('Hello ' + firstname + ' ' + lastname + '!');

// // //ES6
// console.log(`Hello ${firstname} ${lastname}!`);

// //ES5
// var text5 = 'Here is \na new line';
// console.log(text5);

// //ES6
// const text6 = `Here is
// a new line`;
// console.log(text6);

// for (let num = 1; num <= 10; num++) {
//     let tableOf = 12;
//     //console.log(tableOf + "*" + num + "=" + tableOf * num);
//     console.log(` ${tableOf} * ${num}=${tableOf*num}`);
// }
//$=templetes litreals without space and `=backtick just down to ecs button

//3-Default Parameters

//FAT ARROW FUNCTION always use after the function definition and not use "this"
//Arrow function ()=> — also called fat arrow function— is a new feature introduced in ES6 that is a more concise syntax for writing function expressions.
//Unlike regular functions, arrow functions do not have their own this. Arguments objects are not available in arrow functions,
//but are available in regular functions. Regular functions created using function declarations or expressions are 'constructible' and 'callable'
//An arrow function expression is an anonymous function expression written with the “fat arrow” syntax ( => ).
//Like traditional function expressions, arrow functions are not hoisted, and so you cannot call them before you declare them. 
//They are also always anonymous—there is no way to name an arrow function

// function add(a,b){return a*b;}
// //or
// const add=(a,b)=>a*b;
// //or
// const add=(a,b)=>{return a*b;}

// console.log(sum());
// function sum() {
//     let a = 5;
//     b = 3;
//     let sum = a + b
//     return `the sum value is ${sum}`;

// }

//using fat arrow for the above expression

// const sum = () => `the sum value is ${(a=5)+(b=3)}`;
// console.log(sum());

// var list = [1, 3];

//ES5
// var list1 = list.map(function(x){
//     return x * 2;
// });
// console.log(list1);

// //ES6
// const list2 = list.map(x => {
//     return x * 2;
// });
// console.log(list2);

// const list3 = list.map(x => x * 2);
// console.log(list3);

// var list = [1, 3];
// const list3 = list.map( x=>  x* 2);
// console.log(list3);

//..........................................................................................................................
//ARRAY.............................................................................
//6-ARRAYS-are special type of variables which can hold more than one value.(with numbered indexes)
//variable cant hold more than one value if we want to store more than one value is any variable then use array. like
//var=10,store one value
//var=10,20,30;error
//var="10,20,30"; its string store value as a whole.
//var=[10,20,30]; in array individual values stored.

//Index in array is the order of the items arranged inside the array.
//array are the object and type of the operator will give abject in return.
// array having length and sort property.
//use [] square or box bracket to create an array(or var x=new array()).

// var shoppingList=["bags","pen","paper"];
// console.log(shoppingList);
// console.log(shoppingList[1]);
// shoppingList[1]="book";
// console.log(shoppingList);//added book in place of index 1 pen.
// delete shoppingList[1];
// console.log(shoppingList); //showing as empty in the Array.

// var any=[10, null,"harrry",true];
// document.write("<ul>");
// for (var a=0; a<=3; a++){document.write("<li>"+ any[a] + "</li>");
// document.write("</ul>");}

// var any=[10,20,30,40];
// var sum=0;
// document.write("<ul>");
// for (var a=0; a<=3; a++){document.write("<li>"+ any[a] + "</li>");
// sum=sum + any[a]};
// document.write("</ul>");
// document.write("Total Sum : "+ sum);

//how to sort an array in assending or dessending order
// const months = ['jan', 'march', 'dec', 'nov'];
// console.log(months.sort());

//how to sort in reverse an array in assending or dessending order
// const months = ['jan', 'march', 'dec', 'nov'];
// console.log(months.reverse());

// const number = ['2', '5', '500', '8', '100'];
// console.log(number.sort());

// var myfriends = ['kapil', 'amit', 'sudhansu', 'ritu']

// console.log(myfriends);

//1-traversal in array-naviagte through an array

// var myfriends = ['kapil', 'amit', 'sudhansu', 'ritu']

// console.log(myfriends[02]);

// var myfriends = ['kapil', 'amit', 'sudhansu', 'ritu']

// console.log(myfriends[2]);
// console.log(myfriends.length);

// //check lenght of the array

// var myfriends = ['kapil', 'amit', 'sudhansu', 'ritu']

// console.log(myfriends[myfriends.length - 1]);
// console.log(myfriends.length);

//FOR IN LOOP-to give index number deatils (index number)
//syntax for in (element or anything in that perticular variables and use "in" between){statement with new value-console.log()}

// let str="Raunak"
// for (check in str){console.log(check);}

// let str=["Raunak","sami"]
// for (check in str){console.log(check);}

// var myfriends = ['kapil', 'amit', 'sudhansu', 'ritu']

// for (let elements in myfriends) { console.log(elements); }


// FOR OF LOOP-to give ELEMENTS deatils (element deatils)
//syntax for of (element or anything in that perticular variables and use 'of' between){statement with new value-console.log()}
// let str="Raunak"
// for (check of str){console.log(check);}

// let str=["Raunak","sami"]
// for (check of str){console.log(check);}

// var myfriends = ['kapil', 'amit', 'sudhansu', 'ritu']
// for (check of myfriends) { console.log(check); }

//adding condition to break the loop
// var myfriends = ['kapil', 'amit', 'sudhansu', 'ritu']
// for (check of myfriends) {if (check=='sudhansu') break; console.log(check); }


// var myfriends = ['kapil', 'amit', 'sudhansu', 'ritu']
// for (check in myfriends) { console.log(check); }
// for (check of myfriends) { console.log(check); }
// myfriends.forEach(function(check) { console.log(check); });

//Difference for..in and for..of :
//The only difference between them is the entities they iterate over: for..in iterates over all enumerable property keys of an object. 
//for..of iterates over the values arrays and string,not over the object

//for each.....................

//for each loop-give deatils of each elements in the array and comes in ecma 5,es-5
//foreach method work only with arrays..its an array method.

// var myfriends = ['kapil', 'amit', 'sudhansu', 'ritu'];
// myfriends.forEach(function(element, index, array) { console.log(element + "index" + index + "" + array) });

// myfriends.forEach(function(element, index, array) { console.log(element + index+ element) });

//or
// var myfriends = ['kapil', 'amit', 'sudhansu', 'ritu'];
// myfriends.forEach((element) => { console.log(element,); });
// myfriends.forEach((element,index) => { console.log(element,index); });
// myfriends.forEach((element,index,array) => { console.log(element,index,array); });

//myfriends.forEach((element, index, array) => { console.log(element + " index: " + index + " " + array); });
// myfriends.forEach((element,index,array) => { console.log(element,index,array); });

// var a =[10,20,30,40];
// a.forEach((item )=>{console.log(item)});//inplace of item we can write any key value bus we have to call in that name while print.

//...........................................................

//Array Methods-
//pop/push, shift/unsfit
//1-forEach, 2-includes,3-Filter,4-Map,5-Reduced,6-Some,7-every,8-sort,9-array.from(),10-array.of(),11-find,12-fill,13-copywithin,14-flat(),15-flat.map..etc

//............................................................

//Searching & filter in array

//index of() foreward search,if not matched then retrn -1,
// var myfriends = ['kapil', 'amit', 'sudhansu', 'ritu', "kapil"];

// console.log(myfriends.indexOf("kapil", 1));

// //last Index off( search from backword)
// var myfriends = ['kapil', 'sudhansu', 'ritu', "kapil"];

// console.log(myfriends.lastIndexOf("kapil"));

//......................................................

//includes() to check elment is avilable and return true or false.

// var myfriends = ['kapil', 'amit', 'sudhansu', 'ritu', "kapil"];
// console.log(myfriends.includes("amit"));

// var myfriends = ['kapil', 'amit', 'sudhansu', 'ritu', "kapil"];
// console.log(myfriends.includes("amit", 3));

//..................................................................

//Filter

// filter 1-find method-give only one element in return

// const prise = [200, 300, 400, 500, 600, ];
// console.log(prise.find((value) => value < 400));

// const prise = [200, 300, 400, 500, 600, ];
// console.log(prise.filter((value) => value < 400));

//2-find index=conditon not satisfied than -1 will come and gives only one data

// const prise = [200, 300, 400, 500, 600, ];
// console.log(prise.findIndex((value) => value < 400));//lowest value at 0 index

//...............................................................

//3-filter method if not satified then give emplty array,method creats new array with only elements passed condition inside the provided function
// const prise = [200, 300, 400, 500, 600, ];
// //to get all prise<400
// const newprise = prise.filter((Element, index) => { return Element < 400; })
// const y = prise.filter(any=>any<500);//(element..function..element..condition)
// console.log(newprise);
// console.log(y);

//filter all odd numbers..
// const arr = [5, 1, 3, 2, 6];
// const output = arr.filter((x) => x % 2);
// console.log(output);

//filter check even value
// const arr = [5, 1, 3, 2, 6];
// const output = arr.filter((x) => x % 2 == 0);
// console.log(output);

// const arr = [5, 1, 3, 2, 6];
// const output = arr.filter((x) => x > 4);
// console.log(output);

//first name of the whos age is less than 30
// const output = users.filter((x) => x.age < 30).map((x) => x.firstName);
// console.log(output);

// find out the diffrent age like at age=26,particular unique age

//........................................................

//how to sort an array in assending or dessending order
//const months = ['jan', 'march', 'dec', 'nov'];
// console.log(months.sort());
//console.log(months.reverse()); //for desending order

// const number = ['2', '5', '500', '8', '100'];
// console.log(mumber.sort());

//ARRAY METHOD -ADDITION, DELETION,UPDATE,REDUCE,INSERT

//POP(-) / PUSH(+)>FROM THE END OF THE ARRAY.
//SHIFT (-) / UNSHIFT (+)> FROM START OF THE ARRAY
//poo/push,shift/unshift doesnot create new list,they modify exisiting list
//some method like concat creat new list.

//1-PUSH METHOD add one or more element at the end of the array.

// const animals = ["pigu", "dog", "lion", "tiger"];
// animals.push('chicken','goat');
// console.log(animals);

//or
// const animals = ["pigu", "dog", "lion", "tiger"];

// console.log(animals.push("chicken"));

//2-unshift method add one or more element at the begning of the array.
// const animals = ["pigu", "dog", "lion", "tiger"];
// animals.unshift('chicken');
// console.log(animals);

// const mynumber = ['1', '2', '3', '5', '500', '8', '100'];
// mynumber.unshift('4', '6');
// console.log(mynumber);

//3-pop to remove the last element from the array

// const veg = ["potato", "broccoli", "cabbage", "cauliflowre"];
// console.log(veg);
// //veg.pop();
// console.log(veg);

// const veg = ["potato", "broccoli", "cabbage", "cauliflowre"];
// console.log(veg);
// var vega=veg.pop();
// console.log(veg);//'potato', 'broccoli', 'cabbage'
// console.log(vega);//cauliflowre


//4-shift method to remove first element from the array
// const veg = ["potato", "broccoli", "cabbage", "cauliflowre"];
// console.log(veg);
// veg.shift();
// console.log(veg);
// var vega=veg.shift();
// console.log(vega);



// const veg = ["potato", "broccoli", "cabbage", "cauliflowre"];
// console.log(veg.shift());

//for addition,deletion, common method-splice method by only one method

//5-Splice method-imp

//syntax:months.splice(index No of the position,Number of items deleted,Add1,Add2)

// const months = ["Jan", "march", "April", "June", "July"];
// //add dec at the end
// const newmonth = months.splice(5, 0, "dec")
// console.log(months);

// const months = ["Jan", "march", "April", "June", "July"];
// const newmonth = months.splice(2, 1, "dec","feb")
// console.log(months);


// const months = ["Jan", "march", "April", "June", "July"];
// const newmonth = months.splice(months.length, 0, "dec")
// console.log(months)

//Make march=March
// const months = ["Jan", "march", "April", "June", "July"];
// const update = months.splice(1, 1, "March");
// console.log(months);

//or for long list

// const months = ["Jan", "march", "April", "June", "July"];
// const indexOfMonth = months.indexOf("march");

// if (indexOfMonth != -1) {
//     const updatemonth = months.splice(indexOfMonth, 1, "MARCH");
//     console.log(months);
// } else { console.log('no data') };

//...........................................................................................
//other array methods..
// const x = [5,7, ,2,9,8];
// console.log(x.filter(a=>a>6));
// console.log(x.find(a=>a>6));
// console.log(x.findIndex(value=>value>6));
// console.log(x.indexOf(2));
// console.log(x.copyWithin(1,0,2));
// console.log(x.copyWithin(2,1));
// console.log(x.fill(1,2,3));
// console.log(x.fill(0,3,2));

//............................................................................................

//Map,Reduced filter method

//Map Array Method..
//1-map method-return new array conating calling result, just transforming the array
//map() creates a new array from calling a function (as per your requirement) for every array element
//this method create new array by calling the provided function in every element,we can modify the array as per function applied.
//map() does not change the original array(outcome will be the same number of count as base array)
//Syntax-array.map(function(currentValue, index, arr), thisValue)

// const array1 = [1, 4, 9, 16, 25];
// const newarr = array1.map(num=>num +1);//map(any value or key...function...condition)
// console.log(newarr);

// const array1 = [1, 4, 9, 16, 25];
// //console.log(array1.map(n=>n));
// console.log(array1.map(n=>n + ","));

// const array1 = ["1", "4", "9", "16", "25"];
// const newarr = array1.map(num=>num +1);
// console.log(newarr);

// const array1 = ["1", "4", "9", "16", "25"];
// let newarray = array1.map((curElem, index, arr) => { return curElem > 9; })
// //console.log(array1);
// console.log(newarray);
// //orr
// let newarr=array1.map(item=>item>9);
// console.log(newarr);

// const array1 = ["1", "4", "9", "16", "25"];
// let newarray = array1.map((curElm, index, arr) => { return `Index no=${index}and the value is ${curElm}belongs to ${arr}` })
// console.log(newarray);

//MAP METHOD use and do below
//double-[10,2,6,4,12];
//triple-[15,3,9,6,18];
//binary-[101,1,11,10,110]; use of toString to get binary no.


// const array = [1, 4, 9, 16, 25];
// console.log(array.map(num=>num*2));
// console.log(array.map(num=>num>4));//(5) [false, false, true, true, true]
// console.log(array.map(num=>num-4));

//const arr = [5, 1, 3, 2, 6];
// const output = arr.map(double);
// function double(x) { return x * 2 }
// console.log(output);


// const arr = [5, 1, 3, 2, 6];
// const output = arr.map(triple);
// function triple(x) { return x * 3 };
// console.log(output);

// const arr = [5, 1, 3, 2, 6];
// const output = arr.map(binary);

//or
// const arr = [5, 1, 3, 2, 6];
// const output = arr.map((x) => x * 2);
// console.log(output);


// function binary(x) { return x.toString(2) };
// console.log(output);
//or
// const arr = [5, 1, 3, 2, 6];
// const output = arr.map(function binary(x) { return x.toString(2) });
// console.log(output);
//or
// const arr = [5, 1, 3, 2, 6];
// const output = arr.map((x) => x.toString(2));
// console.log(output);

// const users = [
//     { firstName: "Ashish", lastName: "Sahu", age: 26 },
//     { firstName: "dipika", lastName: "kandari", age: 23 },
//     { firstName: "kavita", lastName: "Sharma", age: 19 },
//     { firstName: "Deepak", lastName: "Bhai", age: 35 },
// ];
// // //list of full name
// const output = users.map(x => x.firstName + x.lastName);
// console.log(output);

// to get space in between
// const output = users.map(x => x.firstName + " " + x.lastName);
// console.log(output);

//........................................................................

//Reduce array method-applies a function against an accumulautor and each element in the array (from left to right) to reduce it to a single value.
//Reduce-use of accumulator and value to get store the sum
//to get sum
//we can use to convert big array into ''single value''.

// const arr = [5, 4, 3, 2, 6];
// const newarr=arr.reduce((acc,value)=>acc+value,0);//can use any key reduce(total,value assigned)
// console.log(newarr);

// const arr = [5, 1, 3, 2, 6];
// //const sum = arr.reduce((accumulator, curElem) => accumulator = accumulator + curElem);
// //or
// //const sum = arr.reduce((acc, curr) => acc = acc + curr)
// const sum = arr.reduce((acc, curr) =>acc + curr,0)
// console.log(sum);

// const arr = [5, 1, 3, 2, 6];
// const sum1=arr.reduce((acc,value)=>acc+value,2);//if need to add 2 in total.
// console.log(sum1);


// const arr = [5, 1, 3, 2, 6];
// //to find maximum value

// const max = arr.reduce((total, key) => {
//     if (key > total) { total = key; }
//     return total;
// }, 0)
// console.log(max);

////or

// const arr = [5, 1, 3, 2, 6];
// //to find maximum value

// const max = arr.reduce((max, curr) => {
//     if (curr > max) { max = curr; }
//     return max;
// }, 0)
// console.log(max);

// const users = [
//     { firstName: "Ashish", lastName: "Sahu", age: 26 },
//     { firstName: "dipika", lastName: "kandari", age: 23 },
//     { firstName: "kavita", lastName: "Sharma", age: 19 },
//     { firstName: "Deepak", lastName: "Bhai", age: 35 },
// ];
// //list of full name
// const output = users.map(x => x.firstName + x.lastName);
// console.log(output);

//to get space in between
// const output = users.map(x => x.firstName + " " + x.lastName);
// console.log(output);

//first name of the whos age is less than 30
// const output = users.filter((x) => x.age < 30).map((x) => x.firstName);
// console.log(output);

// find out the diffrent age like at age=26,particular unique age

//.....................................................................................................

// //some method-check if at least one of array's item passed the condition.if passed return ture/false.

// const arr=[1,2,3,4,5,6,7,];
// const arr1=arr.some(num=>num>4);
// console.log(arr1);
// console.log(arr.some(num=>num>4));

//.....................................................................................................

//Every method-check if all array's item passed the condition.if passed return ture/false.

// const arr=[1,2,3,4,5,6,7,];
// const arr1=arr.every(num=>num>4);//all items are less then 4=false
// console.log(arr1);
// console.log(arr.every(num=>num>0));//all items are more than 0=true

//.....................................................................................................

//..........................................................................................................
//sort an array in assending or dessending order
// const months = ['jan', 'march', 'dec', 'nov'];
// console.log(months.sort());
// const arr=[2,6,9,7,3,1];
// const arr1=arr.sort();
// console.log(arr1);

// const arr=[2,6,9,7,3,1];
// const arr2=arr.sort((a,b)=>a>b?-1:1);//desending order
// console.log(arr.sort());

// const arr=[2,6,9,7,3,1];
// console.log(arr.sort((a,b)=>a>b?1:-1));//asending order

// const arr1=['l','f','v','d','r','a'];
// console.log(arr1.sort((a,b)=>a>b?1:-1));//asending order

//  const arr=['l','f','V','D','r','a'];
// console.log(arr.sort((a,b)=>a>b?-1:1));//asending order but prefrence to Upper letter first.

//how to sort in reverse an array in assending or dessending order
// const months = ['jan', 'march', 'dec', 'nov'];
// console.log(months.reverse());

// const number = ['2', '5', '500', '8', '100'];

// const arr2=number.sort((a,b)=>a>b?-1:1);//desending order
// console.log(arr2);

// var myfriends = ['kapil', 'amit', 'sudhansu', 'ritu']

// console.log(myfriends);

//14-flat() comes in es-10 ecma script 2019. to flaten the arrays

// const array=[1,2,3,4,5,6];
// console.log(array.flat());

// const array1=[1,[2,3],4,5,6];
// console.log(array1.flat());

// const array2=[1,[2,[3],4,],5,6];
// console.log(array2.flat());//[1, 2, Array(1), 4, 5, 6]
// console.log(array2.flat(2));//[1, 2, 3, 4, 5, 6] (2) reflecting numbers of leyer to flaten.

// const array4=[1,,,,[2,[3],4,,,,],5,6,,,,,,,];
// console.log(array4.flat(2));//[1, 2, 3, 4, 5, 6] help to clean the data unnecassry comas removed.


//15-flat.map-comes in es-10 ecma script 2019. to flaten the arrays and use flat and map method together

// const array5=[1,,,2,,3,4,,,,,5,6,,,,,,,];
// console.log(array5.flatMap(num=>num + "love"));

//............................................................................................................

//Excersise- https://www.youtube.com/watch?v=cAXyP9SBFIk

//compare  higer order function...1-for each..2-filter..3-map..4-sort..5-reduce..and there working polyfills and short way
// const companies=[
// {name:'Google', category:"Product based", start: 1981 ,end:2004},
// {name:'Amazon', category:"Product based", start: 1962 ,end:2008},
// {name:'Paytm', category:"Product based", start: 1999 ,end:2007},
// {name:'Cpforge', category:"Service based", start: 1989 ,end:2010},
// {name:'Mindtree', category:"Service based", start: 1989 ,end:2010},
// ];
// //console.log(companies);

//  const ages=[33,12,20,16,5,54,21,44,61,13,15,42,25,64,32];

//  for(i=0;i<companies.length;i++){console.log(companies[i])}//simple basic for loop use
// //or
//  companies.forEach(function(comapny,index){console.log(comapny);});
// //or
// companies.forEach((element)=>{console.log(element);});//for each hof used no need to use loop
// //or
// companies.forEach((element,index,name)=>{console.log(element,index,name);});



// // for(let i=0;i<=ages;i++){if (ages[i]>=20 ){console.log(ages[i]);}}
// //or
// const age=ages.filter(function(age){if (age>=20){return true;}})
// console.log(age);
// //or
// console.log(ages.filter((value)=>value>=20)); 

//filter only service based company

// const age=companies.filter(function(companies){if(companies.category==="Service based"){ return true}})
// console.log(age);
////or
//console.log(companies.filter(companies=>companies.category==="Service based"));
////or
// const b=companies.filter(companies=>companies.category==="Service based");
// console.log(b);
 
//map


// console.log(companies.map(n=>n));

// //only need company names

// const d=companies.map((company,index)=>{return `${company.name}`})
// console.log(d);
////or
// const e=companies.map((company)=>{return `${company.name}${company.category}`})
// console.log(e);
////or
//console.log(companies.map(n=>n.name));


 //console.log(companies.sort((a,b)=>a.start>b.start?1:-1));
// //or
// const arr2=companies.sort((a,b)=>a.start>b.start?1:-1);//(ternary operator ?1:-1)
// console.log(arr2);

// console.log(ages.sort((a,b)=>a>b?-1:1));
// //or
// console.log(ages.sort((a,b)=>(b-a)));


// let total=0;
// for(let i=0;i<ages.length;i++){total+=ages[i];}
// console.log(total);
// //or
// const p=ages.reduce(function(a,b){return a+b;});
// console.log(p);
// //or
//  const sum = ages.reduce((acc, curr) =>acc + curr,0)
//  console.log(sum);
// //or
// console.log(ages.reduce((a, b) =>a + b,0))

//..........................................................................................................................

//...........................................................................................................
//Array.from methodI()..

//Array.from method -this change all thing that are array-like or iteralble into true array especially working with DOM so that we can use other array methods.

// const name="Dscode";
// const name1=Array.from(name);
// console.log(name1);
// // console.log(Array.from(name));

//...........................................................................................................

//...........................................................................................................

//Array.of method()..
// Array.of method this create array from every arguments (function) passed into it.
// convert arguments into array
// const name2= "ashish"
// console.log(Array.of(name2));

// //compairson:
// const name="Dscode";
// const name1=Array.from(name);
// console.log(name1);


// //Object.fromEntries change array to object(string)
// const userProfile=[['comandarTom', 23],['darekZlander', 40],['hansel', 30]]

// const objt=Object.fromEntries(userProfile);
// console.log(objt);//{comandarTom: 23, darekZlander: 40, hansel: 30}

// ////Object.entries object to array
// const objt2=Object.entries(objt);
// console.log(objt2);


//Object Methods-to change object(string) to array.

// var obj={name:"ram",age:25,phone:123456}
// console.log(Object.entries(obj));  
// console.log(Object.keys(obj));  
// console.log(Object.values(obj)); 

 
// const name2= "ashish"
// console.log(Array.of(name2));

// var myfriends = ['kapil', 'amit', 'sudhansu', 'ritu'];
// myfriends.forEach((element) => { console.log(element,); });

// var myfriends = ['kapil', 'amit', 'sudhansu', 'ritu']
// for (check of myfriends) { console.log(check); }

// var myfriends = ['kapil', 'amit', 'sudhansu', 'ritu']

// for (let elements in myfriends) { console.log(elements); }

//...........................................................................................................
//String.................................

//STRINGS=sequence of statement for (alphabets)

//String Methods-22 methods including 1 property that is length.
//Length,toLowerCase(),toUpperCase(),includes(),startWith(),endWith(),search(),match(),indexOf(),lastindexof(),replace(),trim(),chartAt(),fromCharCode(),
//concat(),split(),repeat(),slice(),substr(),substring(),tostring(),valueof(),

//1-LENGHT
// let myName = "ASHISH KUMAR";
// console.log(myName.length);

// let yourName="Javascript is a great language";
// let a=yourName.length
// console.log(a);

//ESCAPE CHARACTER (\ backslash)
// let myName = "ASHISH 'KUMAR' \'SAHU'\ ";
// console.log(myName);
// console.log(myName.length);

////2-toLowerCase()
// let yourName="Javascript is a great language";
// let a=yourName.toLowerCase()
// console.log(a);

// //3-toLocaleUpperCase()
// let yourName="Javascript is a great language";
// let a=yourName.toLocaleUpperCase()
// console.log(a);

//4-Includes() //give true/flase
// let yourName="Javascript is a great language";
// let a=yourName.includes("great")
// console.log(a);

// let yourName="Javascript is a great language";
// let a=yourName.includes("Great")
// console.log(a);//give false as case sensitive function


//4-startsWith() -serach first word or letter //give true/flase
// let yourName="Javascript is a great language";
// let a=yourName.startsWith("Javascript")
// console.log(a);

// let yourName="Javascript is a great language";
// let a=yourName.startsWith("is")
// console.log(a);//give false as case sensitive function

// //5-endWith()-serach last word or letter //give true/flase
// let yourName="Javascript is a great language";
// let a=yourName.endsWith("language")
// console.log(a);

//6-Search-Searching for string in a string tell us postion in index number if not will give -1(false) and serch only once.

// let yourName="Javascript is a great language";
// let a=yourName.search("is")
// console.log(a);

// const myname = "ashish kumar sahu"
// let search = myname.search("k");
// console.log(search);

// const myname = "ashish kumar sahu"
// let search = myname.search("kumar");
// console.log(search);

// let yourName="Javascript is a great language";
// let a=yourName.search("a")
// console.log(a);//search only once

//7-match-match tiil the end(check in regualr expression)
// let yourName="Javascript is a great language";
// let a=yourName.match(/is/g);
// console.log(a);

// let yourName="Javascript is a great language";
// let a=yourName.match(/a/g);
// console.log(a);

//Comparing two JavaScript objects always returns false, so Never Create Strings as Objects
// let x = new String("Joohn");
// let y = new String("John"); 
// console.log(x==y);
// console.log(x===y);
// if(x===y){console.log(x)}else{console.log(y)};

//finding strings in a string
//8-indexof()-will search from start or forward

// let yourName="Javascript is a great language";
// let a=yourName.indexOf("is");
// console.log(a);

// const mystay = "i stay in mumbai";
// console.log(mystay);
// console.log(mystay.indexOf("mumbai"));

//serach and indexof method both are some

//9-lastindexof()- will search from backword or last
// let yourName="Javascript is a great language";
// let a=yourName.lastIndexOf("a");
// console.log(a);


//10-Replace-replace the string
// let yourName="Javascript is a great language";
// let a=yourName.replace("is","was");
// console.log(a);

// let myname = "Ashish kumar sahu";
// let replacedata = myname.replace("Ashish kumar", "deepika")
// console.log(replacedata);

// let myname = "Ashish kumar sahu";
// let replacedata = myname.replace("a", "d")
// console.log(replacedata);//replacing only one 

// let myname = "Ashish kumar sahu";
// let replacedata = myname.replace(/a/g, "d")
// console.log(replacedata);//replacing all the a with help of global match


//11-trim()-use to remove all blanck or white space from both side.
// var str = "                                                 ashish sahu         ";
// console.log(str.trim());
// var str = "                                                 ashish sahu         ";
// console.log(str.trimStart());
// var str = "                                                 ashish sahu          ";
// console.log(str.trimEnd());

//12-chartAt()-given in which position the value is attached

// let yourName="Javascript is a great language";
// let a=yourName.charAt("3");
// console.log(a);

// let str = "ASHISH SAHU"
// console.log(str.charAt(2));

//13 -charcodeAt-return the unicode UTF-16 CODE or sky code (an integer between 0 to 65535).
// let str = "ASHISH SAHU"
// console.log(str.charCodeAt(4));

//14-charCodeAt()-return the unicode of the last character in a string.

// let str = "ASHISH SAHU";
// let lastChar = str.length - 1;
// console.log(str.charCodeAt(lastChar));

//3-Prperty access [] same as chartAt

//15-concat (+) method

// let fName = "Ashish";
// let lName = "sahu";
// console.log(fName + lName);
// console.log(fName.concat(lName));
// console.log(fName.concat("", lName));
// console.log(`${fName}${lName}`);


//all mofified the orginal array by shift/unshift,pos/push
// let a=[1,2,3,4,5];
// let d=a
// let b=[4,5,6,7,8];
// // let c=a.concat(b);
// // console.log(c);
// let c=a.pop();//modify orinal array
// console.log(c);
// console.log(a.pop());
// console.log(a.pop());
// console.log(a.pop());
// console.log(d);



//16-Split()-convrt string into array.

// let yourName="Javascript is a great language";
// let a=yourName.split();
// console.log(a);

// let yourName="Javascript is a great language";
// //let a=yourName.split("");//convert all letters
// //let a=yourName.split(" ");//where find the space braek from there only like 1 is javascript then 2nd is is,
// let a=yourName.split("i");//spilit from i letter
// console.log(a);

// var txt = "a,b,c,d,e"; //string
// console.log(txt.split());
// console.log(txt.split(","));//for space inbetween use comma
// console.log(txt.split(" "));//break from the space inbetween
// console.log(txt.split(" | "));


//17-repeat()-just repeat the string the number of times we want.
// let yourName="Javascript is a great language";
// let a=yourName.repeat(3);
// console.log(a);


//18-slice()-(start,end)-extract in parts in new strings
// let yourName="Javascript is a great language";
// let a=yourName.slice(3,10);
// console.log(a);

// let yourName="Javascript is a great language";
// let a=yourName.slice(-1);
// console.log(a);  

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1,3);
// console.log(citrus);

// var str = "apple, banana, kiwi";
// let Slice = str.slice(0, 4);
// console.log(Slice);

// var str = "apple, banana, kiwi";
// let Slice = str.slice(7, -2);
// console.log(Slice);

//display only 280 character of a strings in one twitter
// let tweet = 'dkbcsjvjkjhfkdgscmbdsmvbshfkfgvsbmvbhgkfvbzmsfhsgdfhdfbsgjdgjvmkdfshfdsfkshssmsmsbvmsfhksahfksfksk kj k kh  fdvbmbfmgbrhgfmsbfmbsfksb';
// let mytweet = tweet.slice(0, 280);
// console.log(mytweet);


//check splice method in array
//syntax:months.splice(index No of the position,Number of items deleted,Add1,Add2)

//19-Substr() method-(same as slice)

// var str = "apple, banana, kiwi";
// let Slice = str.substr(0, 4);
// console.log(Slice);

// var str = "apple, banana, kiwi";
// let Slice = str.substr(-4);
// console.log(Slice);

//20-Substring() method-not accept -ve indexes(same as slice)
// var str = "apple, banana, kiwi";
// let Slice = str.substring(7,9);
// console.log(Slice);

//21-Substring() method-not accept -ve indexes(same as slice)
// var str = ["apple, banana, kiwi"];
// let Slice = str.toString();
// console.log(Slice);

//22-toString- to convert anything in string
// var str = ["a,b,c,d,e,f,g"];
// let Slice = str.toString();
// console.log(Slice);

// var str = 50;
// let Slice = str.toString();
// console.log(Slice);


//others method
// let myName = "Ashish Sahu";
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());







//Date and Time Metod(get and set)- have to set as per our wish
// let curDate = new Date();
// console.log(curDate);

// console.log(new Date());
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());
//console.log(Date.now());//total milisecond

//            (year/month/date/hour/minute/second/milisencon) sequence
// var d = new Date(2021, 0, 5, 10, 33, 30, 0);
// console.log(d.toLocaleString());
//or
// var d = new Date("Novermber 13, 2021.11:13:00")
// console.log(d.toLocaleString());
// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getDate());
// console.log(d.getDay());


//Math Object............................................

// console.log(Math.PI);

// let num = 10.234
// console.log(Math.round(num)); //round off nearby value

// console.log(Math.pow(2, 3));
//or
// console.log(2 ** 3);

// console.log(Math.sqrt(25));
// console.log(Math.abs(-55));//absolute vale convert -ve vale to +value.
// console.log(Math.ceil(4.51)); //near by number same as round
// console.log(Math.floor(4.7));

// console.log(Math.max(0, 54, 22, 112));
// console.log(Math.min(0, 54, 22, 112));
// console.log(Math.random()) //randomly change
// console.log(Math.floor(Math.random()));

// console.log(Math.trunc(2, 4, 6)); //return integer part of a number
// console.log(Math.trunc(4.6))

// to get random numbers in round digits.
// var num = "x";
// console.log(Math.round(Math.random(num) * 256));

//DOM IN JS
//1-window(global object) and document object model-DOM(child of window object)

//Destructuring
//1Array destructuring 2-object destructuring 3-function destructuring

//1Array destructuring
//swap values of two variables
//var c = 1;
//var d = 2;
//ES5
//var e = c;
//c = d;
//d = e;
//console.log(c, d);

// let [c, d] = [1, 2];
// [c, d] = [d, c];
// console.log(c, d);

//default values
// let list = ['NEWYORK', 'USA'];
// let [city, country] = list;
// console.log(city, country);

// let list = ['NEWYORK',];
// let [city, country] = list;
// console.log(city, country);//if country deleted then counrty undefined showing
//here we can use default value //default values-(if not provide then only default value used automatically)
// let list = ['London', 'England'];
// let [city, country = 'USA'] = list;
// console.log(city, country);

//2-object destructuring-

// const person = {name: 'John', age: 41};
// const {name: n, age: a} = person;
// console.log(n, a);

// var student ={name:"mohan",
// age:"28",
// hobies:["cricket","hockey"]}
// //console.log(student.age)
// //or
// const {age}=student
// console.log(age)

//use of rest and spread operator together
// var student ={name:"mohan",
// age:"28",
// hobies:["cricket","hockey"]}
// console.log(student);
// var newstudent={...student,
// age:"30"}
// console.log(newstudent);

//Default value in object destructuring
// const obj = {city: 'London', country: 'UK'}
// const {city, country = 'USA'} = obj;
// //console.log(obj);
// console.log(city,country);

//3-Function destructuring-

//ES5
// function f(arr){
//     console.log('hello ' + arr[0] + ' ' + arr[1]);
// }
// f(['Bill', 'Gates']);


//ES6
////parameter matching
// function g([firstname, lastname]){
//     console.log(`hello ${firstname} ${lastname} !`);
// }
// g(['Bill', 'Gates']);

// function h({firstname, lastname}){
//     console.log(`hello ${firstname} ${lastname} !`);
// }
// h({firstname: 'Mark', lastname: 'Zuckerberg'});

////defalut value in function destructuring-
// const increment2 = (x, y = 1) => x + y;
// console.log(increment2(5));
// console.log(increment2(5, 3));

// function greet([firstname, lastname = '']){
//     console.log(`hello ${firstname} ${lastname}`)
// };
// greet(['Bill']);

// function addup({item: item, price : price, quantity :quantity}){console.log(`Please pay ${price * quantity} for ${quantity} ${item}`);

// }
// addup({item:"banana", price:5, quantity:7});

//Default Value
// function addup({item: item="banana", price : price=0, quantity :quantity=0}){console.log(`Please pay ${price * quantity} for ${quantity} ${item}`);}
//or
// function addup({item="banana", price=0, quantity=0}){console.log(`Please pay ${price * quantity} for ${quantity} ${item}`);}
// addup({});//calling function with object argumment

// addup();//by calling with this function we need to create one more object with in the function with the same value.
// function addup({item: item="banana", price : price=5, quantity :quantity=4} = {}){console.log(`Please pay ${price * quantity} for ${quantity} ${item}`);};


//................................................................................................................................
//Rest opreator work to joint the values (spread operator -todne ka kaam..Rest operator-jodne ka kaam)
//used in parameter
//Function Rest Parameter or Rest opreator (...) allows a function to treat an indefinite number of arguments as an array:
//used when we put some parameter(a,b) in function and while calling this fiunction we put some more parameters as argument(a,b,c,d,e,f..).
//rest function consider all the parameter and convert into infinte array

//function(...name of rest function){console.log(name of rest function);}

// function rest(a,b,c,...other){console.log(other);}
// rest(1,2,3,4,5,6,7);//showing only rest value.

// function res(a,b,c,...other)
// {console.log(other)
//     return a+b+c;
// }
// const rest=res (1,2,3,4,5,6,7);//if show 2nd value in rest value.put other[2]
// console.log(rest);

// function sum(...add){console.log(add);}
// sum(1,2,3,4,5,6,7,8,9);//convert in array

// function sum(...add){console.log(...add);}
// sum(1,2,3,4,5,6,7,8,9);// convert in array and give as value
 
// function sum(...add){
// let total=0;
// for (let i of add ){ total+=i;} //(total=total+i or )
// console.log(total);
// }
// sum(1,2,3,4,5,6,7,8,9);




//check passenger details with their n numbers of belongins ( const belongins to check wheteher they have belongins )
// function pCheck(firstname, lastname, ...items){
//     const belongings = items.length>0? items : 'none';
//     console.log(`Passenger: ${firstname} ${lastname}.
// Belongings: ${belongings}`);
// }
// pCheck('Mark', 'Zuckerberg', 'Bag', 'Suitcase');

//..............................................................................................................................
//Spread operator helps in destructring the vales(spread-todne ka kaam..Rest-jodne ka kaam)
//Spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.

//Spread opretor-use of 3 dots without space(...)use both in array and object both

// const colours = ['red', 'yellow', 'orange', 'black', 'blue', 'white'];
// const myColours = ['red', 'yellow', 'orange', 'black', ];
// const myFavColour = ['blue', 'white', ...myColours];
// console.log(myFavColour);
// console.log(...colours);//in normal value
// console.log([...colours]);//in array

// const Colour = ['red', 'yellow', 'orange', 'black'];
// function getColour(colour1,colour2,colour3,colour4){
//     console.log(colour1,colour2,colour3,colour4);
// }
// getColour(...Colour)

//object literal features

//method definition-use of repeat method
// const phone = {
//     sing(i){
//         console.log("beep ".repeat(i));
//     }
// };
// phone.sing(2);

//Rest Vs Spread- Rest-used in function parameter) Vs Spread(used in function argument or while calling a function)

//object properties use of : instead of = and {}
// let myName = "ashish";
// const myBio = {
//     myName: "hope yoy doing",
//     26: "is my age"
// }
// console.log(myBio);

// let myName = "ashish";
// const myBio = {
//     [myName]: "hope yoy doing",
//     [20 + 6]: "is my age"
// }
// console.log(myBio);

// let myName = "ashish";
// let myAge = 26;
// const myBio = { myAge, myName };
// // console.log(myBio);
//or
// console.log(Object.values(myBio));

//Spread opretor-use of 3 dots without space(...)use both in array and object both

// const colours = ['red', 'yellow', 'orange', 'black', 'blue', 'white'];
// const myColours = ['red', 'yellow', 'orange', 'black', ];
// const myFavColour = ['blue', 'white', ...myColours];
// console.log(myFavColour);

//Array.prototype.includes

// const colours = ['red', 'yellow', 'orange', 'black', 'blue', 'white'];
// const isPresent = colours.includes("red")
// console.log(isPresent);

//expontentional oprator
// console.log(2 ** 3);

//String Padding-padStart and padEnd
// let msz = 'my name is ashish';
// // console.log(msz);
// console.log(msz.padStart(7));

//Object values
// const person = { name: "ashish", age: '35' };
// // console.log(Object.values(person));
// console.log(Object.entries(person));        //convert object into array
// const arrayobject = Object.entries(person);

// console.log(Object.fromEntries(arrayobject));

//Array.prototype(flatArr)Flat Array Method:

// const arr = [
//     ['A', 'B'],
//     ["C", "D"],
//     ['E', 'F'],
//     ['G', "H"],
// ];
// console.log(arr.flat());

// const arr = [
//     ['A', 'B'],
//     ["C", "D"],
//     ['E', 'F'],
//     ['G', ["I", "J"], ]
// ];
// console.log(arr.flat());

// const arr = [
//     ['A', 'B'],
//     ["C", "D"],
//     ['E', 'F'],
//     ['G', ["I", "J"], ]
// ];
// console.log(arr.flat(Infinity)); //to sync array under array

//1-BigIntgere or BigInt-use after for max calucuted nomber-use n just after the numbers and get the value of BigInt

// let oldNum = Number.MAX_SAFE_INTEGER;
// console.log(oldNum); //=9007199254740991
// console.log(9007199254740991 + 12); //give wrong value as large calculation done
// const newNum = 9007199254740991n, + 12n;
// console.log(newNum); //then BigInt will come

//Nullish coalescing opertor checks only undefined and null value only.
//Nullish coalescing opertor (??)
// let user={
//     student:{
//         name:"",
//         age: 0}
// }
// console.log(user.student.name ?? "unknown");
// console.log(user.student.age ?? "21");

//use strict-use of particular defintion,  
//strict equality(===), (==) equality - return boolean result, (=) equal to.


//......................................... Advance JS  .................................................

//Event Propogation:(Event Bubbling from bottom (most inner)to top(like div to body then head to tittle flow) and Event captruing vice versa)

//Higer Order Function =calculotr is
//Call back function=return value or add,multi,subs

//we need to creat calucutor to understand******

// const add = (a, b) => {
//     return a + b;
// }

// const subs = (a, b) => {
//     return Math.abs(a - b);
// }

// const multi = (a, b) => {
//     return a * b;
// }

// const divide = (a, b) => {
//     return a / b;
// }

// const calculator = (num1, num2, operator) => {
//     return operator(num1, num2);
// }

//console.log(calculator(5, 2, divide));

//*********************************Asyncronous JS**************************************
//Asynchronous JavaScript
//JavaScript is the single-threaded programming language. This means that the JavaScript engine has only one call stack. Therefore, it only can do one thing at a time.

//When executing a script, the JavaScript engine executes code from top to bottom, line by line. In other words, it is synchronous.

//Asynchronous means the JavaScript engine can execute other tasks while waiting for another task to complete. For example, the JavaScript engine can:

//-Request for a data from a remote server.
//-Display a spinner
//-When the data is available, display it on the webpage.
//-Hoisting - "we acn access variable and function before initilize it or put some value in it."
//use proper sequnce to get the print

//Scope chain-used to reslove the varible values which already known, ex.- value of pi-3.14

//Global Scope-at the top and pertaing to the window object

//Lexcical scoping inner(Child) function intrect or get access with parrent(outer) function but vice versa not possible.

//What is Closures..? is bundle of function + lexical envorment

//Synchronous JS-work in sequence from top to bottom (called function sequence not console )

// function two() {
//     console.log("step 2");
// }

// function one() {
//     console.log('step 1');
// }
// one();
// two();

//Asynchronous JS-use of set timmer responce as per time delay

// function two() {
//     console.log("step 2");
// }

// function one() {
//     setTimeout(() => {
//         console.log(one);
//     }, 2000);
//     console.log('step 1');
// }
// one();
// two();

//Callback function-to make the realtioship with function

// function one(Call_two) {
//     console.log('step 1 completed');
//     Call_two();
// }

// function two() {
//     console.log("step 2");
// }

// one(two);

// let order = (call_production) => {
//     console.log('step 2');

//     call_production()
// };
// let production = () => {
//     console.log("step 3");
// };

// order(production);

//Event loop-waiting time at browser or window of set timer event

//function currying-when a function instead of taking all arguments at one time takes the first one and returns a new function, 
//which takes the second one and returns a new function, which takes the third one, etc. until all arguments are completed.

//sum(5)(3)(8);

// const sum = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3);
// sum(5)(3)(8);

//.........................................................................



//...................................................................................................
//vacubulary..................
//function evoke,invoke,global execution context,excecution context,call stack,push,allocation,temporal dead zone,memoery(varriable envoiremnet),
//code(thread of excution,),key function,synchronyse,global scope,global space,scope chain,lexical envorment,tagging,memory,
//block,scope,function,syntactic,encounter this line,identifier(var n=2,n is identifier),prototipal inheritance, notation,trasition,event propogation,
//add interactive functionality,level zero enviornment,

//...........

// Important Points:
//A “higher-order function” is a function that accepts functions as parameters and/or returns a function.
//In Javascript, functions can be assigned to variables in the same way that strings or arrays can.
//They can be passed into other functions as parameters or returned from them as well.
//...................
//JavaScript functions are first-class citizens.
//This means that you can store functions in variables, pass them to other functions as arguments, and return them from other functions as values.
//uses as arguments in the other function. and as parameter too.
//function treated as values.
//we can get a return from a function as a function.
//so the ability to use functions as values and above features make function very special for JS and termed as First Class function or first class citizen.


//Call back function-when function pass it into another function the function we pass is know as Callback function.
//A callback is a function passed as an argument to another function.
//use a function and pass it into other function,the passed function is call back function.
//it give access to whole asynchronus world to the synchronus single threaded language,due to call back function we can do Asynchronus things in JS.
//One function has the resposibilty of other function to make them execute. Ex-SetTimeout , Event Listner etc..

//disadvantages of callback function-1-Callback hell, 2-Limited functionalty, 3-difficult to raed and difficult to debugg.

// setTimeout(function(){console.log("timmer");},5000)//function and 5000 is like a parameter of settimeout function
// function x(y){console.log("x");
// y();}
// x(function y (){console.log("y")})


///Event listener......................

//Event listener is a procedure in JavaScript that 'waits for an event to occur'. It listens to the event and responds accordingly to the event fires.
//the simple example of an event is a user clicking the mouse or pressing a key on the keyboard.
//Event listener allow us to add interactive functionality to HTML elements by “listening” to different events that take place on the page, such as when the user clicks a button, presses a key, or when an element loads
//What is event listener in HTML? The addEventListener() method allows to add event listeners on any HTML DOM object such as HTML elements, the HTML document, the window object, or other objects that support events, like the xmlHttpRequest object.
//The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.
//You can add many event handlers to one element.
//The addEventListener() method makes it easier to control how the event reacts to bubbling or capturing.
//You can easily remove an event listener by using the removeEventListener() method.bcz it take meomery and space in stack.

//syntax :element.addEventListener(event, function, useCapture);
// document.getElementById("clickme").addEventListener("click",function (){console.log("Hello");});

// function check(){
//     let count = 0;
//     document.getElementById("clickme").addEventListener("click", function xyz(){console.log("Hello", ++count);}
//     )}  
// check();

//The first parameter(event) is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)
//The second parameter is the function we want to call when the event occurs.
//The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.

//Difference between addEventListener Vs onclick:
//addEventListener can add multiple events to a particular element.\ onclick can add only a single event to an element. It is basically a property, so gets overwritten.
//addEventListener can take a third argument that can control the event propagation \ Event propagation cannot be controlled by onclick.
//addEventListener can only be added within <script> elements or in external JavaScript file./ onclick can be added as an HTML attribute also.
//Note that you don't use the "on" prefix for the event; use "click" instead of "onclick".(onclick is html attribute)
//HTML event handler attributes Event handlers typically have names that begin with on, for example, the event handler for the click event is onclick.
//<button id="clickme">CLICK ME</button>
//CLICK ME IS EVENT HANDLERS AND ONCLICK IS EVENT LISTNER

//Event Bubbling or Event Capturing-
//There are two ways of event propagation in the HTML DOM, bubbling and capturing.
//Event propagation is a way of defining the element order when an event occurs. 
//If you have a <p> element inside a <div> element, and the user clicks on the <p> element, which element's "click" event should be handled first?
//In bubbling the inner most element's event is handled first and then the outer: the <p> element's click event is handled first, then the <div> element's click event.
//In capturing the outer most element's event is handled first and then the inner: the <div> element's click event will be handled first, then the <p> element's click event.
//With the addEventListener() method you can specify the propagation type by using the "useCapture" parameter:
//ex-document.getElementById("myP1").addEventListener("click", function() {alert("You clicked the white element!");}, false);



//What is the difference between a promise and a callback?
//Callbacks are functions passed as arguments into other functions to make sure mandatory variables are available within the callback-function's scope,comes in callback queue. 
//Promises are placeholder objects for data that's available in the future mostly comes in microtask queue.

//Function statement Vs Function declration Vs Function Expression..?


// a();// function statement will work
// b();//function expression  will have type error as not find b in local memory space.

// //Function Statement-only statement
// function a(){console.log ("a called");}

// //Function Expression-function act like a value,can assigne to the variables.
// //Function assigned with variable is called function expression.
// var b=function (){console.log("b called");}

//Function Declration Vs Function expression..........
//major diffrence betwwn Function statement and function decration is hoisting.Function expression are not hoisted.
//We could not call b function before declration.
//We dont have function name in function expression.
//........................................................

//Named function expression-when we use a function with a name in function expression is called Named function expression

// function a(){console.log ("a called");}

// var b=function (){console.log("b called");}

// var c =function xyz(){console.log("b called");}
// a();
// b(); 
// xyz();//refrence error that xyz is not defined

//	ac 50100065362494  ₹ 354,394


// Anonymous Function-function with name is called anonymous function
// Anonymous function does not have their own identity.
// As per ecma or es6 script specification a function statemenmt should always have a name or else will get syntax error.
// Anonymous function used in place where function are used as value means can assign to a variable.
//Anonymous functions are never hoisted (loaded into memory at compilation). Named functions are hoisted (loaded into memory at compilation).

//Parameter-Also known as Param 
//This is the identifier or lable or variable or local variable in the function scope which can not be access outside of the function scope.


//Argument- the value which we pass inside a function are known as Argument while invoking a function termed as Arguments.

//Polymorphism in JavaScript refers to the concept of reusing a single piece of code multiple times.
//polyfill-means how the function been created or basic working of the function.

//....................................................................

//AJAX = Asynchronous JavaScript And XML.
//AJAX is not a programming language.
//AJAX just uses a combination of: A browser built-in XMLHttpRequest object (to request data from a web server) JavaScript and HTML DOM (to display or use the data)


//.................................................
//why we start array with index 0-Martin Richards, creator of the BCPL language (a precursor of C ), designed arrays initiating at 0 as the natural position to start accessing the array contents in the language, 
//since the value of a pointer p used as an address accesses the position p+0 in memory.
//Why the index of an array begin from 0 in Java?-Java uses zero-based indexing because c uses zero-based indexing. C uses zero-based indexing because an array index is nothing more than a memory offset, 
//so the first element of an array is at the memory it's already pointing to, *(array+0) .

//..................................................

//Debugging is figuring out why the programme is not acting the way it is expected.with the help of keyword debugger.


//Memoization- is an optimization technique that makes applications more efficient and hence faster. 
//It does this by storing computation results in cache, and retrieving that same information from the cache the next time it's needed instead of computing it again.
//use alrady stored solutions.

//....................................................................................................................
//....................................................................................................................

// 21 VIDEOS BY SAINI...........

//1-VIDEOS-everthing in js happen inside a execution context.
//JS WORK IN EXCUTION CONTEXT AND EXCUTION CONTEXT HAVE 2 cpmponents,1-Memory Compnent,2-
//1st Component IS MEMROY Component OR VARIABLE ENVIROMENTENT WHERE all the variables and key function are stored as key-value pairs.
//so its a kind of envorinement where all these variables and key functions are stored as key-value pairs like var a=10
// 2ND component IS CODE component or thread of execution where whole code is excuted or code runs at a time.
//In this code compoment place where code is excecuted "one line at a time."
//also known as Thread of execution is just like a thread where whole code executed on line at a time.
//**JS IS SYNCHRONOUS SINGLE THREADED LANGUAGE**
//can only execute one comamnd at a time in specific order and it can only go to the next line once the current line has been finished executing.
//FUNTION INVOCATION-FUNCTION WITH THIS PARENTHESIS ( ) AND BEING EXECUTED

//JavaScript engine uses a call stack to manage execution contexts: the Global Execution Context and Function Execution Contexts
//The call stack works based on the LIFO principle i.e., last-in-first-out.
//When you execute a script, the JavaScript engine creates a Global Execution Context and pushes it on top of the call stack.
//The call stack has a fixed size, depending on the implementation of the host environment, either the web browser or Node.js.
//If the number of the execution contexts exceeds the size of the stack, a stack overflow error will occur.
//JavaScript is the single-threaded programming language. This means that the JavaScript engine has only one call stack. Therefore, it only can do one thing at a time.
//JavaScript engine uses a call stack to manage execution contexts.
//The call stack use the stack data structure that works based on the LIFO (last-in first-out) principle.

// getName();
// console.log(x);
// console.log(getName);

// var x= 7;
// function getName(){console.log("NJS");}




//PARAMETER

// var x = 7;

// function getName() {
//   console.log("ashish");
// }
// getName();
// console.log(x);
// console.log(getName);

// var x = 1;


// a();
// b();
// console.log(x);

// function a() {

//     var x = 10;
//     console.log(x);
// }

// function b() {
// var x = 100;
//     console.log(x);
// }


// function a(){

// function c(){console.log(b);};
// }
// var b =10;
// a();
  



//******hoisting-"we acn access variable and function before initilize it or put some value in it."
//its default behavoiur of moving declrations to the top of the currnent scope.
//**** var are the part of global object or window object while let is not it is attched to diffrenrt space.
//while let and const are the part of diffrent memrory zone.(block scope)
// let a = 10;
// console.log(a);
// console.log(b);
// var b = 100;//undefined
//temporal dead zone is the time between from hositing to get initilize or get some value (will get refrence error)
//let-cant be duplicate shows syntex error
//const-constant is more strict then let,and it initilize in same line only will get type error.

//Scope-Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript.
//where we can access a specific variables or function in our code. 
//Types of Scope-1-Block(let,Const [{variable declarae inside cannot be accesed from outside}])
//block is also know as "Compound statement"-combining multiple js statement into a group.an we can use this group statemnt as single entity next time.
//2-Function Scope[Function abc(){statement var carname="bmw";}each function create a new scope]
//3-Global [variable decalre outside a function becaome global]

//refrence-engine try to find outspecific value before initilization and not get/sytex-dulicate value /type error--not initilise and declare in the same line.

//What is Closures..? is bundle of function + lexical envorment
//use of Closures=module desgin CanvasPattern,currying,function like once,maintaing state in async world,stetimeoust,iterators,etc

//    Closures     =    FUNCTION    +     LEXICAL ENVOIRMENT

// function x() {
//     var a = 7

//     function y() {
//         console.log(a); }
//     y();
// }
// x();


// var z = x();
// console.log(z);
// z();




// function x() {
//     var a = 7

//     function y() { console.log(a); }
//     y();
//     return y;
// }

// var z = x();
// console.log(z);
// z();

// function abc(){

//     var x = 50;

//     if(x % 3==0){console.log("A");} else{console.log("B")};
//     if(x % 5==0){console.log("A");} else{console.log("B")};
//         if(x % 3==0 || x % 5==0){console.log("A");}else{console.log("B")};
// }
// abc();

//...................................................................................

//last assign value will be iteratioed value of variable.
// function x(){
//     for (var i= 1; i<5;i++){setTimeout(function(){
//         console.log(i);
//     },i*1000);}
// }
// x();

// //by use of let
// function x(){
//     for (let i= 1; i<5;i++){setTimeout(function(){
//         console.log(i);
//     },i*1000);}
// }
// x();

//.....................................................................................

//..................................................................................................................

//Promises.................
//new method came in es6
//start with new promise
//A Promise is a JavaScript object that links producing code and consuming code
//"Producing code" is code that can take some time
//"Consuming code" is code that must wait for the result
//Why:They can handle multiple asynchronous operations easily and provide better error handling than callbacks and events bcz JS is single threaed language if jumped to the next line 
// while doing anync work will not get correct output.
//A JavaScript Promise object can be or Having 3 stages-1-Pending (having resultvalue undefined),2-Fullfilled (having resultvalue value),3-Reject((having result value error).
//promise() 1-reslove() then()
//promise()2-reject() catch
//Promise.then() takes two arguments, a callback for success and another for failure.
//fisrt hav eto take a varibale and define as new promise  
//let prom =new Promise();
//than assigne a function inti this promise //let prom =new Promise(function(){});
//than have to give 2 parameters //let prom =new Promise(function(reslove,reject){});//reslove,reject any key or condition we can choose.
//Syntax for promise:
// let prom =new Promise(function(reslove,reject){
//     if(condition){reslove();else{reject();}};
// });

//Ckeck the condition that complete value is true.

// let complete=true
// let prom =new Promise(function(reslove,reject){
//         if(complete){reslove("its done");}else{reject("not done");}}
// );
 
//     console.log(prom);// dont put semicolon while calling prom bcz its an object


//or
// function prom (complete){return new Promise(function(reslove,reject){
//     if(complete){reslove("its done");}else{reject("not done");}}
// );}
 

// let onfullfilment = (resolve)=>{console.log(resolve);}

// let onrejection = (reject)=>{console.log(reject);} 

// prom(false).then(onfullfilment).catch(onrejection);


//Ex-2
// let ram=true

// let ravan =new Promise((resolve, reject) => {if (ram){resolve("jai shree ram");}else{reject("bajrang bali");}
    
// });

// console.log(ravan);



//Mastery Course................................

// function a(person1,person2){
//     return `${person1}is now ${person2}`
// }
// a("berry","herry");
//console.log(a);


//Sandbox-A sandbox is an isolated testing environment that enables users to run programs or open files without affecting the application, system or platform on which they run. 
//Software developers use sandboxes to test new programming code. Cybersecurity professionals use sandboxes to test potentially malicious software.
//https://www.youtube.com/watch?v=j-kL75Xgw0g

//............................................................................................
//This........................................................................................
//This.."this is the object of that the function is a property of"...
//is a keyword which state self refrencing, the this keyword refers to an object.
//In an object method, this refers to the object. Alone, this refers to the global object. 
//In a function, this refers to the global object. In a function, in strict mode, this is undefined.

// var d=function (){
//     'use strict'
//     var b= function(){console.log(this);}
//     b();  
// }
// d();
//console.log(this);

// let ram={
//     firstName:"Ashish",
//     LastName:"Sahu",
//     print:function(){console.log(this.firstName + " " + this.LastName);}
    
// ram.print();

// const obj={
//     name:"billy",
//     sing(){return "lalala" + this.name},
//     singagain(){return this.sing() + "!"}
// }
// obj.sing()




// let userdetails={

//     name:"ashish",
//     lastName:"sahu",
//     printdetails:function(){console.log(this)}
// }
// userdetails.printdetails();

// let userdetails={

//     name:"ashish",
//     lastName:"sahu",
//     printdetails:function(){console.log(this.name + " " + this.lastName)}
// }
// userdetails.printdetails();

// let userdetails2={

//     name:"dipika",
//     lastName:"kandari",
//     printdetails:function(){console.log(this.name + " " + this.lastName)}
// }
// userdetails2.printdetails();

//call..apply..and bind..Methods in this..........https://www.youtube.com/watch?v=SaWTn1ZNTpo
//do not repeat in js expert view

//1-call()..

//all function have call property
//purpose of both the function is same to get print the first n last name then we can call this function with the help of "call()"..edit if any(call or === function.call())
////Function borrowring-we can borrow function from other objects and use it is with the data of some other objects.("call" n apply)
// let userdetails={

//     name:"ashish",
//     lastName:"sahu",
//     designation:"score",
//     printdetails:function(){console.log(this.name + " " + this.lastName+ " "+ this.designation)}
// }
// userdetails.printdetails();

// let userdetails2={

//     name:"dipika",
//     lastName:"kandari",
//     designation:"hero"
//     }

// userdetails.printdetails.call(userdetails2);

//scene-2 what if the first function is outside of the object as this pointed to within that object,then

// let userdetails={

//     name:"ashish",
//     lastName:"sahu",
//     designation:"score",

//     }

//     let printdetails=function(){console.log(this.name + " " + this.lastName+ " "+ this.designation);}

// printdetails.call(userdetails);

// let userdetails2={

//     name:"dipika",
//     lastName:"kandari",
//     designation:"hero"
//     }

// printdetails.call(userdetails2);    


//scene-3 if we pass new parameter,then receive or add data in function parameter then recive or add in function statement too
//if you pass these details in array then it is known as "Apply"

// let userdetails={

//     name:"ashish",
//     lastName:"sahu",
//     designation:"score",

//     }

//     let printdetails=function(state,country){console.log(this.name + " " + this.lastName+ " "+ this.designation+" "+state+" " + country);}

// printdetails.call(userdetails,"delhi","India");

// let userdetails2={

//     name:"dipika",
//     lastName:"kandari",
//     designation:"hero"
//     }

// printdetails.call(userdetails2,"mumbai","India"); 

//2-apply-it is same as call only but use when more arguments then recive as array list
//call vs apply=apply uses more number of arguments or array list.

////if you pass these details in array then it is known as "Apply"

// let userdetails={

//     name:"ashish",
//     lastName:"sahu",
//     designation:"score",

//     }

//     let printdetails=function(state,country){console.log(this.name + " " + this.lastName+ " "+ this.designation+" "+state+" " + country);}

// printdetails.call(userdetails,"delhi","India");

// let userdetails2={

//     name:"dipika",
//     lastName:"kandari",
//     designation:"hero"
//     }

// printdetails.call(userdetails2,"mumbai","India"); 
// printdetails.apply(userdetails2,["mumbai","India"]); //its in array means more parameter or multiple arguments if any

// //3-Bind=just like call only but saying dont invoke function directly as we did in call and apply just make a copy of that function and use whene ever you want


// let newex=printdetails.bind(userdetails,"delhi","India"); 
// console.log(newex);
// newex();

//diffrence between call:apply:bind
//call : binds the this value, invokes the function, and allows you to pass a list of arguments. 
//apply : binds the this value, invokes the function, and allows you to pass arguments as an array. 
//bind : binds the this value, returns a new function, and allows you to pass in a list of arguments.

//Data type
//array
// var a={x:"a", d:"b", l:"c"};
// console.log(a);
// console.log (typeof(a));
// Array.isArray([1,2,3,4]);

//object refrencing if we change the value in one object or array it will get change in all
// var a=[1,2,3,4,5];
// var d=a;
// d.push(87652);
// console.log(d);
// console.log(a);

//if we need to count seperatly then use concatinate

// var a=[1,2,3,4,5];
// var d=[].concat(a);
// d.push(87652);
// console.log(d);
// console.log(a);

//thats called object copying or clone

// let obj={
//     name:"peter"
// };
// let user=obj;
// console.log(obj);
// console.log(user);
// user.name="juice"//change in 2nd object
// console.log(obj);//change refelcting in all object.name change to juice bcz of object having refernce to the memory location. 

//if dont want to get reflect change in other object than..make the copies of objects with diffrent methods like..1-shallow copy or shalow clone,2--Deep Copy or deep clone
//1-shallow copy or shalow clone- copy only main object or first level of object-2 way
//1-assign and 2-spread operator (destrutring es6)
//1-assign-first make new object then assign new object with blanck object and main object.  

// let obj={
//     name:"peter"
// };
// let user=Object.assign({},obj);
// user.name="juice"
// console.log(obj);   
// console.log(user);//both have diffrent values.

//2-by use of spread operator

// let obj={
//     name:"peter"
// };
// let user={...obj}
// user.name="juice"
// console.log(obj);   
// console.log(user);//both have diffrent values.

//Deep clone or deep copy-if having object inside an object and so on,only one way (json.parse then json.stringify()); and not taking function and date for deep cloning in new object.
//copy object inside an object and so on or nested object
// let obj={
//     name:"peter",
//     address:{city:"lucknow",
//     State:"Up",}
// };
// let user={...obj}
// user.name="juice"
// console.log(obj);   
// console.log(user);//both have same values in city.


// let obj={
//     name:"peter",
//     address:{city:"lucknow",
//     State:"Up",}
// };
// let user={...obj}
// user.name="juice"
// user.address.city="Delhi",
// console.log(obj);   
// console.log(user);//address chnaged in both,and have same values in city.

//to solve use deep copy or deep clone,first change the object into string then string to object.(json.parse then json.stringify());

// let obj={
//     name:"peter",
//     address:{city:"lucknow",
//     State:"Up",}
// };
// let user=JSON.parse(JSON.stringify(obj));
// user.name="juice"
// user.address.city="Delhi",
// console.log(obj);   
// console.log(user);//both have diff city

//...............................................................................................

//Excersise
// function z(a,b){console.log(a*b)};
// z(4,6);
//or
//const m=(num1)=>(num2)=>num1*num2;
// m(4)(6); 
//console.log(m(4)(6));

//................................................................................................

//Prototype Inheritance https://www.youtube.com/watch?v=BYz0zUUsKwY

// const obj={name:"ashish",};
// console.log(obj);   

// const obj2={roll:25,

// proto :obj};//now we can access obj in obj2.
// console.log(obj2);


// let student ={name:"anil",
// lastName:"Sharma",
// getFullName:function(){return this.name+" "+this.lastName}}
// console.log(student.getFullName());

// let teacher ={name:"satya",
// lastName:"prakash",
// getFullName:function(){return this.name+" "+this.lastName}}
// console.log(teacher.getFullName());


//make an object and check in web tool after console showing prototype and this prototype object having some properties like constructor,hasOwnProperty,isPrototypeOf,etc

//In JavaScript, every function and object has a property named prototype by default.
//when we print the object and object itself gives some proprties named as prtotype.    
//...............................................................................................

// //constructor before es6
// function Person(first,last,a){this.firstName=first;this.lastName=last;this.age=a; this.fullName=function(){console.log(this.firstName+this.lastName);};}//Person p should be in capital letter and below P ... 3 dots saying its contructor function
// let person1=new Person("Vish","Sharma",28);//we have to put only new for contructor method before assign to a variable.
// let person2=new Person("ram","avadha",30);
// console.log(person1);   
// console.log(person2);

// let pers1={name:"ram"}
// console.log(pers1)

// function Person(first,last,a){this.firstName=first;this.lastName=last;this.age=a; this.fullName=function(){this.firstName+this.lastName};}//Person p should be in capital letter and below P ... 3 dots saying its contructor function
// let person1=new Person("Vish","Sharma",28);//we have to put only new for contructor method before assign to a variable.
// console.log(person1);  

// function Person(first,last,a){this.firstName=first;this.lastName=last;this.age=a;};//Person p should be in capital letter and below P ... 3 dots saying its contructor function

// Person.prototype.fullName=function(){console.log(this.firstName+this.lastName);}

// let person1=new Person("Vish","Sharma",28);//we have to put only new for contructor method before assign to a variable.
// let person2=new Person("ram","avadha",30);
// console.log(person1);   
// console.log(person2);


// let pers1={name:"ram"}   
// console.log(pers1)

//OOP in ES6--CLASS AND OBJECT constructor AFTER es6

//OPP=Object Oriented Programming a kind of coding methlology or style or pattern which use to short the big codes,in all the languages.
//implements dry(donot repeat yourself)
//make codes more modular and reusable, help to well organised code
//eaiser to debug as best for medium to large website projects..mostly use in frameworks.
//4 pillars of OPP..1-Encapsulation (class),2-Abstraction(hide irrelevent information),3-Inheritance and 4-Polymorphism(many forms)
//https://www.youtube.com/watch?v=o1oNo_J9XsQ

// vishwajeet{name:'a',height:'b',weight:'c',walk:'d',eat:'e'}
// jeff{name:'f',height:'g',weight:'h',walk:'i',eat:'j'}
// elon{name:'o',height:'n',weight:'m',walk:'l',eat:'k'}

//they all have commonn properties lets make group toghether and make class name as Man

//class (Man){name:'',height:'',weight:'',walk:'',eat:''}

// vishwajeet(man)
// jeff(man)
// elon(man)
//ex-vishwjeet(man)-vishwjeet is a object of man class. and man has common property like name:xxx,height,weight etc

//lets we do also have a class of all working people lets make the class of working people, where vishwajeet is also there bcz he is software enge.

//Class (software){emp name:,emp code:,year of exp:}
//so vishwjeet is a object of software class and a object of man class.
//and then inherit all the properties to child class= sub class(soft) from man class(parrent class=super class)
//.....................................................................................
//Class also k/a syntactic sugar
//Classes in JS or ES6..Class is grouping of objects 
//we made a group of object and give a class name ex-vishwjeet(man)-vishwjeet is a object of man class. and man has common property like name:xxx,height,weight etc
//ECMAScript 2015, also known as ES6, introduced JavaScript Classes.
//JavaScript Classes are templates for JavaScript Objects.(based on JS Object and JS Class).Class is grouping of objects
//Use the keyword class to create a class.
//A JavaScript class is not an object.It is a template for JavaScript objects.
//There are two types of Class in ES6: parent class/super class:
//classes are devide into property((veriables like let a,let b which need to declare inside the class only) and methods(like functions and uses only property declare inside this class).
//The class extended to create new class are know as a parent class or super class.
//child/sub classes: The class are newly created are known as child or sub class.
//Sub class inherit all the properties from parent class except constructor.

//have to make methods (like message/sorry below) and these methods will not work untill the variable assigned to this class name as new hello().
// will not able to get print value till the methods not declared with assigned varriables like a.message

// class hello{

//     message(){console.log("Hello Everyone");}//method, to call this method we have to make object for this method(make variable then assigne object)
//     sorry(){console.log("Sorry Everone");}//method
// }
// let a=new hello();//veriable let a and a become object
// a.message();
// a.sorry();

//Types of methods-3 types,=1-Constructor Method,2-Prototype 3-Static
//1-contructor(){"hello"} (syntax)
// if we make the class with same name as constructor will called autometically
//It has to have the exact name "constructor" and make n numbers of methods inside this.
//It is executed automatically when a new object is created,It is used to initialize object properties
//If you do not define a constructor method, JavaScript will add an empty constructor method.
//used when need to make variables and assigned or initilise property in to them.

// class student{constructor(){console.log("number of student");}}
// let a=new student();
// let b=new student();

// class student{constructor(){
//    let name;
// console.log("number of student");}
// hello(){(console.log("Hello"+ this.name))}}

// let a=new student();
// a.name= "ruhi";
// a.hello();

//or

// class student{constructor(kuchbhi){
//     this.studentname=kuchbhi;
//  console.log("number of student");}
//  hello(){(console.log("Hello"+ this.studentname))}}

//  let a=new student("ruhi");
//  a.hello();

// class student{constructor(name,age){
//     this.studentname=name;
//     this.studentage=age;
//  console.log("number of student");}
//  hello(){(console.log("Hello "+this.studentname + " your age is " + this.studentage))}

// static staticMethod(){
//     console.log("Static Work");
// }
// }

//  let a=new student("ruhi",25);
//  a.hello();
//  //a.staticMethod(); //error - a.staticMethod is not a function
//  student.staticMethod();
//  let b=new student("ram",35);// we can change or assigne n number of times with diffrent values

//2-Prototype-we give the name n we make them(ex-hello() above)

//3 Static Method

//before write we have to write static then name the method and directly we can not call static methods.
//we dont need class object use this static method,without object it can work.
//to invoke these function we have assign with class and then call.

//new class..es6

// class person{constructor(n,a){this.name=n;this.age=a}//its constructor method
// sayHi(){console.log("Hi");}
// static hello(){console.log("jai")}}
// let person1=new person("vish",28);
// let person2=new person("ram",30);
// person1.sayHi(); //its prototype method
// person2.sayHi();
// console.log(person1);
// console.log(person2);
// person.hello();//static method called by class not by object 
// person1.hello();//error
// person2.hello();  //error not called by object 


//Inheritance-Class.........................
//Inheritance allow a class(sub-class) to acquire the propoerties and behaviour of another class(super-class).
//inheritance is an object getting access to the propoerties and methods of another object.
//It help to reuse,customiize and enhance the existing code so it help to write a code accuretly and reduce the devlopment time.help not to repeat the code.
//Using class inheritance, a class can inherit all the methods and properties of another class.
//Inheritance is a useful feature that allows code reusability.
//To create a class inheritance, use the 'extends' keyword.A class created with a class inheritance inherits all the methods from another class.
//For other declarations, like functions, you will NOT get an error when you try to use it before it is declared,
//because the default behavior of JavaScript declarations are hoisting (moving the declaration to the top).
//Unlike functions, and other JavaScript declarations, class declarations are not hoisted.  That means that you must declare a class before you can use it:
//with the use of extends keyword we can inherit classes property and with keyword super method inherit function from parent.

// class employee{constructor(){console.log("Constructor : Employee");}}
// class manager extends employee{}
// let a=new manager();

// class employee{constructor(name){console.log("Constructor : Employee" +" "+ name );}}
// class manager extends employee{}
// let a=new manager("ashish");

// class employee{constructor(name){console.log("Constructor : Employee" +" "+ name );}}
// class manager extends employee{constructor(){console.log("Constructor : Manager");}}
// let a = new manager("aassshsi");//error came as we have to call parent(super) class method in to derived class/

// class employee{constructor(name){console.log("Constructor : Employee" +" "+ name );}}
// class manager extends employee{constructor(){ super();//we have to use super method if need to access function.//we have to use extended if need to access property.
//     console.log("Constructor : Manager");}}
// let a = new manager("aassshsi");









//..................................................................................................................


//.......................................................................................................................................
//POLYFILLS

// class MyArrays {constructor(){this.length=0;
// this.data={};}

// get(index){return this.data[index]}

// push(item){this.data[this.lenght]=item;
// this.length++;
// return this.length;}}

//  class MyArrays {constructor(){this.length=0;
// this.data={};}

// get(index){return this.data[index]}

// push(item){this.data[this.lenght]=item;
// this.length++;
// return this.length;}}

//  var a=["a","b"]
// console.log(a.push("c","d"));

   
// Array.prototype.push = function() {

//     // Use loop for multiple/any no. of elements
//     for (var i = 0; i < arguments.length; i++) {
//         this[this.length] = arguments[i];
//     }


//     // Return new length of the array
//     return this.length;
// };


// var a=["a","b"]
// console.log(a.push("c","d"));


//reverse the string

// const str="my name is khan";
// const rev=str.split('').reverse().join('');
// console.log(rev);

//or
// const str="my name is khan";
// const rev=[...str].reverse().join('');
// console.log(rev);

//merger of arrays by concat
// const a=[1,2,3,4,11,19];
// const b=[5,6,7,8];
// const c=a.concat(b);
// console.log(c);

//or concate method

// const a=[1,2,3,4,11,19];
// const b=[5,6,7,8];
// const c=[].concat(a,b);
// console.log(c);

//or by spread operator

// const a=[1,2,3,4,11,19];
// const b=[5,6,7,8];
// const c=[...a, ...b];
// console.log(c);

//or push method

// const a=[1,2,3,4,11,19];
// const b=[5,6,7,8];
// const c=a.push(...b);
// console.log(c);
// console.log(a);//(10) [1, 2, 3, 4, 11, 19, 5, 6, 7, 8]


//if you are sure about input is array then use spread method and for string use concate method

// const a=[1,2,3,4,11,19];
// const b="RAM";
// const c=[].concat(a,b);
// console.log(c);

// const a=[1,2,3,4,11,19];
// const b="RAM";
// const c=[...a, ...b];
// console.log(c);

//function working

// function sum(a,b){a*b}
// sum();//undefined

// function sum(a,b){a*b}
// sum(5,10);//undefined

// function sum(a,b){return a*b}
// console.log(sum(5,10));//


// function sum(a,b){return a;
//     return a*b}
// console.log(sum(5,10));//5

// function sum(a,b){return a * b};
// sum(5,10);//
// // console.log(sum);

// function sum(a,b){console.log(a * b);}
// sum(5,10);


// function sum(a,b){if (a>10 || b>10){return "hard";}else{return a*b;}}

// sum(5,10);//50

// function sum(a,b){if (a>10 || b>10){return "hard";}else{return a*b;}}

// sum(50,10);//hard

// function sum(a,b){a*b}
// //undefined
// sum();
// //undefined

// function sum(a,b){return a*b}
// // undefined
//sum();
//NaN

// function sum(a,b){return a*b}
// sum(5,10);//50

//copy old array in to new array

// var list=["a","b","c","d","e"];
// var copy=[].concat(list);
// console.log(copy);

//loop

// var list=["a","b","c","d","e"];

// // for (i=0;i<list.length;i++){console.log(i);}


// // var list=["a","b","c","d","e"];
// // for (i=0;i<list.length;i++){console.log(list);}

// var list=["a","b","c","d","e"];
// for (i=0;i<list.length;i++){console.log(list[i]);}

// var list=["a","b","c","d","e"];
// for (i=0;i<list.length;i++){console.log(list[i]+"!");}
 


// function sum(){var a = "hello";
// console.log(a);
// };
// sum();
//console.log(a);//cant access var a outside the function scope if need to access only functon sum scope

//default argument
//function greet(name="ram",age=30,pet="cat"){return `hello ${name} you are at ${age} , what a lovely ${pet}.`};
//console.log(greet());
//console.log(greet("jhon",50,"dog"));


//In ES6- let and const,destructring,object property,template literals,default arguments,symbol,arraow function

//compose-is act of putting two function together to form a third function,where the out of one function is the inputb of other.

// const compose=(f,g)=>(a)=>f(g(a));
// const sum=(num)=>num+1;
// const compose(sum,sum)(5);
// console.log(compose);

//double by for each
// const companies=[1,2,3,4,5,]
// companies.forEach((name)=>{console.log(name*2);});

//es-7 in 2016 introduced 2 things-1-includes(gives t/f value) and 2-expontial operator(**).

//Object Methods-to change object(string) to array...Object.values, Object.keys, Object.entries.

// var obj={name:"ram",age:25,phone:123456}
// console.log(Object.entries(obj));  
// console.log(Object.keys(obj));  
// console.log(Object.values(obj)); 

//modules comes in es6
//instantiation is when we make a copy of an object and reuse the code.(making instances or multilpe copies of an object)


//es-7/2016-1-includes method for string and array give T/F value, 2-exponetial operator(**).

//es-8/2017-1-Async await,2-string paddind,3-tranling commas,4-Object.values, 5-Object.keys, 6-Object.entries

//es-9/2018-1-Object spread operator, 2-finally(try,ctach,finally error handling), 3-for await of(async await).

//es-10/2019-1-array.flat(), 2-array.flatMap(), 3-Object.fromentries,4-trimStart(),trimEnd()(remove unwanted blanck space), 5-try and catch

//es11/2020-1-BigInt, 2-Nullish coalescing(??), 3-Optional chaining operator(?), 4-Promise.allSettled, 5-globalthis (for node).

//es-12/2021-1-repalce.All (allow replace inside the string)








