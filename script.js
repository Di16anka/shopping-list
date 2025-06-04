const input =
const purchase = document.querySelector('#input');
const toDo = document.createElement('li');
const list = document.querySelector ('.item'); 

    purchase.onclick = function(event) {
      if (event.key == 'Enter') {
    list.click();
};

      list.addEventListener ('click', 
    function done (){
      if 
/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
