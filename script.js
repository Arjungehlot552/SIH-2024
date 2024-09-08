document.getElementById('account-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const feedback = document.getElementById('feedback');
    const resultSection = document.getElementById('result-section');
    
    
    feedback.innerText = '';
    resultSection.classList.add('hidden');

    if (!username) {
        feedback.innerText = 'Please enter a valid username or link!';
        resultSection.classList.remove('hidden');
        return;
    }

    fetch('/check-account', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username }),
    })
        .then(response => response.json())
        .then(data => {
            feedback.innerText = data.result;
            feedback.style.color = data.result.includes('suspicious') ? '#e74c3c' : '#27ae60';
            resultSection.classList.remove('hidden');


            document.getElementById('fake-count').innerText = data.fakeCount;
            document.getElementById('keyword-count').innerText = data.keywordCount;
        })
        .catch(error => {
            console.error('Error:', error);
            feedback.innerText = 'There was an error analyzing the account. Please try again later.';
            resultSection.classList.remove('hidden');
        });
});


document.getElementById('try-again').addEventListener('click', function () {
    document.getElementById('result-section').classList.add('hidden');
    document.getElementById('username').value = '';
});