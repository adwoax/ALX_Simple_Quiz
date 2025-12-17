document.addEventListener("DOMContentLoaded", function () {

  // 7. Retrieve the "submit-answer" button
  const submitButton = document.getElementById("submit-answer");

  const feedback = document.getElementById("feedback");

  // 1. Retrieve the correct answer
  const correctAnswer = "4";

  function checkAnswer() {

    // 2. Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (!selectedOption) {
      feedback.textContent = "Please select an answer.";
      feedback.style.color = "red";
      return;
    }

    const userAnswer = selectedOption.value;

    // 3. Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {

      // 4. Provide feedback for correct answer
      feedback.textContent = "Correct! Well done.";
      feedback.style.color = "green";

    } else {

      // 5. Provide feedback for incorrect answer
      feedback.textContent = "That's Incorrect. Try again!";
      feedback.style.color = "red";
    }
  }

  // 6. Add event listener to the "Submit Answer" button
  submitButton.addEventListener("click", checkAnswer);

});
