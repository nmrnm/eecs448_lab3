document.addEventListener("DOMContentLoaded", (e) => {

//  let image = document.querySelector("#image");
  let imageNum = 1;
  let next = document.querySelector("#next");
  let previous = document.querySelector("#previous");

  previous.addEventListener("click", () => {
    if(imageNum == 1){
      imageNum = 5;
    }else{
      imageNum = imageNum - 1;
    }
    document.querySelector("#image").src = "index" + imageNum + ".jpeg";
  });
  next.addEventListener("click", () => {
    if(imageNum == 5){
      imageNum = 1;
    }else{
      imageNum = imageNum + 1;
    }
    document.querySelector("#image").src = "index" + imageNum + ".jpeg";
  });
});
