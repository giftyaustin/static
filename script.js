function dropthenav(){
    var x = document.getElementById("dropdownclick");
    if (x.className===""){
        x.className+= "dropped-nav";
    }
    else{
        x.className="";
    }
}