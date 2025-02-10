
let productSearch=document.querySelector(".products-search")
let search=document.getElementById("search")
let products=document.getElementById("products")
let productBox=products.querySelectorAll("div")

search.addEventListener("keyup",function(event){
    let enteredvalue=event.target.value.toUpperCase()
    for(i=0;i<productBox.length;i++){
        let productname=productBox[i].querySelector("p").textContent
        if(productname.toUpperCase().indexOf(enteredvalue)<0){
            productBox[i].style.display="none"
        }
        else{
            productBox[i].style.display="block"
        }
    }   
})

