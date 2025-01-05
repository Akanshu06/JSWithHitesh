const gameName = new String('hiteshkjijij-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.split("-").slice(3);
const anotherString2 = gameName.substring(1,4);
console.log(anotherString,anotherString2);