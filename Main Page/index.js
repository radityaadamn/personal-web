function sendMail() {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");

  var name = nameInput.value.trim();
  var email = emailInput.value.trim();
  var message = messageInput.value.trim();

  // Auto-remove errors when users start typing.
  removeErrorOnInput(nameInput);
  removeErrorOnInput(emailInput);
  removeErrorOnInput(messageInput);

  // Reset error class
  [nameInput, emailInput, messageInput].forEach((input) =>
    input.classList.remove("input-error")
  );

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Empty validation
  if (name === "" || email === "" || message === "") {
    if (name === "") nameInput.classList.add("input-error");
    if (email === "") emailInput.classList.add("input-error");
    if (message === "") messageInput.classList.add("input-error");

    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Please fill in all fields before sending your message.",
      confirmButtonText: "Okay",
      customClass: {
        popup: "custom-popup",
      },
    });

    return;
  }

  // Email validation
  if (!emailRegex.test(email)) {
    emailInput.classList.add("input-error");

    Swal.fire({
      icon: "error",
      title: "Invalid Email",
      text: "Please enter a valid email address.",
      confirmButtonText: "Okay",
      customClass: {
        popup: "custom-popup",
      },
    });

    return;
  }

  // Disable button
  var submitBtn = document.getElementById("submit");
  submitBtn.disabled = true;

  // Show loading spin
  Swal.fire({
    title: "Sending...",
    allowOutsideClick: false,
    showConfirmButton: false,
    didOpen: () => Swal.showLoading(),
    customClass: {
      popup: "custom-popup",
    },
  });

  var params = { name, email, message };
  const serviceID = "service_rm0muks";
  const templateID = "template_45gvk6b";

  emailjs
    .send(serviceID, templateID, params)
    .then(() => {
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";

      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Your message has been sent successfully!",
        confirmButtonText: "Okay",
        customClass: {
          popup: "custom-popup",
        },
      });
    })
    .catch((err) => {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Failed!",
        text: "Failed to send your message. Please try again later.",
        confirmButtonText: "Okay",
        customClass: {
          popup: "custom-popup",
        },
      });
    })
    .finally(() => {
      submitBtn.disabled = false;
    });
}

function removeErrorOnInput(input) {
  input.addEventListener("input", () => {
    input.classList.remove("input-error");
  });
}
