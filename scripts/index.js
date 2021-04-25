const state = {
  taskList: [],
};

const taskContents = document.querySelector(".task__contents");

const htmlTaskContent = ({
  id,
  title,
  description,
  type,
  url,
}) => ` <div class="col-md-6 col-lg-4 mt-3" id=${id}>
<div class="card shadow-sm task__card">
  <div
    class="card-header d-flex justify-content-end task__card__header"
  >
    <button type="button" class="btn btn-outline-info mr-2">
      <i class="fas fa-pencil-alt"></i>
    </button>
    <button type="button" class="btn btn-outline-danger">
      <i class="fas fa-trash-alt"></i>
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
    >
      Open Task
    </button>
  </div>
</div>
</div>`;

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
  const input = {
    url: document.getElementById("imageUrl").value,
    title: document.getElementById("taskTitle").value,
    description: document.getElementById("taskDescription").value,
    type: document.getElementById("Tags").value,
  };

  input.id = `${Date.now()}`;

  taskContents.insertAdjacentHTML("beforeend", htmlTaskContent(input));
  state.taskList.push(input);
  updateLocalStorage();
};
