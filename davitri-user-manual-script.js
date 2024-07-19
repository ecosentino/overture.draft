const cloud = document.getElementById("cloud");
const sidebar = document.querySelector(".sidebar");
const spans = document.querySelectorAll("span"); 
const menu = document.querySelector(".menu");
const main = document.querySelector("main");

menu.addEventListener("click",()=>{
    sidebar.classList.toggle("max-sidebar");
    if(sidebar.classList.contains("max-sidebar")){
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
    else{
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }
    if(window.innerWidth<=320){
        sidebar.classList.add("mini-sidebar");
        main.classList.add("min-main");
        spans.forEach((span)=>{
            span.classList.add("hidden");
        })
    }
});

cloud.addEventListener("click",()=>{
    sidebar.classList.toggle("mini-sidebar");  
    main.classList.toggle("min-main");
    spans.forEach((span)=>{
        span.classList.toggle("hidden");
    });
});