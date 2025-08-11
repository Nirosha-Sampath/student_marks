function showScreen(screenId) {
    // Hide all screens
    document.querySelectorAll('.container').forEach(screen => {
        screen.classList.add('hidden');
    });

    // Show selected screen
    const screen = document.getElementById(screenId);
    screen.classList.remove('hidden');
    screen.classList.add('fade-in');
}


function showSubjectSelection() {
    showScreen('subjectSelection');
}

function showGradeSelection() {
    const subject = document.getElementById('subjectSelect').value;
    if (!subject) {
        alert('Please select a subject first'); return;
    }
    //showScreen('grade01');
    showGrade01()
}

function showGrade01() {
    showScreen('grade01');
}

function showGrade02() {
    showScreen('grade02');
}

function showGrade12() {
    showScreen('grade12');
}

function showSubmitMarks() {
    showScreen('submitMarks');
}

function showSubmitted() {
    showScreen('submitted');
}