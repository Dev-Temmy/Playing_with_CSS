let button = document.getElementsByTagName("button")[0] //if [0] is not included it will return an error because you are trying to acces an array
button.addEventListener("click", function(){
    document.write("Welcome!")
})
