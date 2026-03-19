window.onload = function(){

// 🔥 test data force set
localStorage.setItem("send_name","Ashik");
localStorage.setItem("send_num","01929299476");
localStorage.setItem("send_amount","500");

// load
let name = localStorage.getItem("send_name");
let number = localStorage.getItem("send_num");
let amount = localStorage.getItem("send_amount");

document.getElementById("name").innerText = name;
document.getElementById("number").innerText = number;
document.getElementById("amount").innerText = "৳" + amount;
document.getElementById("total").innerText = "৳" + amount;
document.getElementById("avatar").innerText = name.charAt(0);

}