//selecting the element => side-navbar
let sidenav=document.querySelector(".side-navbar")

//adding a funtion function  for showing the side-navbar
function showsidenav()
{
    sidenav.style.left="0"
}

//adding a function for hiding the side-navbar
function closesidenav()
{
    sidenav.style.left="-60%"
}