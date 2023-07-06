const question=[
    {
        que:'what is full form of HTML?',
        a:'Hyper Text Markup Language',
        b:'Hyping Texting Mark Language',
        c:'High Take Mass Language',
        d:'High Texting Mark Language',
    },
    {
        que:'what is full form of CSS?',
        a:'Creative Style Solutions',
        b:'Cool Styling System',
        c:'Creative Style Solutions',
        d:'Cascading Style Sheets',
    },
    {
        que:'html and css is for?',
        a:'Structure and Style of webpage',
        b:'Style and Structure of webpage',
        c:'for dynamic nature of webpage',
        d:'to calculate the width and height of the webpage',
    }
];
const value=[[1,0,0,0],
    [0,0,0,1],[1,0,0,0]];
let index=0;
let yourScore=0;
const problem=document.getElementById('problem');
const ques=document.getElementById('que');
const options=document.getElementById('options');
const a1=document.getElementById('a1');
const a2=document.getElementById('a2');
const a3=document.getElementById('a3');
const a4=document.getElementById('a4');
const submit1=document.getElementById('submit1');
const a11=a1.firstElementChild;
const a21=a2.firstElementChild;
const a31=a3.firstElementChild;
const a41=a4.firstElementChild;
const a111=[a11,a21,a31,a41];
console.log(a11);
let value3=0;
const k=0;

display1();
function display1()
{
    reset();
    display();
    click();
    submit();
}
function reset()
{
    a11.checked =false;
    a21.checked=false;
    a31.checked=false;
    a41.checked=false;
    

}
function display()
{
    ques.textContent=question[index].que;
    a1.nextSibling.textContent=question[index].a;
    a2.nextSibling.textContent=question[index].b;
    a3.nextSibling.textContent=question[index].c;
    a4.nextSibling.textContent=question[index].d;
}
function click()
{
    a111.forEach(function(cell)
    {
        cell.addEventListener('click',changeValue);
    }

    )
}
function changeValue()
{
    if(this===a11)
    {
        k=0;
    }
    else if(this===a21)
    {
        k=1;
    }
    else if(this===a31)
    {
        k=2;
    }
    else if(this==a41)
    {
        k=3;
    }
    const value2=value[index];
    value3=value2[k];
    yourScore += value3;

}
function score()
{
    ques.parentNode.removeChild(ques);
    options.parentNode.removeChild(options);
    const totalScore=document.createElement('h1');
    problem.appendChild(totalScore);
    totalScore.style.margin='10px';
    totalScore.textContent=`your's score is ${yourScore}`;

}
function submit()
{
    index+=1;
    if(index<question.length)
    {
    submit1.addEventListener('click',display1);
    }
    else if(index===question.length)
    {
        submit1.addEventListener('click',score);
    }

}