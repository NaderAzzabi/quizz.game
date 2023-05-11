var prevBtn= document.getElementById('prev');
var nextBtn = document.getElementById('next');
var trueBtn = document.getElementById('true');
var falsebtn = document.getElementById('false');

var currentQuestion = 0;
var score = 0;

var questions = [
    {
        question : "Arif Alvi is the current president of pakistan ?",
        answers : [
            {option: "TRUE" , answer: true},
            {option: "FALSE", answer: false},
        ]
    },
    { 
        question : "Michael Schumacher is from spain?"
        answers : [
            {option: "TRUE" , answer: false},
            {option: "FALSE", answer: true},
        ]
    } ,
    {
        question : "KAMAZ is a car mark?"
        answers : [
            {option: "TRUE" , answer: true},
            {option: "FALSE", answer: false},
        ]
    },
    { 
        question : "Michael Schumacher is from spain?"
        answers : [
            {option: "TRUE" , answer: false},
            {option: "FALSE", answer: true},
        ]
    } ,
    { 
        question : "Water is H2O?"
        answers : [
            {option: "TRUE" , answer: true},
            {option: "FALSE", answer: false},
        ]
    } ,
    {
    question : "Titanic release after 2000 ?"
    answers : [
        {option: "TRUE" , answer: false},
        {option: "FALSE", answer: true},
    ]
} 

]
