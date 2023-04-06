// Get the form and submit button elements
const form = document.querySelector("#comment-form");
const submitButton = document.querySelector('input[type="submit"]');
const email = document.getElementById("emailError");
const q1Error = document.getElementById("q1Error");
const q2Error = document.getElementById("q2Error");
const q3Error = document.getElementById("q3Error");
const q4Error = document.getElementById("q4Error");

// Email address to send the form data to
const emailAddress = "ravisarahdodampegamage@gmail.com"; // before: first time submit

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the form data
  const formData = new FormData(form);

  if (formData.get("email") == "") {
    email.style.display = "block";
    return;
  } else {
    email.style.display = "none";
  }
  if (formData.get("rating") == "") {
    q1Error.style.display = "block";
    return;
  } else {
    q1Error.style.display = "none";
  }
  if (formData.get("reasons") == "") {
    q2Error.style.display = "block";
    return;
  } else {
    q2Error.style.display = "none";
  }
  if (formData.get("task") == "") {
    q3Error.style.display = "block";
    return;
  } else {
    q3Error.style.display = "none";
  }
  if (formData.get("preference") == "") {
    q4Error.style.display = "block";
    return;
  } else {
    q4Error.style.display = "none";
  }

  // Build the email message
  const message =
    `Comment Form\n\n` +
    `New comment from ${formData.get("email")}:\n\n` +
    `Q1. How satisfied were you with our website today? \nQ1 Answer: ${formData.get(
      "rating"
    )}/10\n` +
    `Q2. Please could you tell us your reasons for giving this rating? \nQ2 Answer: ${formData.get(
      "reasons"
    )}\n` +
    `Q3. How did you want to complete this task today? \nQ3 Answer: ${formData.get(
      "task"
    )}\n` +
    `Q4. If you had to complete this task again, how would you prefer to do it? \nQ4 Answer: ${formData.get(
      "preference"
    )}\n`;

  // Send the email
  const xhr = new XMLHttpRequest();
  xhr.open("POST", `https://formsubmit.co/${emailAddress}`);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Accept", "application/json");
  xhr.send(
    JSON.stringify({
      message: message,
    })
  );

  // Disable the submit button and show a success message
  submitButton.disabled = true;
  form.innerHTML = `<div class="confirmation">
  <img src="../../images/student2/Logo(Black).png" alt="loading" />
  <p>Thank you for your feedback!</p>
  <p>Redirecting to the home page...</p>
  <p>Wait 5 seconds</p> 
  </div>`;
  // open blank page after submit target="_blank" waiting for 5 seconds
  setTimeout(function () {
    window.open(
      "https://formsubmit.co/confirm/f96c8df616c815601144e4ecadfa2e13",
      "_blank"
    );
    window.location.href = "../../pages/student2/commentForm.html";
  }, 5000);
}

// Attach the handleSubmit function to the form submit event
form.addEventListener("submit", handleSubmit);
