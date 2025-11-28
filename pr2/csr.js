const defaultBg = "#CCEECC";
const defaultText = "hover over an image below";

function check(links, tags){
    document.getElementsByClassName("title")[0].innerHTML = tags;
    document.getElementsByClassName("img-main")[0].style.backgroundImage = `url(${links})`;
}

function rsImg(){
    const imgMain = document.querySelector(".img-main");
    imgMain.style.backgroundImage = "";    
    imgMain.style.backgroundColor = defaultBg; 
    document.querySelector(".title").innerHTML = defaultText;
}

function focusImg(){
    imgFocus = document.querySelectorAll(".imgs img");

    for(var i=0; i<imgFocus.length; ++i){
        imgFocus[i].setAttribute("tabindex", "0");
    }
}