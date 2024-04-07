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

async function orderpizza(){
    try{
const cheese  = await getcheese();
console.log("got the cheese: ",cheese);
const dough = await makedough(cheese);
console.log("got the dough: ",dough);
const pizza = await bakepizza(dough);
console.log("got the pizza: ",pizza);
    }
    catch(err){
        console.log("error occured");
    }
}

orderpizza();