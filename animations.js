let toggled = false
function toggleTransparency() {
   if (toggled == true){
        document.getElementsByClassName("top")[0].style.opacity = 1;
        toggled = false
    } else {
    document.getElementsByClassName("top")[0].style.opacity = 0;
    toggled = true;
    }
}