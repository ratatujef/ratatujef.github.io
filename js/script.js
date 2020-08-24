window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  const burger = document.querySelector(".humburger"),
    project = document.querySelector(".project"),
    contact = document.querySelector(".header__name"),
    overlay = document.querySelector(".overlay");

  burger.addEventListener("click", () => {
    if (burger.classList.contains("humburger_active")) {
      burger.classList.remove("humburger_active");
      project.classList.remove("project_active");
    } else {
      burger.classList.add("humburger_active");
      project.classList.add("project_active");
    }
  });
<<<<<<< HEAD
  //отправка почты

  // let form = document.querySelector('form');

  // form.addEventListener('submit', function(e){
  //   e.preventDefault();
  //   let formData = new FormData([form]);
  //   let xhr = new XMLHttpRequest();
  //   xhr.open('POST', "mailer/smart.php");
  //   xhr.send(formData);
  //   xhr.onload=()=>alert(xhr.response);
  // })
  
=======
  contact.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.classList.toggle("overlay_active");
  });

  overlay.addEventListener("click", (e) => {
    if (e.target == overlay) overlay.classList.toggle("overlay_active");
  });
>>>>>>> 2ad0510f84af19750d12d405c132f37127764cd0
});
