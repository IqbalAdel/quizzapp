let questions = [
    {
        "question":"That is the longest river in the world",
        "answer_1":"The Amazon River",
        "answer_2":"The Nile",
        "answer_3":"The Rhine",
        "answer_4":"The Niger River",
        "right_answer":"2",
    },
    
    {
        "question":"What is the most spoken language in Indien",
        "answer_1":"Hindi",
        "answer_2":"Urdu",
        "answer_3":"Punjabi",
        "answer_4":"Bengali",
        "right_answer":"1",
    },

    {
        "question":"In which of these films did Leonardo DiCaprio not act",
        "answer_1":"The Wolf of Wallstreet",
        "answer_2":"12 Years a Slave",
        "answer_3":"Aviator",
        "answer_4":"The Revenant",
        "right_answer":"2",
    },

    {
        "question":"What is the longest that an elephant has ever lived",
        "answer_1":"17 years",
        "answer_2":"49 years",
        "answer_3":"86 years",
        "answer_4":"142 years",
        "right_answer":"3",
    },

    {
        "question":"How many rings are on the Olympic flag",
        "answer_1":"None",
        "answer_2":"4",
        "answer_3":"5",
        "answer_4":"7",
        "right_answer":"3",
    },
];
let currentQuestion = 0
let score = 0
let progress = 0
let audioSuccess = new Audio('audio/success-audio.mp3');
let audioFail = new Audio('audio/fail-audio.mp3');


function init(){
    document.getElementById('totalQ').innerHTML=`${questions.length}`;
    showQuestion();
    
}

function showQuestion(){
    const questArray = questions[currentQuestion];
    if(currentQuestion >= questions.length){
        document.getElementById('finalBody').classList.remove('hide')
        document.getElementById('finalBody').classList.add('endscreen') 
        document.getElementById('questBody').classList.add('hide')
        document.getElementById('playerScore').innerHTML = score
        document.getElementById('header-img').src = "img/brain result.png"

    }
    else{
        progress = (currentQuestion+1)/questions.length 
        progress = Math.round(progress*100) 
        document.getElementById('question').innerHTML=`${questArray['question']}`; 
        document.getElementById('answer1').innerHTML=`${questArray['answer_1']}`; 
        document.getElementById('answer2').innerHTML=`${questArray['answer_2']}`; 
        document.getElementById('answer3').innerHTML=`${questArray['answer_3']}`; 
        document.getElementById('answer4').innerHTML=`${questArray['answer_4']}`;
        document.getElementById('currentQ').innerHTML= currentQuestion+1;
        document.getElementById('progBar').style.width = `${progress}%`;
        document.getElementById('progBar').innerHTML = `${progress}%`;

    }
}

function answer(answer){
    const questArray = questions[currentQuestion];
    if(answer == questArray['right_answer']){
        document.getElementById(`answer${answer}`).parentNode.classList.add('bg-success');
        score++;
        audioSuccess.play();

    }
    else{
        document.getElementById(`answer${answer}`).parentNode.classList.add('bg-danger')
        document.getElementById(`answer${questArray['right_answer']}`).parentNode.classList.add('bg-success')
        audioFail.play();
    };
    document.getElementById('next-button').disabled = false;
}

function nextQ(){
    const questArray = questions[currentQuestion];
    for (let j = 1; j < 5; j++) {
        document.getElementById(`answer${j}`).parentNode.classList.remove('bg-danger')
    }
    document.getElementById(`answer${questArray['right_answer']}`).parentNode.classList.remove('bg-success')        
    currentQuestion++;      
    showQuestion();
    document.getElementById('next-button').disabled = true;
}

function restart(){
    document.getElementById('header-img').src = "./img/pencil.jpg";
    currentQuestion = 0;
    score = 0;
    progress = 0;
    document.getElementById('finalBody').classList.add('hide');
    document.getElementById('finalBody').classList.remove('endscreen'); 
    document.getElementById('questBody').classList.remove('hide');
    showQuestion();
    

}