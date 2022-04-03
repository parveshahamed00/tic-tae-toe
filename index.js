let buttons=document.querySelectorAll('button')
let winner=document.querySelector('span')
let announcement=document.querySelector(".winner")
var span=false
console.log(buttons);
let xo="X"

buttons.forEach((e)=>{
   
  e.addEventListener("click",()=>{
    if(span){
        e.disabled=true
    }
     e.innerText=xo
     if (xo=="X") {
         xo="O"
     }
      else if(xo=="O"){
         xo="X"
     }
   game()

    // console.log(e.getAttribute('name'));
  })
})

function game() {
    if(buttons[0].innerText!="" && buttons[0].innerText==buttons[1].innerText && buttons[1].innerText==buttons[2].innerText){
        console.log("winner");
        winner.innerText=buttons[0].innerText
        span=true
    }
    if(buttons[3].innerText!="" && buttons[3].innerText==buttons[4].innerText && buttons[4].innerText==buttons[5].innerText){
        console.log("winner");
        winner.innerText=buttons[3].innerText
        span=true

    }
    if(buttons[6].innerText!="" && buttons[6].innerText==buttons[7].innerText && buttons[7].innerText==buttons[8].innerText){
        console.log("winner");
        winner.innerText=buttons[6].innerText
        span=true

    }
    if(buttons[0].innerText!="" && buttons[0].innerText==buttons[3].innerText && buttons[3].innerText==buttons[6].innerText){
        console.log("winner");
        winner.innerText=buttons[0].innerText
        span=true

    }
    if(buttons[1].innerText!="" && buttons[1].innerText==buttons[4].innerText && buttons[4].innerText==buttons[7].innerText){
        console.log("winner");
        winner.innerText=buttons[1].innerText
        span=true

    }
    if(buttons[2].innerText!="" && buttons[2].innerText==buttons[5].innerText && buttons[5].innerText==buttons[8].innerText){
        console.log("winner");
        winner.innerText=buttons[2].innerText
        span=true

    }
    if(buttons[0].innerText!="" && buttons[0].innerText==buttons[4].innerText && buttons[4].innerText==buttons[8].innerText){
        console.log("winner");
        winner.innerText=buttons[0].innerText
        span=true

    }
    if(buttons[2].innerText!="" && buttons[2].innerText==buttons[4].innerText && buttons[4].innerText==buttons[6].innerText){
        console.log("winner");
        winner.innerText=buttons[2].innerText
        span=true

    }
    if(span){
        announcement.removeAttribute('class')
    }
}



