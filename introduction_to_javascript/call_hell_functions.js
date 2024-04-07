// basically it is asynchronous type of functions that is done by 
//setTimeout functions which executes after some time but is doesnot stop the working of the othe functions
// console.log("Hello!");
// console.log("kamal");
// setTimeout(function (){
//     console.log("How are you?");
// },5000);


function getcheese(callback){ // here callback acts as a fucntion
    setTimeout(() => {
        const cheese = "🧀";
        console.log("here is: ",cheese);
        callback(cheese);
    }, 2000);
}




function makedough(cheese,callback1){
    setTimeout(() => {
        const dough = cheese+"🍩";
        console.log("here is: ",dough);
        callback1(dough);
    }, 2000);
   
}

function bakepizza(dough,callback2){
    setTimeout(() => {
        const pizza = dough+"🍕";
        console.log("here is: ",pizza);
        callback2(pizza);
    }, 2000);
   
}
getcheese((cheese) =>{
makedough(cheese,(dough)=>{     
bakepizza(dough,(pizza)=>{
console.log("got the pizza: ",pizza);
});
});
});


// the above calling of the functions is caleed the deep chaining of the the functions 