function sendMail() {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

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

  // Disable submit button
  var submitBtn = document.getElementById("submit");
  submitBtn.disabled = true;

  // Show loading spinner
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
      document.getElementById("email").value = "";
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
      // Re-enable submit button
      submitBtn.disabled = false;
    });
}
