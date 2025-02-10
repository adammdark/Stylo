let contactForm=document.getElementById("contact-form")
let submit=document.getElementById("submit")


submit.addEventListener('click',function(event){
    event.preventDefault()
    contactForm.reset()
})