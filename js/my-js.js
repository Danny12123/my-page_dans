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

// window.addEventListener('scroll', reveal);

// function reveal() {
//   var reveals = querySelectorAll('.reveal');

//   for(var i = 0; i < reveals.length; i++){

//     var windowheight = window.innerHeight;
//     var revealtop = reveals[i].getBoundingClientRect().top;
//     var revealpoint = 150;

//     if(revealtop < windowheight - revealpoint) {
//       reveals[i].classList.add('active');
//     }
//     else {
//       reveals[i].classList.remove('active');
//     }
//   }
// }

var Show = document.getElementById("cont_nav");
var hide = document.getElementById("close");

function open_sideNav() {
  let bigsize = "translateX(0px)"
  Show.style.transform = bigsize;
  var blockDisplay = document.getElementById("cont_nav").style.display = "block";  
}


function close_sideNav() {
  let smallsize = "translateX(200px)"
  Show.style.transform = smallsize;
  document.getElementById("cont_nav").style.display = "none";
  // if (document.getElementById("cont_nav") < smallsize ) {
  //   document.getElementById("cont_nav").style.display = "none";
  // }
  

}


