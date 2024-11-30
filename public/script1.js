let expensesChart;
const expenseCategories = ["Комунальні послуги", "Інтернет", "Мобільний зв'язок", "Інше"];
const expenseData = [0, 0, 0, 0];

function updatePaymentAccounts() {
    const paymentAccountSelect = document.getElementById("payment-account");
    paymentAccountSelect.innerHTML = "";

    accounts.forEach(account => {
        paymentAccountSelect.innerHTML += `<option value="${account.name}">${account.name} (Баланс: ${account.balance.toFixed(2)} ₴)</option>`;
    });


    console.log("Список рахунків для платежів оновлено:", accounts, paymentAccountSelect.innerHTML);
}

function updateChart() {
    if (expensesChart) {
        expensesChart.destroy();
    }

    const ctx = document.getElementById("expensesChart").getContext("2d");
    expensesChart = new Chart(ctx, {
        type: "pie",
        data: {
            labels: expenseCategories,
            datasets: [{
                label: "Витрати (₴)",
                data: expenseData,
                backgroundColor: [
                    "#3498db",
                    "#1abc9c",
                    "#e74c3c",
                    "#9b59b6",
                ],
            }],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            return `${tooltipItem.label}: ${tooltipItem.raw.toFixed(2)} ₴`;
                        }
                    }
                }
            },
        },
    });
}

function updateExpenseStatistics(service, amount) {
    switch (service) {
        case "Комунальні послуги":
            expenseData[0] += amount;
            break;
        case "Інтернет":
            expenseData[1] += amount;
            break;
        case "Мобільний зв'язок":
            expenseData[2] += amount;
            break;
        default:
            expenseData[3] += amount;
    }
    updateChart();
}



document.getElementById("payment-form").addEventListener("submit", e => {
    e.preventDefault();

    const accountName = document.getElementById("payment-account").value;
    const service = document.getElementById("service").value;
    const amountInput = document.getElementById("amount")?.value?.trim() || ""; 
    console.log("Текущее значение поля amount:", amountInput || "Пусто"); 
    const amount = parseFloat(amountInput); 

    console.log("Текущая сумма перед отправкой:", document.getElementById("amount").value); 
    console.log("Текущая сумма (amountInput):", amountInput);  
    console.log("Преобразованное значение суммы (amount):", amount);  

    if (!accountName) {
        alert("Виберіть рахунок для оплати!");
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        alert("Введіть коректну суму!");
        return;
    }

    const selectedAccount = accounts.find(account => account.name === accountName);

    if (!selectedAccount) {
        alert("Рахунок не знайдено!");
        return;
    }

    console.log("Залишок рахунку:", selectedAccount.balance);

    if (selectedAccount.balance >= amount) {
        selectedAccount.balance -= amount;
        transactions.push({ description: `Оплата за ${service}`, amount: -amount, type: "expense" });

        updateAccounts();
        updateTransactionList();
        updateExpenseStatistics(service, amount);
        alert("Оплату виконано!");
    } else {
        alert("Недостатньо коштів!");
    }
});





const transactions = [];
const accounts = [
    { name: "Поточний рахунок", balance: 54720.5 },
    { name: "Ощадний рахунок", balance: 150000 },
];

function showSection(sectionId) {
    document.querySelectorAll(".content-section").forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById(sectionId).classList.add("active");

    if (sectionId === "payments") {
        const paymentForm = document.getElementById("payment-form");
        paymentForm.reset();

        document.getElementById("amount").value = "";  
        document.getElementById("payment-account").selectedIndex = 0;  

        console.log("Форма платежів очищена");
    }
}




function updateTransactionList() {
    const transactionList = document.getElementById("transaction-list");
    transactionList.innerHTML = "";
    transactions.forEach(transaction => {
        const transactionItem = document.createElement("div");
        transactionItem.className = `transaction-item ${transaction.type}`;
        transactionItem.innerHTML = `
            <span>${transaction.description}</span>
            <span>${transaction.amount > 0 ? `+${transaction.amount} ₴` : `${transaction.amount} ₴`}</span>
        `;
        transactionList.appendChild(transactionItem);
    });
}

function updateAccounts() {
    const fromSelect = document.getElementById("from-account");
    const toSelect = document.getElementById("to-account");
    const accountsContainer = document.getElementById("accounts-container");

    fromSelect.innerHTML = "";
    toSelect.innerHTML = "";
    accountsContainer.innerHTML = "";

    accounts.forEach(account => {
        fromSelect.innerHTML += `<option>${account.name}</option>`;
        toSelect.innerHTML += `<option>${account.name}</option>`;

        const accountItem = document.createElement("div");
        accountItem.className = "account-card";
        accountItem.innerHTML = `
            <h3>${account.name}</h3>
            <p>Баланс: ${account.balance.toFixed(2)} ₴</p>
        `;
        accountsContainer.appendChild(accountItem);
    });
}

document.getElementById("add-account-form").addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("account-name").value;
    const balance = parseFloat(document.getElementById("initial-balance").value);

    if (name && !isNaN(balance)) {
        accounts.push({ name, balance });
        updateAccounts();
        updatePaymentAccounts();
        alert("Рахунок додано!");
        e.target.reset();
    } else {
        alert("Введіть коректні дані!");
    }
});

document.getElementById("transfer-form").addEventListener("submit", e => {
    e.preventDefault();

    const from = document.getElementById("from-account").value;
    const to = document.getElementById("to-account").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (from !== to && amount > 0) {
        const fromAccount = accounts.find(acc => acc.name === from);
        const toAccount = accounts.find(acc => acc.name === to);

        if (fromAccount.balance >= amount) {
            fromAccount.balance -= amount;
            toAccount.balance += amount;

            transactions.push({ description: `Переказ з ${from}`, amount: -amount, type: "expense" });
            transactions.push({ description: `Переказ на ${to}`, amount: amount, type: "income" });

            updateAccounts();
            updateTransactionList();
            updatePaymentAccounts();
            alert("Переказ виконано!");
        } else {
            alert("Недостатньо коштів!");
        }
    } else {
        alert("Введіть коректні дані!");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    updateAccounts();
    updateTransactionList();
    updateChart();
    updatePaymentAccounts();
});