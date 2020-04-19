var Juser;
today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth()).padStart(2, '0');
var yyyy = today.getFullYear();
var timeHH = String(today.getHours()).padStart(2, '0');
var timeMM = String(today.getMinutes()).padStart(2, '0');
var timeSS = String(today.getSeconds()).padStart(2, '0');
//var todayFull = dd + MM[mm] + yyyy + "-" + timeHH+":"+timeMM+":"+timeSS;
var todayDate = dd + "/" + mm + "/" + yyyy;
var todayTime = timeHH+":"+timeMM+":"+timeSS;

function _(elfs){
    return document.getElementById(elfs);
}
function _cr(induk, item, id){
    let itemContainer = _(induk);
    let items = document.createElement(item);
    itemContainer.appendChild(items);
    if(id != ""){
        items.setAttribute("id",id);
        items.setAttribute("name",id);
    }
}
function numRM(theNums){
    return "RM " + Number(theNums).toFixed(2);
}
function xPost(processPage,postParamenter,elements){
    var z = new XMLHttpRequest();
    z.open("POST",processPage,true);
    z.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //z.setRequestHeader("Content-type","application/json");
    // _cr("theBody","div","popup");
    // _cr("popup","div","popupMsg");

    // _("popup").setAttribute("style", "background:rgba(0,0,0,0.8);width:100%;height:100%;position:fixed;top:0;left0;display:flex;")
    // _("popupMsg").innerText = "Processing .... Please wait.";
    z.onreadystatechange = function(){
        if(z.readyState == 4 && z.status == 200){
            // var popupElem = _("popup");
            // popupElem.innerHTML = "";
            // popupElem.parentNode.removeChild(popupElem);
           elements(z.responseText);
        }
    }
    z.send(postParamenter);
}

function gotoPage(pages){
    window.location.href = pages;
}
function gotoStall(pages,stall){
    window.location.href = pages;
    localStorage.setItem("stall",stall);
}

function userCheck(){


if(!localStorage.getItem("user")){
   
    xPost(
        processorLink,
        "newUser",
        function(dat){
            var ff = JSON.parse(dat);
            var theUser = {
                "userID":ff.id,
                "username":"",
                "idKey":ff.idKey,
                "address":"",
                "contactNum":"",
                "email":"",
                "userType":"user"
            }
        localStorage.setItem("user",JSON.stringify(theUser));
        }
    )
    //localStorage.setItem("user","New Keys");
}
if(!localStorage.getItem("carts")){
var fw = '{';
fw += '"userID":"'+JSON.parse(localStorage.getItem("user")).userID+'",';
fw += '"dateOrder":"",';
fw += '"timeOrder":"",';
fw += '"stat":"inCart",';
fw += '"orders":{}';
fw += '}';
//localStorage.removeItem("carts");
localStorage.setItem("carts",fw);
}
}
userCheck();
