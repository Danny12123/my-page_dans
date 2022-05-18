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

//header nav anim
// window.addEventListener('scroll', function(){
//     //const logoMain = document.getElementsByClassName('logoimg');
//     const mainNav = document.getElementById('header');
//     const logoImage = document.querySelector('.header_logo');
    
//     const logoTxt = document.getElementById('nav_1');

//     if (window.pageYOffset > 0){
//         logoImage.style.width = '70%';
//         logoImage.style.background = '#94A66D';
//         // logoImage.style.color = '#000';
//         // logoH3.style.fontSize = '15px';
//     }
//     else {
//         logoImage.style.width = '100%';
//         // logoImage.style.background = '#fff';
//         // logoImage.style.si = '#000';
//         // logoH3.style.fontSize = '25px';
//     }
// })


