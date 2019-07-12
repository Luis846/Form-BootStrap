let warns = document.querySelector('.alert');
let forms = document.querySelector('.myForm');
let inputs = document.getElementsByTagName("input");
const myForms = document.getElementById('myForm');

function validateForm() {
  let vals = document.forms["myForm"]["fname"].value;
  if (vals === "") {
      warns.style.display = "block";
     for (e of inputs) {
         e.placeholder = "yoooooo"
        e.style.backgroundColor = "red !important";
}
  }else{
      initialize();
  }
}

function initialize(){
    warns.style.display = "none";
    inputs.style.backgroundColor = '#fff !important';
}


myForms.addEventListener('submit',(e) => {
    e.preventDefault();
})



