const correctAnswers = ['B', 'A', 'B', 'C'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result')
const span = document.querySelector('span')

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score += 25;
        }
    });

    scrollTo(0,0);
    result.classList.remove('d-none');
    // span.textContent = `${score}%`;

    let output = 0;
    const timer = setInterval(() => {
        span.textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 15);
    
});