const username1 = "ays"
const password1 = "28bagi7"

function bbb() {
    //tangkap inputan user
    let userInput = document.getElementById("username").value
    let passwordInput = document.getElementById("password").value

    let form = document.getElementById("form")

    if (username1 == userInput && password1 == passwordInput) {
        alert("Login Berhasil")
        form.submit()
    }
    else{
        alert("Login Gagal")
    }
}
