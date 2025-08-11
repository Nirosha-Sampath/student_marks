function validateGrade12() {
    const grade12Container = document.getElementById('grade12');
    const inputs = grade12Container.querySelectorAll('.marks-input');
    const submitBtn = document.getElementById('submitBtn');

    let allFilled = true;
    inputs.forEach(input => {
        if (input.value === '' || input.value < -1 || input.value > 100) {
            allFilled = false;
        }
    });

    submitBtn.disabled = !allFilled;
}