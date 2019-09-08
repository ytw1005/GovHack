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