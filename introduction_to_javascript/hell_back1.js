function getvegetable(callback){
    setTimeout(() => {
        const vegetable =" 🥕";
    console.log("here is your: ",vegetable);
    callback(vegetable);
    }, 2000);
    
}

function getoil(vegetable,callback1){
    setTimeout(() => {
        const oil="🛢️"+vegetable;
    console.log("here is the oil: ",oil);
    callback1(oil);
    }, 2000);
    
}

function makenoodles(oil,callback2){
    setTimeout(() => {
        const noodles = "🍜"+oil;
        console.log("here the noodles: ",noodles);
        callback2(noodles);
    }, 2000);
   
}


getvegetable((vegetable)=>{
    getoil(vegetable,(oil)=>{
        makenoodles(oil,(noodles)=>{
            console.log("got the noodles: ",noodles);
        });
    });
});
