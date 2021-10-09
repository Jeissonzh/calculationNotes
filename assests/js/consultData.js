document.getElementById("consultBtn").addEventListener("click",function (e) {
    e.preventDefault()

    var inputId = document.getElementById("idConsult").value
    var dataConsult = localStorage.getItem(inputId)

    if (dataConsult==null) {
        alert("El Id del estudiante que introdujo no existe")
    } else {
        var array = dataConsult.split(',')
        var result = (parseFloat(array[1])+parseFloat(array[2])+parseFloat(array[3]))/3

        var pElement = document.getElementById("data")
        pElement.innerHTML = array[0] + "<br>" + "<br>"
        pElement.innerHTML = pElement.innerHTML + "Nota 1: " + array[1] + "<br>"
        pElement.innerHTML = pElement.innerHTML + "Nota 2: " + array[2] + "<br>"
        pElement.innerHTML = pElement.innerHTML + "Nota 3: " + array[3] + "<br>" + "<br>"
        pElement.innerHTML = pElement.innerHTML + "Nota Final: " + result.toFixed(2) + "<br>" + "<br>"
        
        if (result>=3) {
            pElement.innerHTML = pElement.innerHTML + "Felicitaciones!! Usted aprobo."
        } else{
            pElement.innerHTML = pElement.innerHTML + "Siga intentando!! Usted no aprobo"
        }
    }
})