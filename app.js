const questions = [
    {
        'que' : 'Which one of the following is a markup language?',
        'a' : 'HTML',
        'b' : 'CSS',
        'c' : 'JavaScript',
        'd' : 'Bootstrap',
        'correct' : 'a'
    },
    {
        'que' : 'In which year JavaScript was launched?',
        'a' : '1996',
        'b' : '1995',
        'c' : '1994',
        'd' : 'none',
        'correct' : 'b'
    },
    {
        'que' : 'CSS stands for?',
        'a' : 'Hyper Text Markup Language',
        'b' : 'Cascading Style Sheets',
        'c' : 'Jason Object Notation',
        'd' : 'none',
        'correct' : 'b'
    }
]

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options');
const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset();
    const data = questions[index]
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submit = () => {
    const data = questions[index];
    const ans = getAnswer()
    if(ans === data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                return input.value;
            }
        }
    )
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}


const endQuiz = () => {
    document.getElementById("box").innerHTML = `
        <h3>Thank you </h3>
    `
}

loadQuestion();