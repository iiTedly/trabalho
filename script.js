function mostrar()
{
    const aside = document.querySelectorAll("aside")[0]

    if(aside.style.display== "block"){
        aside.style.display = "none"
    }else{
        aside.style.display= "block"
    }
    }