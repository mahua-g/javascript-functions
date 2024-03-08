//1
/* function greetings(){
    return 'Hello World';
}
let message = greetings();
console.log(message) ; */


//2
/* function sum(num1, num2){
    return num1+num2;
}
let result = sum(2,3);
console.log(result);

let result2 = sum(2);
console.log(result2); */ //Results in NaN
                      // This is because when sum func does not get a value for num2, 
                      // it defaults it to undefined.
                      // And JS evaluates the addition of num1 and undefined as NaN 

//IFFE (Immediately Invoked Function Expression) 
/* (function(){
    console.log("Hello!!!");
})();  */


//Closure
let greeting = (function() {
    let message = 'Closure demo';
    let getMessage = function() {
        return message;
    };

    return {
        getMessage : message, //property:value 
    };
})();
console.log(greeting.getMessage);