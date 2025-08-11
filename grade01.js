function validateGrade01() {
    const grade01Container = document.getElementById('grade01');
    const inputs = grade01Container.querySelectorAll('.marks-input');
    const nextBtn = document.getElementById('grade01NextBtn');

    let allFilled = true;
    inputs.forEach(input => {
        if (input.value === '' || input.value < -1 || input.value > 100) {
            allFilled = false;
        }
    });

    nextBtn.disabled = !allFilled;
}