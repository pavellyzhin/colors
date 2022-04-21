const app = document.createElement('div');

app.className = 'app';

app.textContent = 'Текст';

app.style.color = (new Orange()).getColor();

document.querySelector('body').appendChild(app);