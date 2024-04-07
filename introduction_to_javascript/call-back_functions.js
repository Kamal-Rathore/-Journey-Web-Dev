// arrow functions introduced in the 2015 used in the ES6 version

const greet = (count)=>{
    for(let i=0;i<count;i++){
    console.log("hello world");
}
}
greet(3);


// for the single statemtnt
const square=(num)=>num*num;
console.log(square(3));

// with curly braces
const square1=(num)=>{return num*num
};
console.log(square1(3));


// call back functions means passing other functions as a parameter
const calculate = (a,b,operation)=>{
return operation(a,b);
}

const mul = calculate(9,3,function operation(num1,num2){
    return num1*num2;
})
console.log(mul);


// another mehtod of using call back functions
function subs(a,b){
    return a-b;
}

const sub1 = calculate(10,5,subs);
console.log(sub1);

// find functions is used to return the value that are used for finding particular occur first in the list

const a= [1,2,-3,-2,0,9,8,7];

const firstneg = (num2)=>{
return num2<0;
}

const result = a.find(firstneg);
console.log(result)


const result1 = a.findIndex(firstneg);
console.log(result1)


a.forEach((num)=>{
    console.log("array num is: ",num);
})