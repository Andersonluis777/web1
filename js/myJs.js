function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
}
    
function botao(professor) {
  var classes = document.getElementsByClassName("some");
  var i, davez;
  for (i = 0; i < classes.length; i++){
    davez = classes[i];
    if (davez.style.display != "none"){
      document.getElementById(davez.id).style.display = "none";
    }
  }
    document.getElementById(professor).style.display = "block";
}
