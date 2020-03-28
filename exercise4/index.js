document.addEventListener("DOMContentLoaded", () => {

  let submit = document.querySelector("#submit");

  submit.addEventListener("click", () => {
    let para = document.querySelector("#para");
    let stringBorder = document.querySelector("#borderWidth").value.toString();
   
    let borderR = parseInt(document.querySelector("#borderR").value);
    let borderG = parseInt(document.querySelector("#borderG").value);
    let borderB = parseInt(document.querySelector("#borderB").value);	  
    if(stringBorder != ""&& !isNaN(borderR) && !isNaN(borderG) && !isNaN(borderB)){
        para.style.borderStyle = "solid";
        para.style.borderWidth = stringBorder;
	para.style.borderColor = "rgb("+borderR+","+borderG+","+borderB+")";
    }
    let backR = parseInt(document.querySelector("#backR").value);
    let backG = parseInt(document.querySelector("#backG").value);
    let backB = parseInt(document.querySelector("#backB").value);	     
    para.style.backgroundColor = "rgb("+backR+","+backG+","+backB+")";
    console.log(typeof(stringBorder),typeof(backR), backR, stringBorder,borderR, borderG, borderB)
  })

});
