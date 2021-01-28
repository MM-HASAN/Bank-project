var loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
  const loginArea= document.getElementById('login-area');
  loginArea.style.display = "none"

  const transactionArea = document.getElementById('transaction-area');
  transactionArea.style.display = "block";
})

//deposit btn
var depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener('click', function(){
   const depositAmount = document.getElementById('deposit-amount').value;
  const depositNumber = parseFloat(depositAmount);



  const currentDeposit = document.getElementById('current_deposit').innerText;
  const currentDepositAmount = parseFloat(currentDeposit);
  const totalDeposit = depositNumber + currentDepositAmount;
  document.getElementById('current_deposit').innerText = totalDeposit;

const currentBalance = document.getElementById('current_balance').innerText;
const currentBalanceAmount = parseFloat(currentBalance);
const totalBalance = currentBalanceAmount + totalDeposit;

document.getElementById('current_balance').innerText = totalBalance;







  
})