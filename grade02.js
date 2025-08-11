function validateGrade02() {
    const grade02Container = document.getElementById('grade02');
    const inputs = grade02Container.querySelectorAll('.marks-input');
    const nextBtn = document.getElementById('grade02NextBtn');

    let allFilled = true;
    inputs.forEach(input => {
        if (input.value === '' || input.value < -1 || input.value > 100) {
            allFilled = false;
        }
    });

    nextBtn.disabled = !allFilled;
}