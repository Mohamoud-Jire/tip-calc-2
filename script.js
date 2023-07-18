function calcTip(bill) {
  let tip;
  if(bill < 300 && bill > 50) {
    tip = 0.15;
  } else {
    tip = 0.2;
  }
  return bill * tip;
}
let bill = 301;
let tip = calcTip(bill);
let total = bill + tip;
console.log(`the bill was ${bill}, the tip was ${tip}, and the total is ${total}`);