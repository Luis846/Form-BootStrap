let warns = document.querySelector('.alert');
let forms = document.querySelector('.myForm');
let inputs = document.getElementsByTagName("input");
const myForms = document.getElementById('myForm');

function validateForm() {
  let vals = document.forms["myForm"]["fname"].value;
  
      warns.style.display = "block";
     for (e of inputs) {
         if(vals === ""){
             e.placeholder = "Please Fill";
             e.style.backgroundColor = '#f8d7da';
         }else{
             e.style.backgroundColor = "white";
         }
}
 
   
        
  
}

function initialize(){
    warns.style.display = "none";
    
}


myForms.addEventListener('submit',(e) => {
    e.preventDefault();
})



