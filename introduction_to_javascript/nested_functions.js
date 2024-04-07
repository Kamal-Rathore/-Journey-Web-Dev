function addsquare(a,b){ 

    const r1= square(a);
    const r2 = square(b);
    function square(num){
        return num*num;
    }
    return r1+r2;
}

const sum = addsquare(11,12);
console.log("sum of the square is: ",sum);




function multiply(c,d){

    const s1= square(c);
    const s2= square(d);
    function square(num1){
        return num1*num1;
    }
    return s1*s2;
}

const mul = multiply(10,10);
console.log("mulitplication of numbers after their squares is: ",mul);