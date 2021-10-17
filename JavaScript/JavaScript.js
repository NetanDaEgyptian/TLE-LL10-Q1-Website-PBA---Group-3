function hovers(elem) {
    elem.style.color = "#FFD700"
}

function outs(elem) {
    elem.style.color = "navajowhite"
}
function date() {
    var date=new Date()
    var datehtml=document.getElementById("date")
    datehtml.innerHTML+=`${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`
}