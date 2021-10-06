let form = document.querySelector('#form');

form.onsubmit = function() {
let formData = new FormData(form),
  text = formData.get('name');
  localStorage.setItem("name",text);
  window.open("/html/thanks.html")
};