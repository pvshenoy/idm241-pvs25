var myImage = document.getElementById("blue");
    myImage.onmouseover = mouseOver;
    myImage.onmouseout = mouseOut;
    
    function mouseOver() { 
      myImage.src = "../images/eye_icon-hover.svg";
    }
    function mouseOut() { 
      myImage.src = "../images/eye-icon.svg";
    }



// function hover(element) {
//     element.setAttribute('src', 'http://dummyimage.com/100x100/eb00eb/fff');
//   }
  
//   function unhover(element) {
//     element.setAttribute('src', 'http://dummyimage.com/100x100/000/fff');
//   }
