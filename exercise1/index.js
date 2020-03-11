document.addEventListener("DOMContentLoaded",() => {

  let pass1 = document.querySelector("#password1");
  let pass2 = document.querySelector("#password2");
  let validate = document.querySelector("#Validate");
  let lengthError = document.querySelector("#lengthError")

  validate.addEventListener("click", (e) => {
    if(pass1.value.length < 8 || pass2.value.length < 8){
      lengthError.innerHTML = "One or both of the passwords' length is too short.<br>";

      if(pass1.value.length == 0 || pass2.value.length == 0){
        matchError.innerText = "One or more fields are empty.";
      }else if(pass1.value != pass2.value){
        matchError.innerText = "The passwords do not match as well.";
      }else{
        matchError.innerText = "The passwords do match, however."
      }
    }else{
      lengthError.innerText = "";

    if(pass1.value.length != 0 && pass2.value.length != 0){
      if(pass1.value != pass2.value){
        matchError.innerText = "The passwords do not match.";
      }else{
        matchError.innerText = "Same password, and you got the correct lengths!"
      }
    }

    }
  });




});
