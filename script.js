document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('account-form');
    const tryAgainButton = document.getElementById('try-again');
    const usernameInput = document.getElementById('username');
    const resultSection = document.getElementById('result-section');
    const feedbackDiv = document.getElementById('feedback');
    
    // Stats elements
    const fakeCountElement = document.getElementById('fake-count');
    const keywordCountElement = document.getElementById('keyword-count');
    const accountStatusElement = document.getElementById('account-status');

    if (!form || !tryAgainButton || !usernameInput || !resultSection || !feedbackDiv) {
        alert('One or more necessary elements are missing from the HTML.');
        return;
    }

    function generateRandomAnalysis() {
        const fakeAccountsDetected = Math.floor(Math.random() * 2); // 0 or 1
        const suspiciousKeywords = Math.floor(Math.random() * 10) + 1; // 1 to 10
        const isRealAccount = suspiciousKeywords > 5 ? 'Fake' : 'Real';

        return {
            fakeAccountsDetected,
            suspiciousKeywords,
            isRealAccount,
            analysisSummary: generateRandomSummary(suspiciousKeywords)
        };
    }

    function generateRandomSummary(suspiciousKeywords) {
        const summaries = [
            "The account has a high level of engagement and appears to be authentic.",
            "The account shows signs of automation and may be a bot.",
            "The profile has very few connections and lacks personal posts.",
            "The account frequently posts links to suspicious websites.",
            "The user profile details are incomplete and lack verification.",
            "The account has a balanced activity history and looks genuine.",
            "Multiple suspicious keywords were found in recent posts.",
            "The account frequently changes profile pictures, which is unusual."
        ];
        
        if (suspiciousKeywords > 8) {
            return "The account appears highly suspicious due to a high number of flagged keywords.";
        }

        return summaries[Math.floor(Math.random() * summaries.length)];
    }

    function handleFormSubmit(event) {
        event.preventDefault();

        const username = usernameInput.value.trim();
        if (!username) {
            alert('Please enter a username or profile link.');
            return;
        }

        const analysisData = generateRandomAnalysis();
        displayAnalysisResult(analysisData);
    }

    function displayAnalysisResult(analysisData) {
        feedbackDiv.innerHTML = `
            <h3>Analysis Summary:</h3>
            <p>${analysisData.analysisSummary}</p>
            <h3>Account Status: ${analysisData.isRealAccount}</h3>
            <p>Fake Accounts Detected: ${analysisData.fakeAccountsDetected}</p>
            <p>Suspicious Keywords Found: ${analysisData.suspiciousKeywords}</p>
        `;

        // Update stats section
        fakeCountElement.textContent = analysisData.fakeAccountsDetected;
        keywordCountElement.textContent = analysisData.suspiciousKeywords;
        accountStatusElement.textContent = analysisData.isRealAccount;

        resultSection.classList.remove('hidden');
    }

    function handleTryAgain() {
        resultSection.classList.add('hidden');
        usernameInput.value = '';
    }

    form.addEventListener('submit', handleFormSubmit);
    tryAgainButton.addEventListener('click', handleTryAgain);
});


document.addEventListener("DOMContentLoaded", () => {
    const languageSelect = document.getElementById("language-select");

    const translations = {
        en: {
            home: "Home",
            aboutUs: "About Us",
            howItWorks: "How It Works",
            statistics: "Statistics",
            signup: "Signup",
            login: "Login"
        },
        hi: {
            home: "मुख्य पृष्ठ",
            aboutUs: "हमारे बारे में",
            howItWorks: "यह कैसे काम करता है",
            statistics: "आंकड़े",
            signup: "साइन अप करें",
            login: "लॉग इन करें"
        },
        fr: {
            home: "Accueil",
            aboutUs: "À propos de nous",
            howItWorks: "Comment ça marche",
            statistics: "Statistiques",
            signup: "S'inscrire",
            login: "Connexion"
        },
        es: {
            home: "Inicio",
            aboutUs: "Sobre nosotros",
            howItWorks: "Cómo funciona",
            statistics: "Estadísticas",
            signup: "Registrarse",
            login: "Iniciar sesión"
        },
        zh: {
            home: "主页",
            aboutUs: "关于我们",
            howItWorks: "它是如何工作的",
            statistics: "统计数据",
            signup: "注册",
            login: "登录"
        }
    };

    function updateLanguage(language) {
        document.querySelectorAll(".menu a").forEach((link, index) => {
            const linkKeys = ['home', 'aboutUs', 'howItWorks', 'statistics', 'signup', 'login'];
            link.textContent = translations[language][linkKeys[index]];
        });
    }

    languageSelect.addEventListener("change", (event) => {
        const selectedLanguage = event.target.value;
        updateLanguage(selectedLanguage);
    });
});

// Toggle Menu on Mobile
document.getElementById("hamburger").addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("active");
});
