function returnUser(){
    return new Promise((resolve, reject)=>{
        resolve({name:"vishal"})
    });
}

returnUser()
    .then((userData)=>{
        return userData.name;
    })
    .then((userName)=>{
        console.log("hello ",userName);
    })
    .catch((err)=>{
        console.log(err);
    })