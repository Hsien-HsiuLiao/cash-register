function checkCashRegister(price, cash, cid) {
  var change;
  var change2=[];
  var cashInDrawer=0;
var coinsAndDollars=[0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00];
  var moneyName=["PENNY", "NICKEL", "DIME", "QUARTER", "ONE", "FIVE", "TEN", "TWENTY", "ONE HUNDRED"];
  change=cash-price;
  for(i=0;i<arguments[2].length;i++){
    cashInDrawer=cashInDrawer+cid[i][1];
  }
 // if(cashInDrawer<change){
   // return "Insufficient Funds";
  //}
  if(cashInDrawer===change){
    return "Closed";
  }
  var index=0;
  var found;
  var chgctr;
  var changeIdx=0;
  var moneyArr=[];
  
  found=0;
 // while(change!==0){
  for (i=0;i<coinsAndDollars.length;i++){
    if (found!==1){
    if(change<coinsAndDollars[i]){
      found=1;
      index=i-1;
    }
    }
  }
  cashInDrawer=0;
  for(i=0;i<index;i++){
    cashInDrawer=cashInDrawer+cid[i][1];
  }
  if(cashInDrawer<change){
    return "Insufficient Funds";}
  
  var jlength=index;
for(j=0;j<jlength+1;j++){
  chgctr=0;
  while ((change/coinsAndDollars[index])>=1 && cid[index][1]!==0){
  change=(change-coinsAndDollars[index]).toFixed(2);
  cid[index][1]=cid[index][1]-coinsAndDollars[index];
    chgctr++;
  }
//change=  change.toFixed(2);
   //   return change;

  //change2[changeIdx][0]=moneyName[index];
  //change2[changeIdx][1]=chgctr*coinsAndDollars[index];
  //changeIdx++;
  if(chgctr!==0){
    moneyArr[0]=moneyName[index];
    moneyArr[1]=chgctr*coinsAndDollars[index];
    change2.push(moneyArr);
  moneyArr=[];}
  //moneyArr[0]=moneyName[index-1];
  //moneyArr[1]=chgctr*coinsAndDollars[index-1];
  //change2.push(moneyArr);
  //return change2;
  index--;
}
 // }
  return change2;
  if (change===0.00){
  return change2;}
  else if(change>0)
  { return "Insufficient Funds!";
       }
  // Here is your change, ma'am.
  //f change < cid[8][1]
 // if(change<cid[8][1]){
   // change2.push(cid[8]);
 // }
  //return change2;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);

