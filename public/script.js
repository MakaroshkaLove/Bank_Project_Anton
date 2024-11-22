const toggleThemeButton = document.querySelector('.theme-toggle');
const body = document.body;
const themeIcon = document.getElementById('theme-icon');

toggleThemeButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        themeIcon.src = "https://img.icons8.com/ios-filled/50/ffffff/moon-symbol.png";
    } else {
        themeIcon.src = "https://img.icons8.com/ios-filled/50/000000/sun.png";
    }
});

const burgerMenu = document.getElementById('burger-menu');
const nav = document.getElementById('nav');

burgerMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
});


const rublesTab = document.getElementById("rublesTab");
const yuanTab = document.getElementById("yuanTab");
const depositTermSlider = document.getElementById("depositTerm");
const depositTermValue = document.getElementById("depositTermValue");
const interestRate = document.getElementById("interestRate");
const finalAmount = document.getElementById("finalAmount");

rublesTab.addEventListener("click", () => {
    rublesTab.classList.add("active-tab");
    yuanTab.classList.remove("active-tab");
    
    interestRate.value = "24.02%";
    calculateFinalAmount(1000000, 24.02, depositTermSlider.value);
});

yuanTab.addEventListener("click", () => {
    yuanTab.classList.add("active-tab");
    rublesTab.classList.remove("active-tab");
    
    interestRate.value = "20.05%";
    calculateFinalAmount(1000000, 20.05, depositTermSlider.value);
});

depositTermSlider.addEventListener("input", () => {
    depositTermValue.textContent = `${depositTermSlider.value} місяця`;
    calculateFinalAmount(1000000, parseFloat(interestRate.value), depositTermSlider.value);
});

function calculateFinalAmount(principal, rate, months) {
    let finalAmountValue = principal * Math.pow(1 + rate / 100 / 12, months);
    finalAmount.textContent = finalAmountValue.toFixed(0) + " грн";
}


calculateFinalAmount(1000000, 24.02, depositTermSlider.value);

