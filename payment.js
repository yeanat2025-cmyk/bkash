// URL থেকে data নেওয়া
const params = new URLSearchParams(window.location.search);

let name = params.get("name") || "Shop Name";
let number = params.get("number") || "01XXXXXXXXX";
let amount = params.get("amount") || "0";

// UI তে বসানো
document.getElementById("name").innerText = name;
document.getElementById("number").innerText = number;
document.getElementById("amount").innerText = "৳" + amount;
document.getElementById("total").innerText = "৳" + amount;


// PIN SYSTEM
let pinInput = document.getElementById("pin");

function press(num){
if(pinInput.value.length < 5){
pinInput.value += num;
}
}

function del(){
pinInput.value = pinInput.value.slice(0,-1);
}