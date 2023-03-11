const NewFeature = function(number){
    return new Promise((resolve,reject)=>{
        if(!number) reject("Number required")
        
        if(number%2 ==0){
            resolve("Even Number")
        }else{
            console.log("Odd Number")
        }

    })
}