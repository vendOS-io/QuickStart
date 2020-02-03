const OS = new vendOS()

let button = document.getElementById("vend")
let error = document.getElementById("error")

button.addEventListener("click", ()=>{
    if(button.classList.contains("working")){
        
        button.classList.toggle("working");

        button.innerHTML = "VENDING"

        OS.Machine.randomVend().then(()=>{

            button.innerHTML = "VENDED"

            setTimeout(()=>{
                button.classList.toggle("working");

                button.innerHTML = "VEND"
            }, 5000)

        }).catch((e)=>{
            button.classList.toggle("working");

            error.innerHTML = "<p>" + e + "</p>"
        })
    }
})