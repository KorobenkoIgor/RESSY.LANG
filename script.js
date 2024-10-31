let currentFeedbackIndex = 0;

function changeFeedback(direction) {
    const feedbackItems = document.querySelectorAll('.feedback-item');
    feedbackItems[currentFeedbackIndex].classList.remove('active');

    currentFeedbackIndex = (currentFeedbackIndex + direction + feedbackItems.length) % feedbackItems.length;

    feedbackItems[currentFeedbackIndex].classList.add('active');
}

// Инициализация первого отзыва
document.querySelectorAll('.feedback-item')[0].classList.add('active');
