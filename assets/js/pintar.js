let ele = document.querySelector("#ele1");
ele.style.backgroundColor = "greenligth";

let painting= function(element,color){
    element.style.backgroundColor = color;
}

ele.addEventListener('click', () => painting(ele,'yellow'));