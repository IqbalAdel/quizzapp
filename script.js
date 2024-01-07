let questions = [
    {
        "question":"Was ist der längste Fluss der Welt",
        "answer_1":"Der Amazonas",
        "answer_2":"Der Nil",
        "answer_3":"Der Rhein",
        "answer_4":"Der Niger",
        "right_answer":"2",
    },
    
    {
        "question":"Was ist die meist gesprochene Sprache in Indien",
        "answer_1":"Hindi",
        "answer_2":"Urdu",
        "answer_3":"Punjabi",
        "answer_4":"Bengali",
        "right_answer":"1",
    },

    {
        "question":"In welchem dieser Filme spielt Leonardo DiCaprio NICHT mit",
        "answer_1":"The Wolf of Wallstreet",
        "answer_2":"12 Years a Slave",
        "answer_3":"Aviator",
        "answer_4":"The Revenant",
        "right_answer":"2",
    },

    {
        "question":"Was verbirgt sich hinter einer Konklave",
        "answer_1":"Die Befreiung der Sklaverei in den Südstaaten",
        "answer_2":"Eine Papstwahl",
        "answer_3":"Ein Musikstück",
        "answer_4":"Eine besondere Form der Kunst",
        "right_answer":"2",
    },

    {
        "question":"Welche Blumenzwiebeln wurden früher als Zahlungsmittel genutzt",
        "answer_1":"Krokusse",
        "answer_2":"Lilien",
        "answer_3":"Gladiolen",
        "answer_4":"Tulpen",
        "right_answer":"4",
    },
];
let currentQuestion = 0

function init(){
    document.getElementById('totalQ').innerHTML=`${questions.length}`;
    showQuestion();
    
}

function showQuestion(){
    const questArray = questions[currentQuestion];
    document.getElementById('question').innerHTML=`${questArray['question']}`; 
    document.getElementById('answer1').innerHTML=`${questArray['answer_1']}`; 
    document.getElementById('answer2').innerHTML=`${questArray['answer_2']}`; 
    document.getElementById('answer3').innerHTML=`${questArray['answer_3']}`; 
    document.getElementById('answer4').innerHTML=`${questArray['answer_4']}`;
    document.getElementById('currentQ').innerHTML=`${currentQuestion+1}`;
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
}

function nextQ(){
    document.getElementById(`answer1`).classList.remove('false')

    currentQuestion++;      
    showQuestion();
}