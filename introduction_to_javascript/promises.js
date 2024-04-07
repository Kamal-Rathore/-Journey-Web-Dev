// it basically tells that the asynchronous operation is successfully completed or not 

// promise is pending , fulfill or reject
// to cretae a promise we use the promise constructor
const ticket = new Promise(function (resolve,reject){
    const isboarded = true;
    if(isboarded){
        resolve("you are  boarded successfully !!");
    }
    else{
        reject("your flight is cancelled!");
    }
})

ticket.then((data)=>{ // used for the promises completed successfully
    console.log("whooo",data);
}).catch((data)=>{
    console.log("oops!",data);
}).finally(()=>{
    console.log("pls ensure that you have the boarding pass!");
});

// to aovid the deep chaining of the functions in async-await