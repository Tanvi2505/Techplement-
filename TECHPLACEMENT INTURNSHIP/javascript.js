
document.addEventListener('DOMContentLoaded', () => {
    const enrollButtons = document.querySelectorAll('.enroll-btn');

    enrollButtons.forEach(button => {
        button.addEventListener('click', event => {
            const courseId = event.target.closest('.course-card').dataset.courseId;
            alert(`You have successfully enrolled in Course ID: ${courseId}`);
        });
    });
});
