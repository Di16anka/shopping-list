const purchase = document.querySelector('#input');
const list = document.querySelector('.item');

purchase.onclick = function(event) {
      if (event.key == 'Enter') {
    };
purchase.addEventListener ('click' , addItem); 
function addItem() {
    const itemName = purchase.value;
    if (itemName !== '') {
       purchase.value = '';
           
    }      
      
     const toDo = document.createElement('li');
      const text = purchase.value;
      toDo.textContent = text;
      toDo.addEventListener ('click' , function () {
      toDo.classList.add('done');
            list.append (toDo);
      });
     
            
            
/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
