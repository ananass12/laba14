import '../style.css'
//import javascriptLogo from '../javascript.svg'
//import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

/*document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`*/

setupCounter(document.querySelector('#counter'))

// Функция для загрузки данных из sessionStorage
function loadEditableData() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach((element, index) => {
        const savedData = sessionStorage.getItem(`editable-${index}`);
        if (savedData) {
            element.innerText = savedData;
        }
    });
}

// Функция для сохранения данных в sessionStorage
function saveEditableData() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach((element, index) => {
        sessionStorage.setItem(`editable-${index}`, element.innerText);
    });
}

// Загрузка данных при загрузке страницы
window.onload = loadEditableData;

// Сохранение данных при изменении содержимого редактируемых полей
document.querySelectorAll('.editable').forEach(element => {
    element.addEventListener('input', saveEditableData);
});


// Обработчик для кнопки "Скачать"
document.getElementById('downloadBtn').addEventListener('click', () => {
    const resumeData = document.querySelector('.container').innerHTML;
    const blob = new Blob([resumeData], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'резюме.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
