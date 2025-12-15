document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit-answer");
  const feedback = document.getElementById("feedback");

  submitButton.addEventListener("click", function () {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (!selectedOption) {
      feedback.textContent = "Please select an answer.";
      feedback.style.color = "red";
      return;
    }

    if (selectedOption.value === "4") {
      feedback.textContent = "Correct! 🎉";
      feedback.style.color = "green";
    } else {
      feedback.textContent = "Incorrect. Try again.";
      feedback.style.color = "red";
    }
  });
});
