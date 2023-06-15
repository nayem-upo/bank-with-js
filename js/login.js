const btnLogin = document.getElementById('btn-login');
const userEmail = document.getElementById('user-email');
const userPass = document.getElementById('user-pass')
btnLogin.addEventListener('click', function () {
    const email = userEmail.value;
    const pass = userPass.value;
    if (email === 'nayem@gmail.com' && pass==='nayem') {
        window.location.href = 'bank.html';
        // window.open('bank.html');
    }
    else {
        alert("Please enter valid email and password")
    }
    

})