

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
}

let slideIndex = 0;
const sliderWrapper = document.getElementById('slider');
const dots = document.querySelectorAll('.dot');

function moveSlide() {
    slideIndex++;
    if (slideIndex >= 5) slideIndex = 0;
    sliderWrapper.style.transform = `translateX(-${slideIndex * 20}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex].classList.add('active');
}
setInterval(moveSlide, 3500);

