document.addEventListener("DOMContentLoaded", () => {

  let submit = document.querySelector("#submit");

  submit.addEventListener("click", () => {
    let para = document.querySelector("#para");
    para.style.backgroundColor = document.querySelector("#backgroundColor").value;
    let stringBorder = "" + document.querySelector("#borderWidth").value + "px solid " + document.querySelector("#borderColor").value;
    para.style.border = stringBorder;

    console.log(typeof(stringBorder), stringBorder)
  })

});
