function showBalance() {
    const balanceText = document.getElementById('balanceText');
    balanceText.style.opacity = '0';
    setTimeout(() => {
        balanceText.innerText = "৳ 5,500.53"; 
        balanceText.style.opacity = '1';
    }, 200);
    setTimeout(() => {
        balanceText.style.opacity = '0';
        setTimeout(() => {
            balanceText.innerText = "ব্যালেন্স দেখুন";
            balanceText.style.opacity = '1';
        }, 200);
    }, 3000);