'use strict';

const DB_NAME = 'saved_data';
const todoContainer = document.getElementById('todoItems');
let currentItemId = 0;

document.querySelector('#todoForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = e.target.querySelectorAll('input, textarea');

    const obj = {
        completed: false,
        itemId: ++currentItemId,
    };

    for (const input of inputs) {
        if (!input.value.length) return alert('No way you can add this shit');
        obj[input.name] = input.value;
    }

    saveData(obj);
    renderItem(obj);
    e.target.reset();
});

todoContainer.addEventListener('change', checkTodoItem);
todoContainer.addEventListener('click', removeItem);
document
    .querySelector('.remove-all')
    .addEventListener('click', removerAllTodos);

function saveData(todoItem) {
    if (localStorage[DB_NAME]) {
        const data = JSON.parse(localStorage[DB_NAME]);
        data.push(todoItem);
        localStorage.setItem(DB_NAME, JSON.stringify(data));
        return data;
    }

    const data = [todoItem];
    localStorage.setItem(DB_NAME, JSON.stringify(data));
    return data;
}

window.addEventListener('load', () => {
    if (!localStorage[DB_NAME].length) return;
    const data = JSON.parse(localStorage[DB_NAME]);
    data.forEach((item) => renderItem(item));
});

function renderItem(todoItem) {
    const template = createTemplate(
        todoItem.title,
        todoItem.description,
        todoItem.itemId,
        todoItem.completed
    );
    document.querySelector('#todoItems').prepend(template);
}

function createTemplate(
    titleText = '',
    descriptionText = '',
    itemId,
    completed
) {
    const mainWrp = document.createElement('div');
    mainWrp.className = 'col-4';

    const wrp = document.createElement('div');
    wrp.className = 'taskWrapper';
    mainWrp.append(wrp);

    const title = document.createElement('div');
    title.innerHTML = titleText;
    title.className = 'taskHeading';
    wrp.append(title);

    const description = document.createElement('div');
    description.innerHTML = descriptionText;
    description.className = 'taskDescription';
    wrp.append(description);

    const completedField = document.createElement('label');
    completedField.className = 'completed form-check';
    wrp.append(completedField);

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.className = 'form-check-input';
    checkBox.dataset.itemId = itemId;
    checkBox.checked = completed;
    completedField.append(checkBox);

    const checkboxText = document.createElement('span');
    checkboxText.innerHTML = 'Done';
    completedField.append(checkboxText);

    const removingButton = document.createElement('button');
    removingButton.dataset.itemId = itemId;
    removingButton.className = 'btn btn-danger delete-btn';
    removingButton.innerHTML = 'Delete';
    wrp.append(removingButton);

    return mainWrp;
}

function changeCompleted(itemId, DB_NAME, status) {
    if (!itemId) throw new Error('itemId is not defined');

    const data = JSON.parse(localStorage.getItem(DB_NAME));
    const currentItem = data.find((todoItem) => todoItem.itemId === +itemId);
    currentItem.completed = status;

    localStorage.setItem(DB_NAME, JSON.stringify(data));
}

function checkTodoItem({ target }) {
    const itemId = target.getAttribute('data-item-id');
    const status = target.checked;
    changeCompleted(itemId, DB_NAME, status);
}

function removeItem({ target }) {
    if (!target.classList.contains('delete-btn')) return;
    const itemId = target.getAttribute('data-item-id');
    if (!itemId) throw new Error('No id provided');

    const data = JSON.parse(localStorage.getItem(DB_NAME));
    const currentItemIndex = data.findIndex(
        (todoItem) => todoItem.itemId === +itemId
    );
    data.splice(currentItemIndex, 1);

    localStorage.setItem(DB_NAME, JSON.stringify(data));
    target.closest('.taskWrapper').parentElement.remove();
}

function removerAllTodos() {
    localStorage.removeItem(DB_NAME);
    todoContainer.innerHTML = '';
}
