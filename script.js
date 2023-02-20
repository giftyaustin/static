function dropthenav(){
    var x = document.getElementById("dropdownclick");
    if (x.className===""){
        x.className+= "dropped-nav";
    }
    else{
        x.className="";
    }
}

function skillDropClicked(){
    var x = document.getElementById("skilldrop");
    var y = document.getElementById("skillsbuttonclicked");
    if (x.className==="skill-display"){
        x.className+= " skill-display-clicked";
        y.className+= " item-s-clicked";
    }
    else{
        x.className="skill-display";
        y.className+= "item-s";

    }
}