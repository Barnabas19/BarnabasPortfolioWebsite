//Accessing DOM element(s)
const list = document.querySelector(".list.list--modifier");


//when window is scrolled
window.addEventListener("scroll", function(){
    setTimeout(() => {
        list.style.cssText = "background-color: teal; position: fixed; top: 0; z-index: 10; animation: appearance 1s ease-in;";
    }, 870);
});