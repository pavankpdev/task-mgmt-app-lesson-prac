const state = {
  taskList: [],
  newTask: {
    title: "",
    url: "",
    description: "",
    type: "",
  },
};

const text = [
  {
    id: `${Date.now()}d`,
    title: "Learn DevOps Now",
    url:
      "https://images.unsplash.com/photo-1572214350916-571eac7bfced?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",
    description:
      "We can grab an element by ID with the getElementById() method of the document object. In order to be accessed by ID, the HTML element must have an id attribute. We have a div element with an ID of demo . In the Console, let's get the element and assign it to the demoId variable.20-Nov-2017",
    type: "Study",
  },
  {
    id: `${Date.now()}j`,
    title: "Learn JavaScript Now",
    url: "",
    description:
      "We can grab an element by ID with the getElementById() method of the document object. In order to be accessed by ID, the HTML element must have an id attribute. We have a div element with an ID of demo . In the Console, let's get the element and assign it to the demoId variable.20-Nov-2017",
    type: "Study",
  },
];

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

const dddd = () => {
  text.map((cardData) => {
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

  text.push(input);
  taskContents.insertAdjacentHTML("beforeend", htmlTaskContent(input));
};
