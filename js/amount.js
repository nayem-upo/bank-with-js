const btnDeposit = document.getElementById('btn-deposit');
const btnWithdraw = document.getElementById('btn-withdraw');
const withdrawField = document.getElementById('withdraw-field');
const depositField = document.getElementById('deposit-field');
const depositAmountTotal = document.getElementById('deposit-amount');
const withdrawAmount = document.getElementById('withdraw-amount');
const preAvailableBalance = document.getElementById('available-balance');

btnDeposit.addEventListener('click', function () {
    const newDepositValueString = depositField.value;
    const prevDepositAmountString = depositAmountTotal.innerText;
    const prevDepositAmount = parseFloat(prevDepositAmountString)
    const newDepositValue = parseFloat(newDepositValueString);
    const currentDepositTotal = prevDepositAmount + newDepositValue;
    const availableBalanceString = preAvailableBalance.innerText
    const availableBalance = parseFloat(availableBalanceString);
    const currentBalanceTotal = availableBalance + newDepositValue;
    
    depositField.value = '';
    
    if (isNaN(newDepositValue)) {
        alert('Please provide a valid number')
        return;
    }

    depositAmountTotal.innerText = currentDepositTotal;
    preAvailableBalance.innerText = currentBalanceTotal
})

btnWithdraw.addEventListener('click', function () {
    const withdrawValueString = withdrawField.value;
    const withdrawAmountString = withdrawAmount.innerText;
    const preWithdrawAmount = parseFloat(withdrawAmountString);
    
    const preWithdrawValue = parseFloat(withdrawValueString);
    const withdrawTotal = preWithdrawValue + preWithdrawAmount;
    
    const totalBalanceString = preAvailableBalance.innerText;
    const totalBalance = parseFloat(totalBalanceString);
    const lastTotalBalance = totalBalance - preWithdrawValue;
    withdrawField.value = '';
    if (isNaN(preWithdrawValue)) {
        alert('Please provide a valid number')
        return;
    }
    if (preWithdrawValue > totalBalance) {
        alert("You can not withdraw more than available balance");
        return;
    }
    withdrawAmount.innerText = withdrawTotal;
    preAvailableBalance.innerText = lastTotalBalance;

})