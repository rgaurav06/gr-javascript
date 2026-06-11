console.log("2"===2);
console.log("2"==2);
// console.log(null>=0);

let user
console.log(typeof user)

// heap and stack memory

let play1="judo";
play2=play1;
console.log(play1);
play2="boxing";
console.log(play2);



const objectName = {
 email: "hello",
email2: "world",
 // ... more key-value pairs
};
const objectName2 = objectName
objectName.email="hi";
console.log(objectName);
console.log(objectName2);