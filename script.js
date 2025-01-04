document.addEventListener(`visibilitychange`,(e)=>{
    if(e.target.visibilityState === `hidden`){
        document.querySelector(".pass").classList.add("faild")
    }
})