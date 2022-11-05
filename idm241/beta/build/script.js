var myImage = document.getElementById("blue");
    myImage.onmouseover = mouseOver;
    myImage.onmouseout = mouseOut;
    
    function mouseOver() { 
      myImage.src = "../images/eye_icon-hover.svg";
    }
    function mouseOut() { 
      myImage.src = "../images/eye-icon.svg";
    }

const listItem = document.querySelectorAll('.list-item')
const cardHover = document.querySelector('#card')

cardHover.addEventListener('mouseover', () => {
  userFeedback.classList.add('list-item-hover')
})



    
