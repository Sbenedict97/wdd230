// script.js
const chapterInput = document.getElementById('chapter-input');
const addButton = document.getElementById('add-button');
const chapterList = document.getElementById('chapter-list');

addButton.addEventListener('click', function() {
  const chapterText = chapterInput.value.trim();

  if (chapterText !== '') {
    const listItem = document.createElement('li');
    const deleteButton = document.createElement('button');

    listItem.textContent = chapterText;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete-button');

    deleteButton.addEventListener('click', function() {
      listItem.remove();
      chapterInput.focus();
    });

    listItem.appendChild(deleteButton);
    chapterList.appendChild(listItem);

    chapterInput.value = '';
    chapterInput.focus();
  }
});
