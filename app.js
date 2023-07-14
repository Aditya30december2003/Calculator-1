let question="";
let answer="";
let buttons=document.querySelectorAll('.button')
buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=='='){
            answer=eval(question)
            document.querySelector('.answer').value=answer;
        }
        else if(e.target.innerHTML=='AC'){
            question=""
            answer="";
            document.querySelector('.answer').value=answer;
            document.querySelector('.question').value=question
         }
         else if(e.target.innerHTML=='C'){
            question=question.slice(0,question.length-1)
            document.querySelector('.question').value=question
         }
         else{
            question=question+ e.target.innerHTML;
            document.querySelector('.question').value=question;
         }
    })
})
 

// let name="Aditya"
// console.log(name.slice(0,name.length-1)) //refrence to clear C