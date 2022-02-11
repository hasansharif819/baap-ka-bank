// deposit 
document.getElementById('deposit-button').addEventListener('click', function(){
    // update deposit amount 
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    const depositTotal = document.getElementById('deposit-total');
   const  previousDepositText =  depositTotal.innerText;
   const previousDeposit = parseFloat(previousDepositText) ;

   const totalDepositAmount = previousDeposit + depositAmount;
   depositTotal.innerText = totalDepositAmount;

//    update total balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    // console.log(totalDepositAmount);

    const newBalanceTotal = previousBalanceTotal + depositAmount;
    // console.log(totalBalanceAmount);
    balanceTotal.innerText = newBalanceTotal;

   depositInput.value = '';
})

// withdraw 

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText= withdrawInput.value;
    const newWithdraw = parseFloat(withdrawInputText);

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdraw = parseFloat(previousWithdrawText);
    const totalWithdrawAmount = previousWithdraw + newWithdraw;
    withdrawTotal.innerText = totalWithdrawAmount;

    // update balance after withdraw 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    // console.log(totalDepositAmount);

    const newBalanceTotal = previousBalanceTotal - newWithdraw;
    // console.log(totalBalanceAmount);
    balanceTotal.innerText = newBalanceTotal;

    withdrawInput.value = '';
})