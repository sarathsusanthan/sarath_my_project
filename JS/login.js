var user = document.getElementById("user");
var pad = document.getElementById("paswd");
var uer = document.getElementById("uer");
var paser = document.getElementById("paser");
var u=0;
var w=0;
var eml =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
var pas =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
function check(){
    usrnm();
    passw();
   if(u==1&&w==1){
       return true;
   }
   else{
       return false;
   }
}
function usrnm(){
    if(user.value.trim()==""){
        uer.innerHTML="User name can not be blank."
        uer.style.color="red";
        user.style.border="2px solid red";
        return u=0;
    }
    else{
        uer.innerHTML="";
        user.style.border="";
        if(eml.test(user.value)){
            uer.innerHTML="";
            return u=1;
        }
        else{
            uer.innerHTML="Email id is invalid.";
            uer.style.color="red";
            return u=0;
        }
    }
}
function passw(){
    if(pad.value.trim()==""){
        paser.innerHTML="Password can not be blank."
        paser.style.color="red";
        pad.style.border="2px solid red";
        return w=0;
    }
    else{
        paser.innerHTML="";
        pad.style.border="";
        if(pas.test(pad.value)){
            paser.innerHTML="";
            return w=1;
        }
        else{
            paser.innerHTML="Password entered is invalid.";
            paser.style.color="red";
            pad.style.border="2px solid red";
            return w=0;
        }
    }
}