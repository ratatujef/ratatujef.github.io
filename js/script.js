window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  let burger = document.querySelector(".humburger"),
    project = document.querySelector(".project");

  burger.addEventListener("click", () => {
    if (burger.classList.contains("humburger_active")) {
      burger.classList.remove("humburger_active");
      project.classList.remove("project_active");
    } else {
      burger.classList.add("humburger_active");
      project.classList.add("project_active");
    }
  });
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
  
});
