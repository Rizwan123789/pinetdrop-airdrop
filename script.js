document.getElementById("connectWallet").addEventListener("click", function() {
    let wallet = document.getElementById("walletInput").value;
    let status = document.getElementById("status");
    
    if (wallet === "") {
        status.innerHTML = "❌ Please enter a valid wallet address";
        return;
    }

    status.innerHTML = "🔄 Connecting to Pi Network...";
    
    setTimeout(() => {
        status.innerHTML = "✅ Wallet Connected! <br> 100 PI Airdrop Claimed!";
    }, 3000);
});