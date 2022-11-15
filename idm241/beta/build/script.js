var myImage = document.getElementById("blue");
    myImage.onmouseover = mouseOver;
    myImage.onmouseout = mouseOut;
    
    function mouseOver() { 
      myImage.src = "../images/eye_icon-hover.svg";
    }
    function mouseOut() { 
      myImage.src = "../images/eye-icon.svg";
    }

// const card = document.getElementById("card");
// const listItem = document.getElementsByClassName("list-item");

// card.addEventListener('mouseover'); {

// }

// function onHover() {
//   var listItem = document.getElementsByClassName("list-item");
//   listItem.classList.add("list-item-hover");
// }




    
