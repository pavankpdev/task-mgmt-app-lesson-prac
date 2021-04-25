var addNewModal = document.getElementById("addNewModal");
var addNewTaskBtn = document.getElementById("addNewTaskBtn");

addNewModal.addEventListener("shown.bs.modal", function () {
  addNewTaskBtn.focus();
});
