function filterFunction() {
    var input, filter, a, i;
    input = document.getElementById("in");
    filter = input.value.toLowerCase();
    a = document.getElementById("options").getElementsByTagName("a");
    // console.log(a[0].textContent);
    // console.log(a[1].innerText.toLowerCase);
    // a = div.getElementByTagName("a");
    for (i = 0; i < a.length; i++) {
        value = a[i].textContent || a[i].innerText;
        if(value.toLowerCase().indexOf(filter)>-1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

function nextq() {
    document.getElementById("first-q").style.display = "none";
    document.getElementById("nextbtn").style.display = "none";
    document.getElementById("header").classList.toggle("");
    // document.getElementById("first-q").style.opacity = 0;
    // document.getElementById("first-q").style.transition = "opacity 3s ease-in-out";
}