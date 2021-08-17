
document.getElementById('deposit-btn').addEventListener('click', function () {
    const inputFlied = document.getElementById('deposit-input');
    const inputDeposit = inputFlied.value;
    const depositAmount = parseFloat(inputDeposit);
    

    // get text deposit 
    const depositText = document.getElementById('deposit');
    const depositTotalText = depositText.innerText;
    const depositTotal = parseFloat(depositTotalText);
    depositText.innerText = depositTotal + depositAmount;
    

    // total balance add 
    const totalBalance = document.getElementById('balance-text');
    const totalBalanceText = totalBalance.innerText;
    const newBalance = parseFloat(totalBalanceText);
    totalBalance.innerText = newBalance + depositAmount;
    inputFlied.value = '';
    
})

// withdraw button 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrowInput = document.getElementById('withdraw-input');
    const inputText = withdrowInput.value;
    const withdrawBalance = parseFloat(inputText);
    

    // get withdraw text 
    const withdrawText = document.getElementById('withdraw-text');
    const withdrawTotal = withdrawText.innerText;
    const withdrawTotalBlance = parseFloat(withdrawTotal);
    withdrawText.innerText = withdrawTotalBlance + withdrawBalance;
    

    // total balance update after withdraw 
    const updateBalance = document.getElementById('balance-text');
    const updateText = updateBalance.innerText;
    const newUpdateBalance = parseFloat(updateText);
    updateBalance.innerText = newUpdateBalance - withdrawBalance;
    withdrawText.value = '';
})