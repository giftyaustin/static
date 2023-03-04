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
    var a = document.getElementById("ed-clicked");
    var p = document.getElementById("educationClicked");
    p.className="item-s";
    a.className="skill-display";
    if (x.className==="skill-display"){
        x.className+= " skill-display-clicked";
        y.className+= " item-s-clicked";

    }
    else{
        x.className="skill-display";
        y.className+= "item-s";

    }
}

function educationClicked(){
    var x= document.getElementById("ed-clicked");
    var y = document.getElementById("skilldrop");
    var p = document.getElementById("educationClicked");
    if (x.className=="educationdisplay"){
        x.className="skill-display";
        p.className="item-s";
        y.className="skill-display";
        var z = document.getElementById("skillsbuttonclicked");
        z.className+= "item-s";
        return;
    }
    p.className+=" item-s-clicked";
   
    x.className="educationdisplay";
    y.className="skill-display";
    var z = document.getElementById("skillsbuttonclicked");
    z.className+= "item-s";



}