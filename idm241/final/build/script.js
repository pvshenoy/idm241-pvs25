
var card = document.getElementById("card");
    card.onmouseover = mouseOver;
    card.onmouseout = mouseOut;
    
    function mouseOver() { 
        document.getElementById("item-1").classList.add("list-item-hover");
        document.getElementById("item-2").classList.add("list-item-hover");
        document.getElementById("item-3").classList.add("list-item-hover");
    }
    function mouseOut() { 
        document.getElementById("item-1").classList.remove("list-item-hover");
        document.getElementById("item-2").classList.remove("list-item-hover");
        document.getElementById("item-3").classList.remove("list-item-hover");
    }



