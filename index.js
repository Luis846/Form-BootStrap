let warns = document.querySelector('.alert');
let inputs = document.querySelectorAll("input");
const myForms = document.getElementById('myForm');

function validateForm() {

      warns.style.display = "block";
     for (e of inputs) {
         if(e.value === ""){
             e.placeholder = "Please Fill";
             e.style.backgroundColor = '#f8d7da';
         }else if(e.value !== ""){
             e.style.backgroundColor = "white";
         }
}

}


function checkforblank() {

    let selects = document.querySelector("select");
    let messageArea = document.querySelector("textarea");
    let invalid = selects.value == "Pick a State";

    if (invalid) {
        selects.style.backgroundColor = "#f8d7da";
        selects.placeholder = "Please Fill";
    }
    else {
        selects.style.backgroundColor = "white";
    }

    if(messageArea.value == ''){
        messageArea.style.backgroundColor = "#f8d7da";
        messageArea.placeholder = "Please Fill";

}
    else{
        messageArea.style.backgroundColor = "white";
    }

}

function initialize(){
    warns.style.display = "none";

}


myForms.addEventListener('submit',(e) => {
    e.preventDefault();
})



