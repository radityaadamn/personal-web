function sendMail() {
  var name = document.getElementById("name").value.trim();
  var message = document.getElementById("message").value.trim();

  if (name === "" || message === "") {
    alert("Please fill in all fields before sending your message.");
    return;
  }

  var params = {
    name: name,
    message: message,
  };

  const serviceID = "service_rm0muks";
  const templateID = "template_45gvk6b";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Your message sent successfully!");
    })
    .catch((err) => {
      console.log(err);
      alert("Failed to send your message. Please try again later.");
    });
}
