window.onload = function() {
    const score = parseInt(localStorage.getItem('caudung'));
    const score1 = parseInt(localStorage.getItem('causai'));
    const user = JSON.parse(localStorage.getItem('userAnswers'));
    const questions = document.querySelectorAll('.question');

    document.querySelector(".socaudung").textContent = `Số câu trả lời đúng: ${score}`;
    document.querySelector(".socausai").textContent = `Số câu trả lời sai: ${score1}`;
    document.querySelector(".chuatraloi").textContent = `Số câu trả lời sai: ${360-score-score1}`;

    questions.forEach(function(question)  {
		const index = question.querySelector('h3').textContent.split(' ')[1];
        const correctElement = question.querySelector('.correct');
        correctElement.click();
        question.style.backgroundColor = 'rgb(106 212 255)';
        for(const key in user) {
            const value = user[key];
            if (value.user_quesion == index) {
                if(value.user_value == true){
                    question.style.backgroundColor = 'lightgreen';
                }else{
                    question.style.backgroundColor = '#ff6a6a';
                }
            }
        }
    });
}