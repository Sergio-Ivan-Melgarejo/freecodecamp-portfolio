const btn = document.getElementById("btn-navbar");
const navbar = document.getElementById("navbar");

const body = document.getElementById("body");
const windows95 = document.getElementById("windows95");
const windowsxp = document.getElementById("windowsxp");
const windows10 = document.getElementById("windows10");

addEventListener("DOMContentLoaded",()=>{

    btn.addEventListener("click",()=>{
        navbar.classList.toggle("open")
    })
    
    windows95.addEventListener("click",()=>{
        windows95.classList.toggle("active")
        windowsxp.classList.remove("active")
        windows10.classList.remove("active")

        body.classList.toggle("win-95")
        body.classList.remove("win-xp")
        body.classList.remove("win-10")
    })
    
    windowsxp.addEventListener("click",()=>{
        windows95.classList.remove("active")
        windowsxp.classList.toggle("active")
        windows10.classList.remove("active")

        body.classList.remove("win-95")
        body.classList.toggle("win-xp")
        body.classList.remove("win-10")
    })
    
    windows10.addEventListener("click",()=>{
        windows95.classList.remove("active")
        windowsxp.classList.remove("active")
        windows10.classList.toggle("active")

        body.classList.remove("win-95")
        body.classList.remove("win-xp")
        body.classList.toggle("win-10")
    })
    
})
