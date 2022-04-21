const app = document.createElement('div');
const container = document.createElement('div');
app.className = 'app';
app.textContent = 'Текст';

try{

    container.style.color = (new Red()).getColor();
    container.textContent = 'текст2';
    app.appendChild(container);
    app.style.color = (new Orange()).getColor();

    document.querySelector('body').appendChild(app);
    
}catch(error){
    console.log(error.stack);
}



