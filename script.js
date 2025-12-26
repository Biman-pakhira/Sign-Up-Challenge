let form=document.querySelector("form");
let alldetails=document.querySelectorAll("input");
let passwordNumber=document.querySelector("#password");
let pri=document.querySelector("#print");
let finalgateway= document.querySelector("#result");
form.addEventListener("submit", (detail)=>{
    detail.preventDefault();
    let confirm = window.confirm('Are you sure you want to submit?');
    if(confirm === true){
        alert("successful signup!");
    }
    else{
        location.reload();
    }
})
form.addEventListener("input",(detail)=>{
    
    if((alldetails[0].value.length>3)&&(passwordNumber.value.length>8)){
        pri.style.display="none";
        finalgateway.style.display="flex";
        finalgateway.style.color="green";
        finalgateway.textContent="All good to go!";
    }else{
        finalgateway.style.display="flex";
        pri.style.display="flex";
        pri.textContent="Make sure email is more than 3 characters and has @ and a ."; 
        finalgateway.textContent="Make sure password is more than 8 characters";
        finalgateway.style.color="Red";
        
    }
})