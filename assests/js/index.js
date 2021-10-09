document.getElementById("saveDataBtn").addEventListener("click", function (e) {
    e.preventDefault()

    var studentId = document.getElementById("studentId").value
    var studentName = document.getElementById("studentName").value
    var note1 = parseFloat(document.getElementById("note1").value)
    var note2 = parseFloat(document.getElementById("note2").value)
    var note3 = parseFloat(document.getElementById("note3").value)

    console.log(studentId, studentName, note1, note2, note3)

    if (studentId=="" || studentName=="" || isNaN(note1) || isNaN(note2) || isNaN(note3)) {
        alert("Debe llenar todos los campos!")
    } else if ((note1<=5 && note2<=5 && note3<=5) && (note1>=0 && note2>=0 && note3>=0)) {
        localStorage.setItem(studentId, [studentName, note1, note2, note3])
        alert("Todo se guardo correctamente")
    } else {
        alert("La nota no es correcta, debe estar entre 0 y 5!")
    }
})