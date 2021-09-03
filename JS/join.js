var email = document.getElementById("em");
var mob = document.getElementById("mob");
var pwd = document.getElementById("pw");
var cofm = document.getElementById("cpw");
var nam = document.getElementById("name");
var adrs = document.getElementById("adrs");
var namer = document.getElementById("namer");
var ader =document.getElementById("ader");
var emer = document.getElementById("emer");
var mer = document.getElementById("mer");
var per = document.getElementById("per");
var cper =document.getElementById("cper");
var meter =document.getElementById("met");
var regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
var mobno=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var pas =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
var uper =/^(?=.*[A-Z]).{1,}$/;
var lowr =/^(?=.*[a-z]).{1,}$/;
var numr =/^(?=.*[0-9]).{1,}$/;
var up =document.getElementById("up");
var lw =document.getElementById("lw");
var nm=document.getElementById("nm");
var et =document.getElementById("et");
var a=0;
var n=0;
var e=0;
var m=0;
var p=0;
var c=0;
function validate(){
    uname();
    adr();
    mail();
    phone();
    paswd();
    confm();
    if(n==1&&a==1&&e==1&&m==1&&p==1&&c==1){
        return true;
    }
    else{
        return false;
    }
}
function uname (){
    if(nam.value.trim()==""){
        namer.innerHTML="This field can not be empty."
        namer.style.color="red";
        nam.style.border="2px solid red";
        return n=0;
    }
    else{
        namer.innerHTML="";
        nam.style.border="";
        return n=1;
    }
}
function adr (){
    if(adrs.value.trim()==""){
        ader.innerHTML="This field can not be empty.";
        ader.style.color="red";
        adrs.style.border="2px solid red";
        return a=0;
    }
    else{
        ader.innerHTML="";
        adrs.style.border="";
        return a=1;
    }
}
function mail(){
    if(email.value.trim()==""){
        emer.innerHTML="Email can not be empty.";
        emer.style.color="red";
        email.style.border="2px solid red";
        return e=0;
    }
    else{
        if(regexp.test(email.value)){
            emer.innerHTML="Email entered is valid.";
            emer.style.color="rgb(16, 247, 8)";
            email.style.border="";
            return e=1;
        }
        else{
            emer.innerHTML="Email entered is invalid";
            emer.style.color="red";
            email.style.border="2px solid red";
            return e=0;
        }
    }
}
function phone(){
    if(mob.value.trim()==""){
        mer.innerHTML="Mobile number can not be blank."
        mer.style.color="red";
        mob.style.border="2px solid red";
        return m=0;
    }
    else{
        if(mobno.test(mob.value)){
            mer.innerHTML="Mobile number is valid.";
            mer.style.color="rgb(16, 247, 8)";
            mob.style.border="";
            return m=1;
        }
        else{
            mer.innerHTML="Mobile number entered is invalid.";
            mer.style.color="red";
            mob.style.border="2px solid red";
            return m=0;
        }
    }
}
function paswd(){
    if(pwd.value.trim()==""){
        up.setAttribute("src","IMAGES/black.jpg");
        lw.setAttribute("src","IMAGES/black.jpg");
        nm.setAttribute("src","IMAGES/black.jpg");
        et.setAttribute("src","IMAGES/black.jpg");
        per.innerHTML="Password can not be empty."
        per.style.color="red";
        pwd.style.border="2px solid red";
        meter.value="0";
        return p=0;
    }
    else{
        per.innerHTML="";
        pwd.style.border="";
        if(pwd.value.length>=8){
            et.setAttribute("src","IMAGES/TIK.png");
            if(pas.test(pwd.value)){
                up.setAttribute("src","IMAGES/TIK.png");
                lw.setAttribute("src","IMAGES/TIK.png");
                nm.setAttribute("src","IMAGES/TIK.png");
                per.innerHTML="Password is strong.";
                per.style.color="rgb(16, 247, 8)";
                pwd.style.border="2px solid rgb(16, 247, 8)";
                meter.value="15";
                return p=1;
            }
            else{
            
              if(uper.test(pw.value)){
                  up.setAttribute("src","IMAGES/TIK.png");
                  meter.value="7";
              }
              else{
                  up.setAttribute("src","IMAGES/black.jpg");
                  meter.value="6";
              }
              if(lowr.test(pw.value)){
                  lw.setAttribute("src","IMAGES/TIK.png");
                  meter.value="7";
              }
              else{
                lw.setAttribute("src","IMAGES/black.jpg");
                meter.value="6";
              }
              if(numr.test(pw.value)){
                nm.setAttribute("src","IMAGES/TIK.png");
                meter.value="7";
              }
              else{
                nm.setAttribute("src","IMAGES/black.jpg");
                meter.value="6";
              }
            }

        }
        else{
            et.setAttribute("src","IMAGES/black.jpg");
            per.innerHTML="Password is too weak.";
            per.style.color="red";
            pwd.style.border="2px solid red";
            meter.value="4";
            return p=0;
        }
        
    }
}
function confm(){
    if(cofm.value.trim()==""){
        cper.innerHTML="This field is can not be blank.";
        cper.style.color="red";
        cofm.style.border="2px solid red";
        return c=0;
    }
    else{
        cper.innerHTML="";
        cofm.style.border="";
        if(pas.test(pwd.value)){
            if(pwd.value==cofm.value){
                cper.innerHTML="Password matching.";
                cper.style.color="rgb(16, 247, 8)";
                cofm.style.border="2px solid rgb(16, 247, 8)";
                cofm.style.color="rgb(16, 247, 8)";
                return c=1;
            }
            else{
                cper.innerHTML="Password not matching.";
                cper.style.color="red";
                cofm.style.border="2px solid red";
                cofm.style.color="red";
                return c=0;
            }
        }
        else{
            per.innerHTML="Password is invalid.";
            per.style.color="red";
            return c=0;
        }
    }
}
function tog(){
    var togl= document.getElementById("pw");
    if(togl.type==="password"){
        togl.type="text";
    }
    else{
        togl.type="password";
    }
}