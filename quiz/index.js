var quizdata=[

    {
        question :"Which framework is related to Javascript",
        a :'.NET',
        b:'Flask',
        c:'React',
        d:'Django',
        correct :'c'
    }
,
    {
        question :"Which is not a programming language",
        a :'HTML',
        b:'Python',
        c:'Java',
        d:'C++',
        correct :'a'
    }
,
    {
        question :"Which is not a framework",
        a :'React',
        b:'Javascript',
        c:'Angular',
        d:'Django',
        correct :'b'
    }
,
    {
        question :"Frontend technologies ",
        a :'HTML',
        b:'CSS',
        c:'Bootstrap',
        d:'All the above',
        correct :'d'
    }
]

var quiz=document.getElementById('quiz');
var answer=document.querySelector('answer');
var question=document.getElementById('question');

var option_a=document.getElementById('a_value');
var option_b=document.getElementById('b_value');
var option_c=document.getElementById('c_value');
var option_d=document.getElementById('d_value');

var submitbtn=document.getElementById('submit');

var currentQuestion=0;
var quizScore=0;

loadQuiz();

function loadQuiz()
{
     deselect()
     question.innerHTML=quizdata[currentQuestion].question;

     option_a.innerText=quizdata[currentQuestion].a;
     option_b.innerText=quizdata[currentQuestion].b;
     option_c.innerText=quizdata[currentQuestion].c;
     option_d.innerText=quizdata[currentQuestion].d;
}

function deselect()
{
    answer.forEach(answer=>answer.checked=false);
        
    }


submitbtn.addEventListener('click',()=>{
    var selectedOption;
    answer.forEach(answer=>{
        if(answer.checked)
        {
            selectedOption=answer;
        }
    })

    if(selectedOption==quizdata[currentQuestion].correct)
    {
        quizScore=quizScore+1;

    }
    currentQuestion=currentQuestion+1;
    loadQuiz();
})

