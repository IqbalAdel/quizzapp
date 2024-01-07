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

function init(){
    document.getElementById('totalQ').innerHTML=`${questions.length}`;
    showQuestion();
    
}

function showQuestion(){
    const questArray = questions[currentQuestion];
    if(currentQuestion >= questions.length){
        // show end-screen
    }
    else{
        document.getElementById('question').innerHTML=`${questArray['question']}`; 
        document.getElementById('answer1').innerHTML=`${questArray['answer_1']}`; 
        document.getElementById('answer2').innerHTML=`${questArray['answer_2']}`; 
        document.getElementById('answer3').innerHTML=`${questArray['answer_3']}`; 
        document.getElementById('answer4').innerHTML=`${questArray['answer_4']}`;
        document.getElementById('currentQ').innerHTML= currentQuestion+1;
    }
}

function answer(answer){
    const questArray = questions[currentQuestion];
    if(answer == questArray['right_answer']){
        document.getElementById(`answer${answer}`).parentNode.classList.add('bg-success')
    }
    else{
        document.getElementById(`answer${answer}`).parentNode.classList.add('bg-danger')
        document.getElementById(`answer${questArray['right_answer']}`).parentNode.classList.add('bg-success')
    
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