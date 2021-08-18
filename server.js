//shamelessly stolen example array
const accountBalanceHistory = [{
  monthNumber: 0, // current month
  account: {
      balance: {
          amount: 0
      },
  },
},
{
  monthNumber: 1, // last month
  account: {
      balance: {
          amount: 100
      },
  },
},
{
  monthNumber: 2, // two months ago
  account: {
      balance: {
          amount: 200
      },
  },


}
]

//Ideally, we would validate the object to ensure that it contains A - the correct properties and B - that those properties are of the correct type. 
const accountTypeChecker = (accountBalanceHistory) => {
//first we reverse the array so we can deal with it in a more useful order.
let revArray = accountBalanceHistory.reverse();
let Diffrences = [];
let result;
for (var i = 0; i < revArray.length; i++) {
  // if this is the last iteration of the array
  if ((i + 1) == (revArray.length)) {
      console.log("Last item, no more operations possible");
      //check if the diffrences are the same
      Diffrences.every(e => e === Diffrences[0]) ? result = "B" : result = "A";
      break;
  }
  //get next position
  let n = i + 1;
  Diffrences.push(revArray[i].account.balance.amount - revArray[n].account.balance.amount);
}

return result;
};

console.log(accountTypeChecker(accountBalanceHistory));