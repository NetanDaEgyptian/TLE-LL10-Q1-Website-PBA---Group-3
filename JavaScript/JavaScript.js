function hovers(elem) {
    elem.style.color = "#faa0a0"
}

function outs(elem) {
    elem.style.color = "black"
}
function date() {
    var date=new Date()
    var datehtml=document.getElementById("date")
    datehtml.innerHTML+=`${date.getMonth()+1}-${date.getDate()}-${date.getFullYear()}`
}
var form=document.getElementById("form")
form.addEventListener("submit",(E)=>{
    E.preventDefault()
    var form2=E.target
    var data=new FormData(form2)
    fetch(form2.action,{
        method:form2.method,
        body:data
    }).then(alert("Your input is greatly appreciated."))
})