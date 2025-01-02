//prefer not to use var keyword
//because of issue in block scope and functional scope 
const acountId = 12355;
let acountEmail = "A@gmail.com";
var acountPassword = "12334";
acountCity = "jaipur";
let acountState;//undefind

//acountId = 7439843; not allowed ;
//console.log(acountId)
console.table([acountId,acountEmail,acountPassword,acountCity,acountState])