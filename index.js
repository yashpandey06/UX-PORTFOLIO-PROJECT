const togglepressed=document.getElementById("toggle-button");
const togglecross=document.getElementById("cross");
const togmenu=document.getElementById("vertical-tog");
togglepressed.addEventListener("click",function(){
    if(togmenu.classList.contains("hidden")){
        togmenu.classList.remove("hidden");
        togglepressed.classList.add("hidden");
        togglecross.classList.remove("hidden");
       
    }
   
})
togglecross.addEventListener("click",function(){
    if(!togmenu.classList.contains("hidden")){
       togglecross.classList.add("hidden");
       togglepressed.classList.remove("hidden");
       togmenu.classList.add("hidden");
    }
    
})