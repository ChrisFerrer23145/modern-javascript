var correctAnswers = ["B", "B", "B", "B"];
var form = document.getElementsByClassName("quiz-form")[0];
let percentage = document.getElementById("result")

form.addEventListener("submit", e => {
    e.preventDefault();
    let score = 0;
    let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        }
    })
    percentage.classList.remove("d-none")
    scroll(0, 0);

    let output = 0;
    let timer = setInterval(() => {
        percentage.children[0].children[0].children[0].innerHTML = `${output}%`;
        output++;
        if (output > score) {
            clearInterval(timer);
        }
    }, 10)
})