function emailValid(email){
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(email.match(mailformat)){
        return true;
    }
    else{
        return false;
    }
}

document.querySelector('.early-access__button').addEventListener("click",()=>{
    let input = document.querySelector('.early-access__input').value;
    let result = emailValid(input);
    if(!result){
        document.querySelector('.early-access__p--error').classList.add('active')
    }
    else{
        document.querySelector('.early-access__p--error').classList.remove('active')
    }
})