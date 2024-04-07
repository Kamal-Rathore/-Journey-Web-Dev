function getvegetable(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const vegetable =" 🥕";
     
       resolve(vegetable);
        }, 2000);
    })
    
    
}

function getoil(vegetable){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const oil="🛢️"+vegetable;
      
        reject(oil);
        }, 2000);
    })
    
    
}

function makenoodles(oil){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const noodles = "🍜"+oil;
            
            resolve(noodles);
        }, 2000);
    })
    
   
}


getvegetable().then((vegetable)=>{
    console.log("got the vegetable: ",vegetable);
    return getoil(vegetable);
}).catch((oil)=>{
    console.log("error!!");
    return makenoodles(oil);
}).then(()=>{
    console.log("got the noodles: ",noodles);
}).finally(()=>{
    console.log("process ended");
})