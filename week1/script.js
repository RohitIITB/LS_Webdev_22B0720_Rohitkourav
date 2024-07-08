document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const userName = document.getElementById('user-name').value;
    document.getElementById('greeting').innerText = `Hello, ${userName}!`;
    document.getElementById('user-form').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
});

function submitQuiz() {
    const answers = {
        q1: 'Rohit Sharma',
        q2: 'Virat Kohli',
        q3: 'Thala for a reason'
    };

    let score = 0;
    for (let i = 1; i <= 3; i++) {
        const question = document.querySelector(`input[name="q${i}"]:checked`);
        if (question && question.value === answers[`q${i}`]) {
            score++;
        }
    }

    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').innerText = `Your score: ${score} out of 3`;

    setTimeout(resetQuiz, 5000);
}

function resetQuiz() {
    document.getElementById('user-form').reset();
    document.getElementById('user-form').style.display = 'block';
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    document.querySelectorAll('input[type="radio"]').forEach(input => input.checked = false);
    document.getElementById('greeting').innerText = '';
}
