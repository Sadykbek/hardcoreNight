document.addEventListener("DOMContentLoaded", function () {
  // Находим элемент с классом .highlight
  var highlightElements = document.querySelectorAll(".highlight");

  highlightElements.forEach(function (element) {
    // Получаем текст из элемента и разбиваем его на строки
    var lines = element.textContent.split("\n");
    // Очищаем содержимое элемента
    element.textContent = "";
    // Проходим по каждой строке
    lines.forEach(function (line, index) {
      // Создаем элемент span для номера строки
      var lineNumberSpan = document.createElement("span");
      lineNumberSpan.textContent = index + 1 + ". ";
      lineNumberSpan.style.userSelect = "none"; // Делаем номер строки невыделяемым
      // Создаем элемент span для текста строки
      var lineTextSpan = document.createElement("span");
      lineTextSpan.textContent = line;
      // Создаем элемент div для всей строки
      var lineDiv = document.createElement("div");
      lineDiv.appendChild(lineNumberSpan);
      lineDiv.appendChild(lineTextSpan);
      // Добавляем div с номером строки и текстом в элемент .highlight
      element.appendChild(lineDiv);
    });
  });
  //добавляем № и номер задания в классах task
  let tasks = document.querySelectorAll('.task');
  let taskNum = tasks.length;
  for(let i = 0; i < taskNum; i++){
    let span = document.createElement('span');
    let par = document.createElement('p');
    par.classList.add('header');
    span.classList.add('num');
    par.appendChild(span);
    span.textContent ="№"+ (i + 1); // Нумерация начинается с 1
    tasks[i].prepend(par); // Добавляем span как первый элемент в .task
  }
  tasks.forEach(task => {
    let hardcoreSpan = document.createElement('span');
    hardcoreSpan.classList.add('hardcore');
    hardcoreSpan.textContent = 'HARDCODENIGHT';
    task.prepend(hardcoreSpan); // Добавляем span как первый элемент в .task
  });
});

