document.querySelector(#modal).style.display = "none";

document.querySelector(#addCity).onclick = function() {
    document.querySelector(#modal).style.display = "block";
}

document.querySelector(#closeModal).onclick = function() {
    document.querySelector(#modal).style.display = "none";
}

function closeModal(){
    document.querySelector(#modal).style.display = "none";
}