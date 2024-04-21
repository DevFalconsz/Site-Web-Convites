function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var activity = document.getElementById('activity').value;
    var time = document.getElementById('time').value;

    if (name.trim() == '' || email.trim() == '' || phone.trim() == '' || activity.trim() == '' || time.trim() == '') {
        alert('Por favor, preencha todos os campos.');
        return false;
    }

    document.getElementById('registration-form').reset();
    document.getElementById('success-message').style.display = 'block';
    setTimeout(function () {
        document.getElementById('success-message').style.display = 'none';
    }, 5000);

    return false;
}
