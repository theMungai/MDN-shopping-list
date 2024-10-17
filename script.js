const unorderedList = document.querySelector("ul");
const addButton = document.querySelector("button");
const userInput = document.querySelector("input");



addButton.addEventListener('click', () => {

    let inputValue = userInput.value;
    userInput.value = "";

    const list = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");

    span.textContent = inputValue
    deleteButton.textContent = "Delete";

    list.append(span, deleteButton);
    unorderedList.appendChild(list);


    deleteButton.addEventListener('click', () => {
        unorderedList.removeChild(list)
    })

    userInput.focus();
});



