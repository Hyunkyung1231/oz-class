const form = document.getElementById("form")

form.addEventListener("submit", function(event){
    event.preventDefault()

    let userEmail = event.target.email.value
    let userName = event.target.name.value
    let userPassword = event.target.password1.value
    let userPasswordconfirmation = event.target.password2.value
    let userNum1 = event.target.phonenum1.value
    let userNum2 = event.target.phonenum2.value
    let userNum3 = event.target.phonenum3.value
    let userLocation = event.target.location.value
    let userGender = event.target.usergender.value
    

    console.log(userEmail)
    console.log(userName)
    console.log(userPassword)
    console.log(userPasswordconfirmation)
    console.log(userNum1, userNum2, userNum3)
    console.log(userLocation)
    console.log(userGender)

})