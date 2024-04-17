const alertButton = document.getElementById('alertButton');
const alertContainer = document.getElementById('alertContainer');

alertButton.addEventListener('click', function() {
    if (alertContainer.classList.contains('d-none')) {
        alertContainer.classList.remove('d-none');
    } else {
        alertContainer.classList.add('d-none');
    }
});



document.getElementById('birthdayForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const birthdayInput = document.getElementById('birthday').value;
    const dateRegex = /^\d{2}-\d{2}-\d{2}$/;

    if (dateRegex.test(birthdayInput)) {
        const birthdayMoment = moment(birthdayInput, 'DD-MM-YY');
        const formattedBirthday = birthdayMoment.format('Do MMMM YYYY');
        document.getElementById('result').textContent = formattedBirthday;
        document.getElementById('error').classList.add('d-none');
    } else {

        document.getElementById('error').textContent = 'Некорректный формат даты. Введите дату в формате ДД-ММ-ГГ';
        document.getElementById('error').classList.remove('d-none');
    }
});