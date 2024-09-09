const accountID = 98;
let accountMAIL = "abhishekkajla5511@gmail.com"
var pass = "12534";

accountCITY = "tokyo"

let accountSTATE

// accountID = 2

console.log(accountID);
// {therefore we cannot change const varibale value}

accountMAIL = "abhishekkajla@gmail.com"

pass = "09798"

accountCITY = "Shibuya"

console.table([accountID,accountMAIL,pass,accountCITY,accountSTATE])
// now we dont use var keyword to define the varibles because earlier there used to be the problem regarding the scope of the variable. var keyword doesnt follow the scope rules hence changing a value changes all the values of the varibles of the variable defined in the var keyword.
// because of block and functional scope VAR is not used


// we acn aslo define a variables without defining the type of variable keywords. but it is not good. so dont define directly.

// if we dont give a value to a variable then it would be defined as undefined