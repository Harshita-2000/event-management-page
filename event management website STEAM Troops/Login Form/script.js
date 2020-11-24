const email = document.getElementById('email')
const name = document.getElementById('uname')
const password = document.getElementById('password')
const login = document.getElementById('login')
const error = document.getElementById('error')

form.addEventListener('submit', (e) -> {
    let messages = []
    if (uname.value === '' || uname.value == null) {
    messages.push('UserName is required')
}
    if (password.value.length <= 6){
    messages.push('Password must be at least 6 characters')
}
    if (password.value.length >= 20){
    messages.push('Password must bot be longer than 20 characters')
}
}                  
                      
                      
    if(messages.length > 0){
     e.preventDefault()
    errorElement.innerText = messages.join()
}
   
})