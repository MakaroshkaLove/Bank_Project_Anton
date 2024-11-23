document.addEventListener("DOMContentLoaded", function () {
    const loadingScreen = document.getElementById("loading-screen");
    const mainContent = document.getElementById("main-content");
    const toggleThemeButton = document.querySelector('.theme-toggle');
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    const languageSwitcher = document.getElementById("languageSwitcher");
    const translations = {
        en: {
            "Курси валют": "Exchange Rates",
            "Перекази та поповнення": "Transfers and Top-ups",
            "Підтримка": "Support",
            "Особистий кабінет": "Personal Account",
            "Дебетова карта Lime кешбеком гривнями на все": "Debit Card with Cashback in Local Currency",
            "Виберіть категорії підвищеного кешбеку під час оформлення картки до 31 жовтня. Отримуйте 10% замість 5% до кінця листопада.": "Choose higher cashback categories until October 31. Get 10% instead of 5% till November.",
            "Оформити картку": "Apply for a Card",
            "Дебетові карти": "Debit Cards",
            "Кредитні картки": "Credit Cards",
            "Відкрийте вклад з поповненням та частковим вилученням. Щомісяця отримуйте відсотки на картку чи вклад.": "Open a deposit with replenishment and partial withdrawal. Receive monthly interest on a card or deposit.",
            "Кредити": "Loans",

            "Інвестиції F-Банку": "Investments of F-Bank",
            "Український інвестиційний чемпіонат із загальним призовим фондом 150 000 000 ₴.": "Ukrainian investment championship with a total prize fund of 150,000,000 ₴.",
            "Докладніше": "Read more",
            "Відкрити вклад": "Open the attachment",
            "Сервіси та послуги": "Services and services",
            "Курси валют": "Exchange rates",
            "Переказ між своїми рахунками, оплата послуг та зняття готівки у сервісах F-Банку.": "Transfer between your accounts, pay for services and withdraw cash from F-Bank services.",
            "Перекази та поповнення": "Transfers and top-ups",
            "З картки на карту або на рахунок F-Банку.": "From card to card or to F-Bank account.",
            "Поповнити або перевести": "Top up or transfer",
            "До 5000 ₴ за рекомендацією друзям.": "Up to 5000 ₴ on the recommendation of friends.",
            "Дивитися": "Watch",
            "Додатково": "Additionally",
            "Допомога": "Help",
            "Відповідаємо на запитання щодо всіх продуктів.": "We answer questions about all products.",
            "F-Банк Відгуки": "F-Bank Reviews",
            "Вибирайте продукти F-Банк, магазини, ресторани, сервіси та бренди на основі реальних відгуків.": "Choose F-Bank products, shops, restaurants, services and brands based on real reviews.",
            "Приведи друга": "Bring a friend",  
            "Вклади": "Deposits",
            "Рекомендовані продукти": "Recommended products",
            "Інвестиції": "Investments",
            "АТ «FБанк» використовує файли «cookie» з метою персоналізації сервісів...": "JSC «FBank» uses cookies to personalize services...",
            "© 2024-2024, АТ «FБанк», офіційний сайт.": "© 2024-2024, JSC «FBank», official website.",
            "Курси валют": "Exchange Rates",
            "Перекази та поповнення": "Transfers and Top-ups",
            "Підтримка": "Support",
            "Особистий кабінет": "Personal Account",
            "Курси популярних валют для приватних осіб": "Exchange rates for individuals",
            "При переведенні між своїми рахунками та оплаті послуг в сервісах F‑Банку. Дійсні на 20:08 по Україні, 20 листопада 2024": "When transferring between your accounts and paying for services in F-Bank services. Valid at 20:08 in Ukraine, November 20, 2024.",
            "Валюта": "Currency",
            "Продати": "Sell",
            "Введіть кількість для переведення:": "Enter amount to transfer:", 
            "Купити": "Buy",
            "Сума": "Amount",
            "Виберіть валюту для переведення:": "Select currency for transfer:",
            "Виберіть валюту для отримання:": "Select currency to receive:",
            "Введіть кількість для переведення:": "Enter amount to transfer:",
            "Перевести": "Convert",
            "Курси валют": "Exchange Rates",
            "Перекази та поповнення": "Transfers and Top-ups",
            "Підтримка": "Support",
            "Особистий кабінет": "Personal Account",
            "Кредитні картки": "Credit Cards",
            "Кредитні картки - це платіжні картки, що дозволяють оплачувати покупки за рахунок коштів банку. Розплачуйтеся кредиткою та отримуйте кешбек бонусами за будь-які покупки.": 
            "Credit cards are payment cards that allow you to make purchases using bank funds. Pay with a credit card and get cashback bonuses for any purchases.",
            "Виберіть картку з лімітованим дизайном": "Choose a card with a limited design",
            "Кредитна картка «Платинум»": "Platinum Credit Card",
            "Наша найкраща кредитна картка в рідкісному дизайні. Рішення за 2 хвилини, доставимо безкоштовно": 
            "Our best credit card in a rare design. Decision in 2 minutes, free delivery.",
            "До 1 000 000 ₴": "Up to 1,000,000 ₴",
            "Кредитний ліміт": "Credit Limit",
            "До 55 днів": "Up to 55 days",
            "Безвідсотковий період": "Grace period",
            "590 ₴ на рік": "590 ₴ per year",
            "Вартість обслуговування": "Service fee",
            "Оформити картку": "Apply for a Card",
            "© 2024-2024, АТ «FБанк», офіційний сайт.": "© 2024-2024, JSC \"F-Bank\", official website.",
            "З розширеними можливостями": "With extended capabilities",
            "Кредитна картка Platinum Premium": "Platinum Premium Credit Card",
            "Кешбек гривнями, страховка в поїздках, доступ до бізнес-залів та великий кредитний ліміт": 
            "Cashback in local currency, travel insurance, lounge access, and high credit limit",
            "До 2 000 000 ₴": "Up to 2,000,000 ₴",
            "Кешбек на місяць": "Monthly Cashback",
            "1 990 ₴ на місяць": "1,990 ₴ per month",
            "З можливістю не платити": "With an option not to pay",
            "АТ «FБанк» використовує файли «cookie» з метою персоналізації сервісів та підвищення зручності користування вебсайтом. «Cookie» — це невеликі файли, що містять інформацію про попередні відвідування вебсайту. Якщо ви не хочете використовувати файли «cookie», змініть налаштування браузера.":
    "F-Bank uses cookies to personalize services and improve website usability. Cookies are small files that contain information about previous website visits. If you don't want to use cookies, change your browser settings.",
    "© 2024-2024, АТ «FБанк», офіційний сайт.": "© 2024-2024, F-Bank, official website.",
            "АТ «FБанк» використовує файли «cookie» з метою персоналізації сервісів та підвищення зручності користування вебсайтом.": "F-Bank uses cookies to personalize services and improve user experience.",
            "© 2024-2024, АТ «FБанк», офіційний сайт.": "© 2024-2024, F-Bank JSC, official website.",
    "Курси валют": "Exchange Rates",
    "Перекази та поповнення": "Transfers and Top-ups",
    "Підтримка": "Support",
    "Особистий кабінет": "Personal Account",
    "Кредити на будь-які цілі": "Loans for Any Purpose",
    "Гроші без довідок та поручителів на купівлю квартири, ремонт, відпочинок та інші витрати. Зручний розрахунок на калькуляторі та оформлення онлайн.": 
        "Money without certificates and guarantors for buying an apartment, renovation, vacation, and other expenses. Convenient calculator calculation and online application.",
    "На будь-які цілі": "For Any Purpose",
    "Кредит готівкою": "Cash Loan",
    "Гроші на будь-які покупки без довідок про доходи та поручителів. Потрібен лише паспорт":
        "Money for any purchase without income certificates or guarantors. Only a passport is needed.",
    "До 30 000 000 ₴": "Up to 30,000,000 ₴",
    "Сума кредиту": "Loan Amount",
    "До 15 років": "Up to 15 years",
    "До 5 років": "Up to 5 years",
    "Строк кредиту": "Loan Term",
    "Безкоштовно": "Free",
    "Привеземо картку – гроші будуть на ній": "We’ll deliver the card – the money will be on it",
    "Розрахувати": "Calculate",
    "Автолюбителям": "For Car Lovers",
    "Автокредит": "Car Loan",
    "Кредит готівкою на покупку авто - нового або з пробігом. Без довідок про доходи та поручителів — потрібен лише паспорт.":
        "Cash loan for buying a car - new or used. Without income certificates or guarantors — only a passport is needed.",
    "До 8 000 000 ₴": "Up to 8,000,000 ₴",
    "0 ₴": "0 ₴",
    "Початковий внесок": "Initial Payment",
    "АТ «FБанк» використовує файли «cookie» з метою персоналізації сервісів та підвищення зручності користування вебсайтом. «Cookie» — це невеликі файли, що містять інформацію про попередні відвідування вебсайту. Якщо ви не хочете використовувати файли «cookie», змініть налаштування браузера.":
        "F-Bank uses cookies to personalize services and improve website usability. Cookies are small files that contain information about previous website visits. If you don't want to use cookies, change your browser settings.",
        "© 2024-2024, АТ «FБанк», офіційний сайт.": "© 2024-2024, F-Bank, official website.",
        "Курси валют": "Exchange Rates",
        "Перекази та поповнення": "Transfers and Top-ups",
        "Підтримка": "Support",
        "Особистий кабінет": "Personal Account",
        "Кредити на будь-які цілі": "Loans for Any Purpose",
        "Гроші без довідок та поручителів на купівлю квартири, ремонт, відпочинок та інші витрати. Зручний розрахунок на калькуляторі та оформлення онлайн.": 
            "Money without certificates and guarantors for buying an apartment, renovation, vacation, and other expenses. Convenient calculator calculation and online application.",
        "На будь-які цілі": "For Any Purpose",
        "Кредит готівкою": "Cash Loan",
        "Гроші на будь-які покупки без довідок про доходи та поручителів. Потрібен лише паспорт":
            "Money for any purchase without income certificates or guarantors. Only a passport is needed.",
        "До 30 000 000 ₴": "Up to 30,000,000 ₴",
        "Сума кредиту": "Loan Amount",
        "До 15 років": "Up to 15 years",
        "До 5 років": "Up to 5 years",
        "Строк кредиту": "Loan Term",
        "Безкоштовно": "Free",
        "Привеземо картку – гроші будуть на ній": "We’ll deliver the card – the money will be on it",
        "Розрахувати": "Calculate",
        "Автолюбителям": "For Car Lovers",
        "Автокредит": "Car Loan",
        "Кредит готівкою на покупку авто - нового або з пробігом. Без довідок про доходи та поручителів — потрібен лише паспорт.":
            "Cash loan for buying a car - new or used. Without income certificates or guarantors — only a passport is needed.",
        "До 8 000 000 ₴": "Up to 8,000,000 ₴",
        "0 ₴": "0 ₴",
        "Початковий внесок": "Initial Payment",
        "АТ «FБанк» використовує файли «cookie» з метою персоналізації сервісів та підвищення зручності користування вебсайтом. «Cookie» — це невеликі файли, що містять інформацію про попередні відвідування вебсайту. Якщо ви не хочете використовувати файли «cookie», змініть налаштування браузера.":
            "F-Bank uses cookies to personalize services and improve website usability. Cookies are small files that contain information about previous website visits. If you don't want to use cookies, change your browser settings.",
            "© 2024-2024, АТ «FБанк», офіційний сайт.": "© 2024-2024, F-Bank, official website.",
            "Курси валют": "Exchange Rates",
            "Перекази та поповнення": "Transfers and Top-ups",
            "Підтримка": "Support",
    
            "Для дітей": "Для дітей",
            "Дитяча карта «Джуніор»": "Junior's baby card",
            "Дебетова картка для дітей віком до 14 років. Готує до дорослого життя, вчить витрачати гроші з розумом та самостійно збирати.": "Debit card for children under 14 years of age. He prepares for adulthood, teaches to spend money crazy and collect on his own.",
            "Кешбек до 30%": "Cashback up to 30%",
            "За покупки за спецпропозиціями": "For special proposal purchases",
            "Бонусами за інші покупки": "Bonuses for other purchases",
            "1% кешбека": "1% Cashback",
            "0 ₴ в місяць": "0 ₴ per month",
            "Вартість обслуговування": "The cost of service",
    
            "Особистий кабінет": "Personal Account",
            "Дебетові карти": "Debit Cards",
            "Дебетова карта Lime кешбеком гривнями на все": "Debit Card with Cashback in Local Currency",
            "Для покупок": "For Shopping",
            "Преміальна карта Lime Premium": "Premium Lime Card",
            "Перекази до 100 000 ₴ на місяць...": "Transfers up to 100,000 ₴ per month...",
            "До 60 000 ₴/міс": "Up to 60,000 ₴/month",
            "Кешбек від банку та партнерів": "Cashback from the bank and partners",
            "Оформити картку": "Apply for a Card",
            "АТ «FБанк» використовує файли «cookie» з метою персоналізації сервісів та підвищення зручності користування вебсайтом. «Cookie» — це невеликі файли, що містять інформацію про попередні відвідування вебсайту. Якщо ви не хочете використовувати файли «cookie», змініть налаштування браузера.":
            "F-Bank uses cookies to personalize services and improve website usability. Cookies are small files that contain information about previous website visits. If you don't want to use cookies, change your browser settings.",
            "© 2024-2024, АТ «FБанк», офіційний сайт.": "© 2024-2024, F-Bank, official website.",
            "Курси валют": "Exchange Rates",
            "Перекази та поповнення": "Transfers and Top-ups",
            "Підтримка": "Support",
            "Особистий кабінет": "Personal Account",
            "Заробляйте до 5000 ₴ за запрошення друзів до F-Банку": "Earn up to 5000 ₴ by inviting friends to F-Bank",
            "Нарахуємо грошовий бонус за кожного друга.": "We will credit a cash bonus for each friend.",
            "Запрошуйте друзів в один клік та заробляйте": "Invite friends with one click and earn",
            "Авторизуйтесь": "Log in",
            "Якщо у вас вже є картка F-Банку, авторизуйтесь нижче. Якщо карти F-Банку ще немає, оформіть картку та почніть заробляти": 
            "If you already have a T-Bank card, log in below. If you don't have an F-Bank card, apply for one and start earning",
            "Поділіться посиланням": "Share the link",
            "Виберіть зручний спосіб надіслати посилання другу: соцмережі, месенджери, СМС або на електронну пошту": 
            "Choose a convenient way to send the link to a friend: social networks, messengers, SMS, or email",
            "Отримайте гроші": "Receive money",
            "Зарахуємо вам на карту F-Банку до 5000 ₴ за кожного друга, який оформить продукт та почне ним користуватися":
            "We will credit your F-Bank card with up to 5000 ₴ for each friend who applies for a product and starts using it",
            "АТ «FБанк» використовує файли «cookie» з метою персоналізації сервісів та підвищення зручності користування вебсайтом. «Cookie» — це невеликі файли, що містять інформацію про попередні відвідування вебсайту. Якщо ви не хочете використовувати файли «cookie», змініть налаштування браузера.":
            "F-Bank uses cookies to personalize services and improve website usability. Cookies are small files that contain information about previous website visits. If you don't want to use cookies, change your browser settings.",
            "© 2024-2024, АТ «FБанк», офіційний сайт.": "© 2024-2024, F-Bank, official website.",
            "Курси валют": "Currency Rates",
            "Перекази та поповнення": "Transfers and Top-ups",
            "Підтримка": "Support",
            "Особистий кабінет": "Personal Cabinet",
            "Беріть участь у РІЧ до 29 листопада": "Join RICH until November 29",
            "Український інвестиційний чемпіонат – серія турнірів із загальним призовим фондом 150 000 000 ₴.":
                "Ukrainian Investment Championship – a series of tournaments with a total prize fund of 150,000,000 ₴.",
            "Як заробляти": "How to Earn",
            "Купуйте дешевше, продавайте дорожче": "Buy Low, Sell High",
            "Акції, які зростатимуть у ціні.": "Stocks that will increase in value.",
            "Отримуйте дохід до 23% та регулярні виплати": "Earn up to 23% and regular payouts",
            "FPAY - біржовий фонд F-Банку зі стабільними щомісячними виплатами без комісії.":
                "FPAY is an F-Bank exchange fund with stable monthly payouts and no fees.",
            "Отримуйте регулярні виплати в вигляді дивідендів і купонів":
                "Receive regular payments in the form of dividends and coupons",
            "Великі компанії діляться прибутком з інвесторами, що дозволяє отримувати стабільний дохід.":
                "Large companies share profits with investors, allowing them to earn stable income.",
            "Відкрити вклад легко": "Opening a deposit is easy",
            "Заповніть заявку онлайн. Потрібен лише паспорт і телефон":
                "Fill out the application online. Only a passport and phone are required.",
            "Відкриємо рахунок за 5 хвилин. Якщо біржа закрита, то відкриємо рахунок наступного торгового дня":
                "We will open an account in 5 minutes. If the exchange is closed, we will open the account on the next trading day.",
            "Привеземо всі документи. Якщо ви клієнт F-Банку, підпишіть їх онлайн":
                "We will deliver all the documents. If you are an F-Bank client, sign them online.",
            "АТ «FБанк» використовує файли «cookie» з метою персоналізації сервісів та підвищення зручності користування вебсайтом. «Cookie» — це невеликі файли, що містять інформацію про попередні відвідування вебсайту. Якщо ви не хочете використовувати файли «cookie», змініть налаштування браузера.":
                "PJSC 'F-Bank' uses cookies to personalize services and improve website usability. Cookies are small files containing information about previous visits to the website. If you do not want to use cookies, change your browser settings.",
            "© 2024-2024, АТ «FБанк», офіційний сайт.": "© 2024-2024, PJSC 'F-Bank', official website.",
            "Курси валют": "Currency Rates",
            "Перекази та поповнення": "Transfers and Top-ups",
            "Підтримка": "Support",
            "Особистий кабінет": "Personal Cabinet",
            "Переказ з карти на карту": "Transfer from Card to Card",
            "Будь ласка, заповніть усі поля та натисніть «Переказати»": "Please fill out all fields and click 'Transfer'",
            "З карти": "From Card",
            "16 цифр (4 групи по 4 цифри)": "16 digits (4 groups of 4 digits)",
            "На карту": "To Card",
            "Сума, ₴": "Amount, ₴",
            "Номер карти": "Card number",
            "Переказати": "Transfer",
        "Статус операції буде показано тут": "The transaction status will be shown here",
            "АТ «FБанк» використовує файли «cookie» з метою персоналізації сервісів та підвищення зручності користування вебсайтом. «Cookie» — це невеликі файли, що містять інформацію про попередні відвідування вебсайту. Якщо ви не хочете використовувати файли «cookie», змініть налаштування браузера.":
                "PJSC 'F-Bank' uses cookies to personalize services and improve website usability. Cookies are small files containing information about previous visits to the website. If you do not want to use cookies, change your browser settings.",
            "© 2024-2024, АТ «FБанк», офіційний сайт.": "© 2024-2024, PJSC 'F-Bank', official website.",
            "Курси валют": "Currency Rates",
            "Перекази та поповнення": "Transfers and Top-ups",
            "Підтримка": "Support",
            "Особистий кабінет": "Personal Cabinet",
            "F-Банк Відгуки": "F-Bank Reviews",
            "Вибирайте магазини, ресторани, сервіси, бренди та продукти на основі відгуків наших клієнтів.":
                "Choose stores, restaurants, services, brands, and products based on reviews from our customers.",
            "Відгуки від реальних покупців": "Reviews from real buyers",
            "★★★★★": "★★★★★",
            "АТ «FБанк» використовує файли «cookie» з метою персоналізації сервісів та підвищення зручності користування вебсайтом. «Cookie» — це невеликі файли, що містять інформацію про попередні відвідування вебсайту. Якщо ви не хочете використовувати файли «cookie», змініть налаштування браузера.":
                "PJSC 'F-Bank' uses cookies to personalize services and improve website usability. Cookies are small files containing information about previous visits to the website. If you do not want to use cookies, change your browser settings.",
            "© 2024-2024, АТ «FБанк», офіційний сайт.": "© 2024-2024, PJSC 'F-Bank', official website.",
            "Іван П.": "Ivan P.",
    "15 листопада 2024": "November 15, 2024",
    "★★★★★": "★★★★★",
    "Дуже задоволений обслуговуванням у F-Банку! Швидко оформили картку та відповіли на всі мої запитання. Рекомендую всім, хто цінує якісний сервіс.":
        "Very satisfied with the service at F-Bank! They quickly issued my card and answered all my questions. I recommend it to anyone who values quality service.",
    "Олена С.": "Olena S.",
    "10 жовтня 2024": "October 10, 2024",
    "Зручний інтерфейс інтернет-банкінгу та уважна підтримка клієнтів. Навіть складні питання вирішуються швидко та професійно. Дякую!":
        "Convenient online banking interface and attentive customer support. Even complex issues are resolved quickly and professionally. Thank you!",
    "Марія Л.": "Maria L.",
    "5 вересня 2024": "September 5, 2024",
    "Користуюся F-Банком вже рік. Без прихованих комісій та завжди привітний персонал. Дуже зручно для подорожей та щоденних фінансових операцій.":
        "I have been using F-Bank for a year. No hidden fees and always friendly staff. Very convenient for travel and everyday financial transactions.",
        "Курси валют": "Currency Rates",
        "Перекази та поповнення": "Transfers and Top-ups",
        "Підтримка": "Support",
        "Особистий кабінет": "Personal Cabinet",
        "Часті питання": "Frequently Asked Questions",
        "Як увійти до особистого кабінету?": "How to log in to your personal account?",
        "Щоб увійти до особистого кабінету, натисніть на кнопку 'Особистий кабінет' у правому верхньому куті сторінки та введіть ваші облікові дані.":
            "To log in to your personal account, click the 'Personal Cabinet' button in the top right corner of the page and enter your login details.",
        "Як оновити персональні дані?": "How to update personal data?",
        "Для оновлення персональних даних напишіть на нашу електронну пошту fbankkryto@gmail.com.":
            "To update your personal data, write to our email fbankkryto@gmail.com.",
        "Чи стягує банк комісії?": "Does the bank charge fees?",
        "Ні, F-Банк не стягує комісій за свої послуги. Усі наші сервіси є безкоштовними для клієнтів.":
            "No, F-Bank does not charge fees for its services. All our services are free for clients.",
        "Як звернутися до служби підтримки?": "How to contact customer support?",
        "Ви можете написати на електронну пошту fbankkryto@gmail.com для вирішення будь-яких питань.":
            "You can write to the email fbankkryto@gmail.com for any issues.",
        "Як відкрити картку?": "How to open a card?",
        "Відкрити картку можна онлайн.": "You can open a card online.",
        "Логотип": "Logo",
        "Перемикач мови": "Language Switcher",
        "АТ «FБанк» використовує файли «cookie» з метою персоналізації сервісів та підвищення зручності користування вебсайтом. «Cookie» — це невеликі файли, що містять інформацію про попередні відвідування вебсайту. Якщо ви не хочете використовувати файли «cookie», змініть налаштування браузера.":
            "PJSC 'F-Bank' uses cookies to personalize services and improve website usability. Cookies are small files containing information about previous visits to the website. If you do not want to use cookies, change your browser settings.",
        "© 2024-2024, АТ «FБанк», офіційний сайт.": "© 2024-2024, PJSC 'F-Bank', official website.",
        "Курси валют": "Currency Rates",
        "Перекази та поповнення": "Transfers and Top-ups",
        "Підтримка": "Support",
        "Особистий кабінет": "Personal Cabinet",
        "Вклади з прибутковістю до 24% річних": "Deposits with returns up to 24% per year",
        "Відкрийте вклад чи накопичувальний рахунок, отримуйте дохід. Переказуйте гроші до F-Банку через Систему швидких платежів з інших банків без комісії до 30 000 000 ₴ на місяць.":
            "Open a deposit or savings account, earn income. Transfer money to F-Bank via the Fast Payment System from other banks with no commission up to 30,000,000 UAH per month.",
        "До 24% річних": "Up to 24% per year",
        "Прибутковість за вкладом у гривнях": "Profitability in UAH",
        "Від 2 до 24 місяців": "From 2 to 24 months",
        "Термін вкладу": "Deposit term",
        "50 000 ₴": "50,000 UAH",
        "Мінімальна сума вкладу": "Minimum deposit amount",
        "Відкрити вклад легко": "Opening a deposit is easy",
        "Заповніть онлайн-заявку — відвідати банк не потрібно": "Fill out the online application — no need to visit the bank",
        "Безкоштовно доставимо договір та дебетову картку F-Банку": "We will deliver the contract and F-Bank debit card free of charge",
        "Поповніть вклад онлайн або готівкою без комісії": "Top up the deposit online or with cash without a fee",
        "Сума вкладу": "Deposit amount",
        "Термін вкладу (місяці)": "Deposit term (months)",
        "Доходність": "Profitability",
        "Сума на кінці терміну:": "Amount at the end of the term:",
        "В гривнях": "In UAH",
        "В юанях": "In CNY",
        "Переваги вкладів у F-Банку": "Advantages of F-Bank deposits",
        "Збереження в безпеці": "Security of deposits",
        "Вклади до 1 400 000 грн зареєстровані в державній системі страхування вкладів.":
            "Deposits up to 1,400,000 UAH are registered in the state deposit insurance system.",
        "Вибирайте умови": "Choose conditions",
        "Непоповнюваний вклад або з можливістю поповнення, з щомісячним нарахуванням відсотків на картку чи вклад.":
            "Non-replenishable deposit or one with replenishment option, with monthly interest payments to the card or deposit.",
        "Керуйте онлайн": "Manage online",
        "У особистому кабінеті.": "In your personal cabinet.",
        "© 2024-2024, АТ «FБанк», офіційний сайт.": "© 2024-2024, PJSC 'F-Bank', official website."
        },
        uk: {
        }
    };

    let currentLanguage = localStorage.getItem("language") || "uk";

    const updateLanguage = () => {
        document.querySelectorAll("[data-translate]").forEach(el => {
            const originalText = el.getAttribute("data-translate");
            if (el.tagName === "INPUT" && el.hasAttribute("placeholder")) {
                el.placeholder = translations[currentLanguage][originalText] || originalText;
            } else {
                el.textContent = translations[currentLanguage][originalText] || originalText;
            }
        });
    };
    

    languageSwitcher.addEventListener("click", () => {
        currentLanguage = currentLanguage === "uk" ? "en" : "uk";
        localStorage.setItem("language", currentLanguage);
        updateLanguage();
    });

    updateLanguage();

    // Загрузка сохраненной темы
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
        themeIcon.src = savedTheme === "dark-theme"
            ? "https://img.icons8.com/ios-filled/50/ffffff/moon-symbol.png"
            : "https://img.icons8.com/ios-filled/50/000000/sun.png";
    }

    toggleThemeButton.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        const isDarkTheme = body.classList.contains('dark-theme');
        themeIcon.src = isDarkTheme
            ? "https://img.icons8.com/ios-filled/50/ffffff/moon-symbol.png"
            : "https://img.icons8.com/ios-filled/50/000000/sun.png";
        localStorage.setItem("theme", isDarkTheme ? "dark-theme" : "");
    });

    setTimeout(() => {
        loadingScreen.style.animation = "fade-out 1s ease-in-out";
        loadingScreen.addEventListener("animationend", () => {
            loadingScreen.style.display = "none";
            mainContent.style.display = "block";
        });
    }, 1100); 
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

