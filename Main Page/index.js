function sendMail() {
  var name = document.getElementById("name").value.trim();
  var emailInput = document.getElementById("email");
  var email = emailInput.value.trim();
  var message = document.getElementById("message").value.trim();

  // empty form validation
  if (name === "" || email === "" || message === "") {
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

  // email validation
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    emailInput.style.border = "2px solid red";

    Swal.fire({
      icon: "error",
      title: "Invalid Email",
      text: "Please enter a valid email address.",
      confirmButtonText: "Okay",
      customClass: {
        popup: "custom-popup",
      },
    }).then(() => {
      emailInput.style.border = "";
    });

    return;
  }

  var submitBtn = document.getElementById("submit");
  submitBtn.disabled = true;

  Swal.fire({
    title: "Sending...",
    customClass: {
      popup: "custom-popup",
    },
    allowOutsideClick: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  var params = {
    name: name,
    email: email,
    message: message,
  };

  const serviceID = "service_rm0muks";
  const templateID = "template_45gvk6b";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      emailInput.value = "";
      document.getElementById("message").value = "";

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
