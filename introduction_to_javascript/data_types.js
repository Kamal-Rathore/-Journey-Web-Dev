let a=12;
a=a+1;
console.log("the value of a is: ",a);
console.log("the type of a is: ",typeof(a));

 a = "name";
 a=a+1;
 console.log("the value of a is: ",a);
 console.log("type: ",typeof(a));

 a=false;
 console.log("type: ",typeof(a));

 a=String(a); // typecast
 console.log("type: ",typeof(a));

 // in javascript all nonxero values are true and zero values are always false

 let b=15;
 console.log("the value of b is: ",b);
 Boolean(b); // it only changes the type of b not the value of b because still it is not assigned
 console.log("the value of b is: ",b);
 b=Boolean(b);
 console.log("the value of b is: ",b);
 let c=0;
 c=Boolean(c);
 console.log("the value of c is: ",c);
 let num="hello"; // string not converted to number it gives the nan
 num=Number(num);
 console.log("value of num is: ",num);

 let d; // undefined
 console.log("the value of d is: ",d);
 d=null;
 console.log("the value of d is: ",d);
 