let rock=document.querySelector("#rock");

let paper=document.querySelector("#paper");
let stone=document.querySelector("#scissor");
let result=document.querySelector("#result-store");
let user=document.querySelector("#user-score");
let comp=document.querySelector("#comp-score");
let user_result=document.querySelector("#result-name-user");
let comp_result=document.querySelector("#result-name-comp");
let min=1,max=4;

const random=(min,max)=>{
   return Math.random()*(max-min)+min;
}
let count=0;
let count2=0;

rock.addEventListener("click",()=>{
    user_result.innerHTML="Rock";
    let temp=Math.floor(random(min,max));
    console.log(temp);
    if(temp==1){
        console.log("Draw");
        result.innerHTML="Draw";
        comp_result.innerHTML="Rock";
        result.style.color="white";
    }else if(temp==2){
        console.log("You lose the game");
        result.innerHTML="You Lose";
        result.style.color="red";
        comp_result.innerHTML="Paper";
        count2++;
        comp.innerHTML=count2;
    }else{
        console.log("you won the game");
        count++;
        user.innerHTML=count;
        comp_result.innerHTML="Scissor";
        result.innerHTML="You Won";
        result.style.color="green";
    }
   
})

paper.addEventListener("click",()=>{
    user_result.innerHTML="Paper";
    let temp=Math.floor(random(min,max));
    console.log(temp);
    if(temp==2){
        console.log("Draw");
        result.innerHTML="Draw";
        comp_result.innerHTML="Paper";
        result.style.color="white";
    }else if(temp==1){
        count++;
        console.log("You Win the game");
        result.innerHTML="You Win";
        result.style.color="green";
        comp_result.innerHTML="Rock";
        user.innerHTML=count;
    }else{
        console.log("you Lose the game");
        count2++;
        comp.innerHTML=count2;
        comp_result.innerHTML="Scissor";
        result.innerHTML="You Lose";
        result.style.color="red";
    }
   
})

scissor.addEventListener("click",()=>{
    user_result.innerHTML="Scissor";
    let temp=Math.floor(random(min,max));
    console.log(temp);
    if(temp==3){
        console.log("Draw");
        result.innerHTML="Draw";
        comp_result.innerHTML="Scissor";
        result.style.color="white";
    }else if(temp==2){
        console.log("You Win the game");
        count++;
        result.innerHTML="You Win";
        result.style.color="green";
        user.innerHTML=count;
        comp_result.innerHTML="Paper";
    }else{
        console.log("you Lose the game");
        result.innerHTML="You Lose";
        result.style.color="red";
        comp_result.innerHTML="Rock";
        count2++;
        comp.innerHTML=count2;
    }
    
})