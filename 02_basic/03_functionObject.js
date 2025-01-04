let myUser = {
    name:"Akanshu",
    age:"28"
}
let yourUser = {
    name:"hitesh",
    age:18
}

function myFunction(...anyOnj){
     console.log(`username: ${anyOnj.name}`)
}

myFunction(myUser,yourUser);
//console.log(result);
