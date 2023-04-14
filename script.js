var x = document.getElementById("Topnav");

function myMenu(){
    if(x.className === "navbar"){
        x.className += " responsive";
    }else{
        x.className = "navbar";
    }
}