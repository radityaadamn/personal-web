function sendMail() {
        var params = {
            name: document.getElementById("name").value,
            message: document.getElementById("message").value
        }
        const serviceID = "service_rm0muks";
        const templateID = "template_45gvk6b"
        emailjs.send(serviceID, templateID, params) 
            .then(
                res => {
                    document.getElementById("name").value = "";
                    document.getElementById("message").value = "";
                    console.log(res);
                    alert('Your message sent succesfully!')
                })
            .catch((err) => console.log(err));
}