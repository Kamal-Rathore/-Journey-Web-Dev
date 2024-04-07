function getcheese(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const cheese = "🧀";
            console.log("here is your cheese: ",cheese);
            resolve(cheese);
    
        }, 2000);
    })
   
}

function makedough(cheese){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const dough = cheese + " 🍩";
            console.log("here is your dough: ",dough);
            resolve(dough);
        }, 2000);
    })
    
}

function bakepizza(dough){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const pizza = dough + "🍕";
            console.log("here is your pizza: ",pizza);
            resolve(pizza);
        }, 2000);
    })
    
}

getcheese().then((cheese)=>{
    console.log("got the cheese: ",cheese);
    return makedough(cheese);
}).then((dough)=>{
    console.log("got the dough: ",dough);
    return bakepizza(dough);
}).then((pizza)=>{
    console.log("got the pizza: ",pizza);
}).finally(()=>{
    console.log("here is your order!!");
});