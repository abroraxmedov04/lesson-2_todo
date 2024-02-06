const elform = document.querySelector(".js-form");
const elInput = document.querySelector(".js-input");
const elWrapperUl = document.querySelector(".task-list");
const eltemplate = document.querySelector(".js-template").content;
const elBtnDelete = document.querySelectorAll(".js-btn");
let count = 1;

elform.addEventListener("submit", (evt) => {
  evt.preventDefault();
  addTask();
  elInput.textContent = "";
});

function addTask() {
  let inpValue = elInput.value.trim();
  if (inpValue !== "") {
    const templateClone = eltemplate.cloneNode(true);
    templateClone.querySelector(".task-id").textContent = count + ".";
    templateClone.querySelector(".task-name").textContent = inpValue;
    templateClone.querySelector(".js-btn").textContent = "Delete";
    elWrapperUl.appendChild(templateClone);
    count++;
    elInput.value = "";
  } else {
    alert("Please enter a task before adding.");
  }
}

elWrapperUl.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("js-btn")) {
    const listItem = target.parentNode;
    listItem && listItem.classList.contains("task-item")
      ? listItem.remove()
      : console.log("nth was found");
  }
});
