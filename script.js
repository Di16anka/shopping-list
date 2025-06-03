const list = document.quareSelector('.item');
const typing = document.quareSelector ('#input');

typing.addEventListener ('keydown', function(event) {
  const text = typing.value;
  event.key=='Enter';

 const newText = document.createElement('div');
  newText.classList.add('groceries');
  newText.textContent = text;
  if (text !='') {
  list.append(newText);
  }
    typing.value='';
 
});
    
/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
