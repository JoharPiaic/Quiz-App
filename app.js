// var getBio = document.getElementById('biodata');
// getBio.innerHTML = " ";


// function clr() {
//     var getBio = document.getElementById('biodata');
//     getBio.innerHTML = " ";
// }


var quiz = [
    {
        question: '(1) Abbreviation of HTML',
        options: {
            a: '(a) High Text MarkUp Language',
            b: '(b) Hyper Text MarkUp Language',
            c: '(c) Hyper Text Monitor Language'
        },
        correctOption: '(b) Hyper Text MarkUp Language'
    },
    {
        question: '(2) Latest Version of HTML is',
        options: {
            a: '(a) HTML 4',
            b: '(b) HTML 5',
            c: '(c) Html 6'
        },
        correctOption: '(b) HTML 5'
    },
    {
        question: '(3) CSS is used for',
        options: {
            a: '(a) Styling Html',
            b: '(b) Programming in Html',
            c: '(c) Removing Html'
        },
        correctOption: '(a) Styling Html'
    },
    {
        question: '(4) Linux is an',
        options: {
            a: '(a) Language',
            b: '(b) Operating System',
            c: '(c) Database System'
        },
        correctOption: '(b) Operating System'
    },
    {
        question: '(5) Which of the following is an Open Source Operating System',
        options: {
            a: '(a) Windows',
            b: '(b) Linux',
            c: '(c) IOS'
        },
        correctOption: '(b) Linux'
    }
]

var getBio = document.getElementById('biodata');
var getQuizUI = document.getElementById('quiz');
// quiz.innerHTML = " ";
var getQs = document.getElementById('question');
var getOpt1 = document.getElementById('opt1');
var getOpt2 = document.getElementById('opt2');
var getOpt3 = document.getElementById('opt3');
var btnNext = document.createTextNode('Next')
var q = 0;

function startQuiz() {
    setInterval(countdown, 1000);
    getQuizUI.style.display = 'inherit';
    getQuizUI.style.border = '1px solid black';
    getQuizUI.style.backgroundColor = 'white';
    getOpt1.style.border = '1px solid black';
    getOpt1.style.backgroundColor = 'wheat';
    getOpt2.style.border = '1px solid black';
    getOpt2.style.backgroundColor = 'wheat';
    getOpt3.style.border = '1px solid black';
    getOpt3.style.backgroundColor = 'wheat';
    getBio.innerHTML = " ";
    getQs.innerHTML = quiz[q].question;
    getOpt1.innerHTML = quiz[q].options.a;
    getOpt2.innerHTML = quiz[q].options.b;
    getOpt3.innerHTML = quiz[q].options.c;
    var nextBtn = document.createElement('button');
    
    var appTxtinBtn = nextBtn.appendChild(btnNext);
    getQuizUI.appendChild(nextBtn);
    nextBtn.setAttribute('class', 'nextBtn');
    nextBtn.setAttribute('onclick', 'next()');
}




// COuntdown Timer  starts here

var m = 5;
var s = 1
var getTimeUi = document.getElementById('timer');
function countdown() {
    if (s > 0) {
        s--
        getTimeUi.innerHTML = `${m} min : ${s} sec`;
    }
    else if (m > 0) {
        m--
        getTimeUi.innerHTML = `${m} min : ${s} sec`;
        s = 59;
        getTimeUi.innerHTML = `${m} min : ${s} sec`;
    }
    else if (m == 0 && s == 0) {
        getTimeUi.innerHTML = 'Time Out'
    }
}


//Countdown timer ends here


function nextQuestion() {
    count = count + 1;
    removerSelection();
    q++
    getQs.innerHTML = quiz[q].question;
    getOpt1.innerHTML = quiz[q].options.a;
    getOpt2.innerHTML = quiz[q].options.b;
    getOpt3.innerHTML = quiz[q].options.c;
}

function chnBgColor(e) {
    removerSelection()
    e.setAttribute('class', 'optionSelected')
}

function removerSelection() {
    getOpt1.classList.remove('optionSelected')
    getOpt2.classList.remove('optionSelected')
    getOpt3.classList.remove('optionSelected')
}

function incCount() {
    if (b[0].innerHTML === quiz[count].correctOption) {
        count = count + 1;
        corAns = corAns + 1;
        console.log(count);
    }
}





var count = 0;
var corAns = 0;
var b = document.getElementsByClassName('optionSelected');
function next() {
    if (b[0] != undefined) {

        if (b[0].innerHTML === quiz[count].correctOption) {
            count = count + 1;
            corAns = corAns + 1;
            console.log(count)
            removerSelection();
            q++
            getQs.innerHTML = quiz[q].question;
            getOpt1.innerHTML = quiz[q].options.a;
            getOpt2.innerHTML = quiz[q].options.b;
            getOpt3.innerHTML = quiz[q].options.c;
        }
        if (q < quiz.length && q != quiz.length) {
                // q = q;
                // console.log(q)
                removerSelection();
                q++
                getQs.innerHTML = quiz[q].question;
                getOpt1.innerHTML = quiz[q].options.a;
                getOpt2.innerHTML = quiz[q].options.b;
                getOpt3.innerHTML = quiz[q].options.c;
    
            }
        else if (q = 3) {
            getQuizUI.innerHTML = " Your Quiz has Finished ";
            btnNext.innerHTML = 'finish'
            btnNext.setAttribute('onClick', 'finish');
        }
    }
}














