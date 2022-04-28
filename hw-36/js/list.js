function fillList() {
  const list = document.createElement('ul');
  if (localStorage.inputData) {
    const parsedData = JSON.parse(localStorage.inputData);

    for (const key in parsedData) {
      const listItem = document.createElement('li');
      listItem.innerHTML = key + ': ' + parsedData[key];
      list.append(listItem);
    }
  } else {
    console.log('Нет данных для списка');
  }
  document.body.append(list);
}

fillList();
