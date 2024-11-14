function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "mahakmaheshwari2004@gmail.com",
        Password : "maheshwari2004@",
        To : 'mahakmaheshwari2004@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form Enquiry",
        Body : "Name: "+document.getElementById("form-name").value
            + "<br> Email: "+document.getElementById("email").value
            + "<br> Message: "+document.getElementById("message").value
    }).then(
      message => alert("Message Sent Successfully")
    );
}