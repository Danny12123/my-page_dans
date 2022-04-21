function sendEmail() {
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "danielacquah579@gmail.com",
    Password : "9DE3E7268FF8FFF7312D54A6AD575BA94041",
    To : 'danielacquah579@gmail.com',
    From : document.getElementById("exampleFormControlInput1").value,
    Subject : "Our music page",
    Body : "name: " + document.getElementById("name").value
          + "<br> Phone no: " + document.getElementById("phone").value
          + "<br> Email: " + document.getElementById("email").value
          + "<br> Message: " + document.getElementById("message").value
}).then(
  message => alert("Message Sent Succesfully")
);
    
}