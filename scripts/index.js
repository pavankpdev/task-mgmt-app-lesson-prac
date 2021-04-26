const state = {
  taskList: [],
};

const taskContents = document.querySelector(".task__contents");
const taskModal = document.querySelector(".task__modal__body");

const htmlTaskContent = ({
  id,
  title,
  description,
  type,
  url,
}) => ` <div class="col-md-6 col-lg-4 mt-3" id=${id} key=${id}>
<div class="card shadow-sm task__card">
  <div
    class="card-header d-flex justify-content-end task__card__header"
  >
    <button type="button" class="btn btn-outline-info mr-2" id=${id}>
      <i class="fas fa-pencil-alt"></i>
    </button>
    <button type="button" class="btn btn-outline-danger" id=${id} onclick="deleteTask.apply(this, arguments)">
      <i class="fas fa-trash-alt" id=${id}></i>
    </button>
  </div>
  <div class="card-body">
  ${
    url &&
    `          <img width="100%" src=${url} alt="Card image cap" class="card-img-top mb-3 rounded-lg">
  `
  }
    <h4 class="task__card__title">${title}</h4>
    <p class="description trim-3-lines text-muted">
     ${description}
    </p>
    <div class="tags text-white d-flex flex-wrap">
      <span class="badge bg-primary m-1">${type}</span>
    </div>
  </div>
  <div class="card-footer">
    <button
      type="button"
      class="btn btn-outline-primary float-right"
      data-bs-toggle="modal"
      data-bs-target="#showTask"
      onclick="openTask.apply(this, arguments)"
      id=${id}
    >
      Open Task
    </button>
  </div>
</div>
</div>`;

const htmlModalContent = ({ id, title, description, type, url }) => {
  const date = new Date(id);
  return ` <div id=${id}>
  <img
  src=${
    url ||
    `https://images.unsplash.com/photo-1572214350916-571eac7bfced?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80`
  }
  alt="bg image"
  class="img-fluid place__holder__image mb-3"
  />
  <strong class="text-sm text-muted">Created on ${date.toDateString()}</strong>
  <h2 class="my-3">${title}</h2>
  <p class="lead">
  ${description}
  </p></div>`;
};

const updateLocalStorage = () => {
  localStorage.setItem("tasky", JSON.stringify({ tasks: state.taskList }));
};

const loadInitialData = () => {
  const localStorageCopy = JSON.parse(localStorage.tasky);
  if (localStorageCopy) state.taskList = localStorageCopy.tasks;
  state.taskList.map((cardData) => {
    taskContents.insertAdjacentHTML("beforeend", htmlTaskContent(cardData));
  });
};

const handlesubmit = (e) => {
  const id = `${Date.now()}`;
  const input = {
    url: document.getElementById("imageUrl").value,
    title: document.getElementById("taskTitle").value,
    description: document.getElementById("taskDescription").value,
    type: document.getElementById("Tags").value,
  };

  taskContents.insertAdjacentHTML(
    "beforeend",
    htmlTaskContent({ ...input, id })
  );
  state.taskList.push({ ...input, id });
  updateLocalStorage();
};

const openTask = (e) => {
  if (!e) e = window.event;

  const getTask = state.taskList.filter(({ id }) => id === e.target.id);
  taskModal.innerHTML = htmlModalContent(getTask[0]);
};

const deleteTask = (e) => {
  if (!e) e = window.event;
  const targetID = e.target.id;
  const type = e.target.tagName;
  const removeTask = state.taskList.filter(({ id }) => id !== targetID);
  state.taskList = removeTask;

  updateLocalStorage();
  if (type === "BUTTON")
    return e.target.parentNode.parentNode.parentNode.parentNode.removeChild(
      e.target.parentNode.parentNode.parentNode
    );
  return e.target.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(
    e.target.parentNode.parentNode.parentNode.parentNode
  );
};
