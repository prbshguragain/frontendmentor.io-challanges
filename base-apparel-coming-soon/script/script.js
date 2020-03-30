function validate(){
    var getText = document.getElementById("text1").value;
    var regX = /^([a-zA-Z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})?$/;
    
    if (regX.test(getText)){
        document.getElementById("error").style.visibility="hidden";
        document.getElementById("erroricon").style.visibility="hidden";
        document.getElementById("text1").style.border="1px solid hsl(0, 74%, 74%)";
        alert(`Your email ${getText} has been registered`);
    }

    else{
        document.getElementById("error").style.visibility="visible";
        document.getElementById("erroricon").style.visibility="visible";
        document.getElementById("text1").style.border="2px solid hsl(0, 74%, 74%)";
    }
}
