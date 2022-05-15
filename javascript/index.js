

function output()
{
  var i=0;
  var q1=document.quiz.quiz1.value;
  var q2=document.quiz.quiz2.value;
  var q3=document.quiz.quiz3.value;
  var q4=document.quiz.quiz4.value;
  var q5=document.quiz.quiz5.value;
var result=document.getElementById("result");
var form1=document.getElementById("form1");
 
  if(q1=="All of the Above") {i++}
  if(q2=="Base Object") {i++}
  if(q3=="//") {i++}
  if(q4=="It is used to spread iterables to individual elements") {i++}
  if(q5=="learInterval") {i++}
  form1.style.display="none";
    if (i >=3 ){
  result.textContent=`Your Score Is ${i/5*100}%.CONGRATULATION CODER` 
    }
    else{
      result.textContent=`Your Score Is ${i/5*100}%.BELOW AVERAGE!` 
    
    }
}