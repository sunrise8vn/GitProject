function changeValue(id, newText) {
    var el       = document.getElementById(id);
    el.innerHTML = el.value  = newText;  // change the value passed to the next page
    return false;
}