console.log("validation");

const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const msgError = document.getElementById("msg-error");
const submitError = document.getElementById("submit-error");

const contactName = document.getElementById("contact-name");

//for name validation
function handleName(e){
    // console.log("hello key up event",e.key);
    let name=contactName.value;
    // console.log(name);
    if(name.length==0){
        nameError.innerHTML = "Name is require"
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true
}
contactName.addEventListener("keyup",handleName);
const contactPhone = document.getElementById("contact-phone");

const handlePhone = ()=>{
    // console.log("phone");
    let phone = contactPhone.value;
    if(phone.length ==0 ){
        phoneError.innerHTML = "Phone number is require"
        return false;
    }
    if(phone.length<10 ){
        phoneError.innerHTML = "Phone number  should be 10 digit"
        return false;
    }
    
    if(phone.length>12 ){
        phoneError.innerHTML = "Phone number  should be only 10 digits"
        // phoneError.style.background= "black";
        return false;

    }

    if(!phone.match(/^[0-9]{10}$/) ){
        phoneError.innerHTML = "only digits require"
        return false;
    }


    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
    
}
contactPhone.addEventListener("keyup",handlePhone)


const contactEmail = document.getElementById("contact-email");


const emailHandler = ()=>{
    let email = contactEmail.value;
    if(email == 0){
        emailError.innerHTML = "Email is require!"
        return false;
    }
    
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Email Invalid"
        return false;
    }
    
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;    
}
contactEmail.addEventListener("keyup",emailHandler);


const contactMsg = document.getElementById("contact-msg");

const msgHandler= ()=>{
    // console.log("hello msg");

    let msg = contactMsg.value;
    let require = 30;
    let left = require-msg.length;

    if(left> 0){
        msgError.innerHTML = left + " more characters required!";
        return false;
    }

    msgError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

contactMsg.addEventListener('keyup',msgHandler);


const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener('click',()=>{

    if(!handleName() || !handlePhone() || !emailHandler() ||  !msgHandler()){
        submitError.innerHTML = "Please fix error to submit";
        submitError.style.color = "red";

        setTimeout(()=>{
            submitError.innerHTML = ""
        },3000);

    }else{
   
    submitError.innerHTML = "your form is submited!!"
    submitError.style.color = "green"
    // submitError.style.display ="block";


    setTimeout(()=>{
        contactName.value = "";
        contactEmail.value ="";
        contactPhone.value ="";
        contactMsg.value ="";
        nameError.innerHTML =""
        phoneError.innerHTML =""
        emailError.innerHTML =""
        msgError.innerHTML =""
    },1000)
    
    setTimeout(()=>{
        submitError.innerHTML = ""
    },3000);
}

})

