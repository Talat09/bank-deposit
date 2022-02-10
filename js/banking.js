document.getElementById('deposit-btn').addEventListener('click', function () {
    // give input deposit 
    const depositField = document.getElementById('deposit-amount');
    const newDepositAmount = depositField.value;
    console.log(newDepositAmount)
    // old 
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmount = depositTotal.innerText;
    console.log(previousDepositAmount)

    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);
    // console.log(newDepositTotal)
    depositTotal.innerText = newDepositTotal;

    //update account Balance


    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmount = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalanceAmount) + parseFloat(newDepositAmount);
    balanceTotal.innerText = newBalanceTotal;
    //clear deposit input field
    depositField.value = '';

})



//handle withdraw handler part

//give input withdarw
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-amount');
    const newWithdrawAmount = withdrawField.value;
    console.log(newWithdrawAmount)

    // find old withdraw amount
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmount = withdrawTotal.innerText;
    console.log(previousWithdrawAmount);

    const newWithdrawTotal = parseFloat(previousWithdrawAmount) + parseFloat(newWithdrawAmount);
    withdrawTotal.innerText = newWithdrawTotal;

    //after withdraw balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmount = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(previousBalanceAmount) - parseFloat(newWithdrawAmount);
    balanceTotal.innerText = newBalanceTotal;
    //clear withdraw input field
    withdrawField.value = '';
})
