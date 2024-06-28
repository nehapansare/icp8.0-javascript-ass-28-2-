function match(){
    const inputtext1 = document.getElementById("text1");
    const inputtext2 = document.getElementById("text2");
    const answer = document.getElementById("result");
    
    if(inputtext1.value == inputtext2.value)
        {
            answer.innerText ="Matched"
            answer.style.color ="Green"
        }
        else{
            answer.innerText = "Not Matched"
            answer.style.color ="Red"
        }
    }