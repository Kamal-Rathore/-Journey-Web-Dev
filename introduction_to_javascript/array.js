const words=['apple','banana','cherry',12,true,function hello(){console.log("hello");}];
console.log(words);
console.log(words.length);

const newwords = words;
newwords[1]='mango';
console.log(newwords);
console.log(words.indexOf('mango'));

words.push('kamal');
words.unshift('aman'); // added in the 0th index
//words.shift();  removes the first element
console.log(words);


const subarray = words.slice(2,5);
console.log(subarray);