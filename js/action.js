function checkUser(){
    if(!localStorage.getItem("userKey")){
        if(window.name != "index"){
            window.location.href ="../index.html";
        }
    }else{
        if(window.name == "index"){
            window.location.href ="pages/page1.html";
        }
    }
}
checkUser();
function logout(){
    localStorage.removeItem("userKey");
    //checkUser();
}


