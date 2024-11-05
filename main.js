import '../css/style.css'
import javascriptLogo from '../javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
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
`

setupCounter(document.querySelector('#counter'))

// Сохранение данных в localStorage
document.querySelectorAll('.editable').forEach(element => {
    element.addEventListener('input', () => {
        localStorage.setItem(element.textContent.trim(), element.innerHTML);
    });
    
    // Восстановление данных из localStorage
    const savedContent = localStorage.getItem(element.textContent.trim());
    if (savedContent) {
        element.innerHTML = savedContent;
    }
});

// Ripple effect
document.querySelectorAll('.ripple').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = ${size}px;
        ripple.style.left = ${e.clientX - rect.left - size / 2}px;
        ripple.style.top = ${e.clientY - rect.top - size / 2}px;
        ripple.classList.add('ripple');
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});
// Скачать PDF (заглушка)
document.getElementById('downloadBtn').addEventListener('click', () => {
    alert('Функция скачивания PDF еще не реализована.');
});
