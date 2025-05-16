let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");


sliderValue.textContent = inputSlider.value;

inputSlider.addEventListener("input",function(){
    sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener("click", ()=>{
    passBox.value = generatePassword();
});

let lowerChars ="abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*"


function generatePassword(){
    let genPassword = "";
    let allChars = "";

    allChars += lowercase.checked ? lowerChars : "";
    allChars += uppercase.checked ? upperChars : "";
    allChars += symbols.checked ? allSymbols : "";
    allChars += numbers.checked ? allNumbers : "";

    if(allChars == "" || allChars.length == 0){
        alert("Select atleast one option");
        return genPassword;
    }

    let i = 1;

    while( i <= inputSlider.value ){
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }

    return genPassword;
}

copyIcon.addEventListener("click", ()=>{
    
    if(passBox.value == ""){
        alert("Generate a valid password");
    }

    else{
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerHTML = "check_circle";
        copyIcon.title = "Password Copied";
        
        setTimeout(() => {
            copyIcon.innerHTML ="content_copy";
            copyIcon.title ="";
        }, 3000);
    }

});

